# Documents

Types:

```python
from docugami.types import Document, DocumentListResponse
```

Methods:

- <code title="get /documents/{id}">client.documents.<a href="./src/docugami/resources/documents/documents.py">retrieve</a>(id) -> <a href="./src/docugami/types/document.py">Document</a></code>
- <code title="get /documents">client.documents.<a href="./src/docugami/resources/documents/documents.py">list</a>(\*\*<a href="src/docugami/types/document_list_params.py">params</a>) -> <a href="./src/docugami/types/document_list_response.py">DocumentListResponse</a></code>
- <code title="delete /documents/{id}">client.documents.<a href="./src/docugami/resources/documents/documents.py">delete</a>(id) -> None</code>

## Contents

Methods:

- <code title="get /documents/{id}/content">client.documents.contents.<a href="./src/docugami/resources/documents/contents.py">download</a>(id) -> HttpxBinaryResponseContent</code>
- <code title="post /documents/content">client.documents.contents.<a href="./src/docugami/resources/documents/contents.py">upload</a>(\*\*<a href="src/docugami/types/documents/content_upload_params.py">params</a>) -> <a href="./src/docugami/types/document.py">Document</a></code>

# Docsets

Types:

```python
from docugami.types import Docset, DocsetListResponse
```

Methods:

- <code title="post /docsets">client.docsets.<a href="./src/docugami/resources/docsets/docsets.py">create</a>(\*\*<a href="src/docugami/types/docset_create_params.py">params</a>) -> <a href="./src/docugami/types/docset.py">Docset</a></code>
- <code title="get /docsets/{id}">client.docsets.<a href="./src/docugami/resources/docsets/docsets.py">retrieve</a>(id) -> <a href="./src/docugami/types/docset.py">Docset</a></code>
- <code title="get /docsets">client.docsets.<a href="./src/docugami/resources/docsets/docsets.py">list</a>(\*\*<a href="src/docugami/types/docset_list_params.py">params</a>) -> <a href="./src/docugami/types/docset_list_response.py">DocsetListResponse</a></code>
- <code title="delete /docsets/{id}">client.docsets.<a href="./src/docugami/resources/docsets/docsets.py">delete</a>(id) -> None</code>

## Documents

Types:

```python
from docugami.types.docsets import DocumentListResponse, DocumentDgmlResponse
```

Methods:

- <code title="get /docsets/{docsetId}/documents/{documentId}">client.docsets.documents.<a href="./src/docugami/resources/docsets/documents.py">retrieve</a>(document_id, \*, docset_id) -> <a href="./src/docugami/types/document.py">Document</a></code>
- <code title="get /docsets/{id}/documents">client.docsets.documents.<a href="./src/docugami/resources/docsets/documents.py">list</a>(id, \*\*<a href="src/docugami/types/docsets/document_list_params.py">params</a>) -> <a href="./src/docugami/types/docsets/document_list_response.py">DocumentListResponse</a></code>
- <code title="delete /docsets/{docsetId}/documents/{documentId}">client.docsets.documents.<a href="./src/docugami/resources/docsets/documents.py">delete</a>(document_id, \*, docset_id) -> None</code>
- <code title="put /docsets/{docsetId}/documents/{documentId}">client.docsets.documents.<a href="./src/docugami/resources/docsets/documents.py">add</a>(document_id, \*, docset_id) -> <a href="./src/docugami/types/docset.py">Docset</a></code>
- <code title="get /docsets/{docsetId}/documents/{documentId}/dgml">client.docsets.documents.<a href="./src/docugami/resources/docsets/documents.py">dgml</a>(document_id, \*, docset_id) -> str</code>

# Projects

Types:

```python
from docugami.types import Project, ProjectListResponse
```

Methods:

- <code title="get /projects/{id}">client.projects.<a href="./src/docugami/resources/projects/projects.py">retrieve</a>(id) -> <a href="./src/docugami/types/project.py">Project</a></code>
- <code title="get /projects">client.projects.<a href="./src/docugami/resources/projects/projects.py">list</a>(\*\*<a href="src/docugami/types/project_list_params.py">params</a>) -> <a href="./src/docugami/types/project_list_response.py">ProjectListResponse</a></code>
- <code title="delete /projects/{id}">client.projects.<a href="./src/docugami/resources/projects/projects.py">delete</a>(id) -> None</code>

## Artifacts

Types:

```python
from docugami.types.projects import Artifact, ArtifactListResponse
```

Methods:

- <code title="get /projects/{projectId}/artifacts/{version}/{artifactId}">client.projects.artifacts.<a href="./src/docugami/resources/projects/artifacts/artifacts.py">retrieve</a>(artifact_id, \*, project_id, version) -> <a href="./src/docugami/types/projects/artifact.py">Artifact</a></code>
- <code title="get /projects/{projectId}/artifacts/{version}">client.projects.artifacts.<a href="./src/docugami/resources/projects/artifacts/artifacts.py">list</a>(version, \*, project_id, \*\*<a href="src/docugami/types/projects/artifact_list_params.py">params</a>) -> <a href="./src/docugami/types/projects/artifact_list_response.py">ArtifactListResponse</a></code>
- <code title="delete /projects/{projectId}/artifacts/{version}/{artifactId}">client.projects.artifacts.<a href="./src/docugami/resources/projects/artifacts/artifacts.py">delete</a>(artifact_id, \*, project_id, version) -> None</code>

### Contents

Methods:

- <code title="get /projects/{projectId}/artifacts/{version}/{artifactId}/content">client.projects.artifacts.contents.<a href="./src/docugami/resources/projects/artifacts/contents.py">download</a>(artifact_id, \*, project_id, version) -> HttpxBinaryResponseContent</code>
- <code title="post /projects/{projectId}/artifacts/{version}/content">client.projects.artifacts.contents.<a href="./src/docugami/resources/projects/artifacts/contents.py">upload</a>(version, \*, project_id, \*\*<a href="src/docugami/types/projects/artifacts/content_upload_params.py">params</a>) -> <a href="./src/docugami/types/projects/artifact.py">Artifact</a></code>

# Workspaces

Types:

```python
from docugami.types import Workspace
```

Methods:

- <code title="get /workspace">client.workspaces.<a href="./src/docugami/resources/workspaces.py">get</a>() -> <a href="./src/docugami/types/workspace.py">Workspace</a></code>

# Webhooks

Types:

```python
from docugami.types import Webhook, WebhookListResponse
```

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/docugami/resources/webhooks.py">create</a>(\*\*<a href="src/docugami/types/webhook_create_params.py">params</a>) -> <a href="./src/docugami/types/webhook.py">Webhook</a></code>
- <code title="get /webhooks/{id}">client.webhooks.<a href="./src/docugami/resources/webhooks.py">retrieve</a>(id) -> <a href="./src/docugami/types/webhook.py">Webhook</a></code>
- <code title="get /webhooks">client.webhooks.<a href="./src/docugami/resources/webhooks.py">list</a>(\*\*<a href="src/docugami/types/webhook_list_params.py">params</a>) -> <a href="./src/docugami/types/webhook_list_response.py">WebhookListResponse</a></code>
- <code title="delete /webhooks/{id}">client.webhooks.<a href="./src/docugami/resources/webhooks.py">delete</a>(id) -> None</code>
