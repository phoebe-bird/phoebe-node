import logging
from pathlib import Path
import tempfile
from time import sleep
from typing import Dict, List, Union

import requests

from .. import Docugami
from ..types.document import Document

log: logging.Logger = logging.getLogger(__name__)


def upload_to_named_docset(
    client: Docugami,
    local_paths: Union[List[Path], List[str]],
    docset_name: str,
) -> List[Document]:
    """
    Uploads files to a given docset (by name).

    If a docset by the given name does not exist, it is created.

    If a file with the same name was previously uploaded, it is not re-uploaded.
    """
    docset_list_response = client.docsets.list(name=docset_name)
    if docset_list_response and docset_list_response.docsets:
        # Docset already exists with this name
        docset_id = docset_list_response.docsets[0].id
    else:
        # Create a new docset
        dg_docset = client.docsets.create(name=docset_name)
        docset_id = dg_docset.id

    if not docset_id:
        raise Exception(f"Could not create or detect docset_id for docset: {docset_name}")

    document_list_response = client.documents.list(limit=int(1e5))  # TODO: paginate
    conflict_docs: List[Document] = []
    uploaded_docs: List[Document] = []
    if document_list_response and document_list_response.documents:
        new_names = [Path(f).name for f in local_paths]

        conflict_docs = [d for d in document_list_response.documents if Path(d.name).name in new_names]
        conflict_names = [Path(d.name).name for d in conflict_docs]

        # Upload any new files that don't have name conflicts
        for f in local_paths:
            if Path(f).name not in conflict_names:
                uploaded_docs.append(
                    client.documents.contents.upload(
                        file=Path(f).absolute(),
                        docset_id=docset_id,
                    )
                )
    return uploaded_docs + conflict_docs


def wait_for_dgml(client: Docugami, docs: List[Document], poll_wait_seconds: int = 30) -> Dict[str, str]:
    """
    Polls the Docugami API until DGML is availabe for the given documents. Once DGML is available, downloads
    it locally to a temporary file.

    Returns: Dict mapping file name to local DGML temporary path.
    """
    dgml_paths: dict[str, str] = {}

    while len(dgml_paths) < len(docs):
        # Check to make sure all docs are correctly assigned to docsets
        docset_id_to_count = {}
        for doc in docs:
            doc = client.documents.retrieve(doc.id)  # update with latest
            if not doc.docset:
                raise Exception(f"Document is not assigned to a docset, XML will not be generated: {doc.name}")

            docset_id = doc.docset.id
            if docset_id not in docset_id_to_count:
                # fetch # of docs in docset
                docset_length = client.docsets.retrieve(docset_id).document_count
                docset_id_to_count[docset_id] = docset_length

            if docset_id_to_count[docset_id] < 6:  # current min doc size
                raise Exception(
                    f"Document is assigned to docset with less than 6 docs, XML will not be generated: {doc.name}"
                )

            current_status = doc.status
            if current_status == "Error":
                raise Exception(
                    "Document could not be processed, please confirm it is not a zero length, corrupt or password protected file"
                )
            elif current_status == "Ready":
                dgml_url = doc.docset.dgml_url
                if not dgml_url:
                    raise Exception(f"Document is processed, but no DGML URL was assigned: {doc}")
                dgml_response = requests.get(dgml_url, headers=client.auth_headers)
                if not dgml_response.ok:
                    raise Exception(f"Could not download DGML artifact {dgml_url}: {dgml_response.status_code}")
                dgml_contents = dgml_response.text
                with tempfile.NamedTemporaryFile(delete=False, mode="w") as temp_file:
                    temp_file.write(dgml_contents)
                    temp_file_path = temp_file.name
                    dgml_paths[doc.name] = temp_file_path

        if log.isEnabledFor(logging.INFO):
            log.info(f"{len(dgml_paths)} docs done processing out of {len(docs)}...")

        if len(dgml_paths) == len(docs):
            break  # done
        else:
            sleep(poll_wait_seconds)  # poll again after a wait

    return dgml_paths
