# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import warnings
from typing import TYPE_CHECKING, Optional, Union, List, Dict, Any, Mapping, cast, overload
from typing_extensions import Literal
from ...._utils import extract_files, maybe_transform, required_args, deepcopy_minimal, strip_not_given
from ...._types import NotGiven, Timeout, Headers, NoneType, Query, Body, NOT_GIVEN, UnknownResponse, FileTypes, BinaryResponseContent
from ...._base_client import AsyncPaginator, make_request_options, HttpxBinaryResponseContent
from ...._resource import SyncAPIResource, AsyncAPIResource
from ...._base_client import SyncAPIClient, AsyncAPIClient, _merge_mappings
from ....types import shared_params
from ....types.projects.artifacts import content_upload_params

import httpx

from ....types.projects import Artifact, artifact

from ...._types import FileTypes

from ...._response import to_raw_response_wrapper, async_to_raw_response_wrapper

from ... import _types, _response

if TYPE_CHECKING:
  from ...._client import AsyncDocugami, Docugami

__all__ = ["Contents", "AsyncContents"]

class Contents(SyncAPIResource):
    with_raw_response: ContentsWithRawResponse

    def __init__(self, client: Docugami) -> None:
        super().__init__(client)
        self.with_raw_response = ContentsWithRawResponse(self)

    def list(self,
    artifact_id: str,
    *,
    project_id: str,
    version: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> HttpxBinaryResponseContent:
        """
        Downloads an artifact

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            f"/projects/{project_id}/artifacts/{version}/{artifact_id}/content",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=HttpxBinaryResponseContent,
        )

    def upload(self,
    version: str,
    *,
    project_id: str,
    file: FileTypes,
    document_id: str | NotGiven = NOT_GIVEN,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Artifact:
        """The maximum request size is 150 MB.

        The allowed file extensions are: .xml,
        .json, .csv, .xlsx, .pdf, and .docx.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        body = deepcopy_minimal({
            "file": file,
            "document_id": document_id,
        })
        files = extract_files(
          cast(Mapping[str, object], body),
          paths=[["file"]]
        )
        if files:
          # It should be noted that the actual Content-Type header that will be
          # sent to the server will contain a `boundary` parameter, e.g.
          # multipart/form-data; boundary=---abc--
          extra_headers = {"Content-Type": "multipart/form-data", **(extra_headers or {})}

        return self._post(
            f"/projects/{project_id}/artifacts/{version}/content",
            body=maybe_transform(body, content_upload_params.ContentUploadParams),
            files=files,
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=Artifact,
        )

class AsyncContents(AsyncAPIResource):
    with_raw_response: AsyncContentsWithRawResponse

    def __init__(self, client: AsyncDocugami) -> None:
        super().__init__(client)
        self.with_raw_response = AsyncContentsWithRawResponse(self)

    async def list(self,
    artifact_id: str,
    *,
    project_id: str,
    version: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> HttpxBinaryResponseContent:
        """
        Downloads an artifact

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            f"/projects/{project_id}/artifacts/{version}/{artifact_id}/content",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=HttpxBinaryResponseContent,
        )

    async def upload(self,
    version: str,
    *,
    project_id: str,
    file: FileTypes,
    document_id: str | NotGiven = NOT_GIVEN,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Artifact:
        """The maximum request size is 150 MB.

        The allowed file extensions are: .xml,
        .json, .csv, .xlsx, .pdf, and .docx.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        body = deepcopy_minimal({
            "file": file,
            "document_id": document_id,
        })
        files = extract_files(
          cast(Mapping[str, object], body),
          paths=[["file"]]
        )
        if files:
          # It should be noted that the actual Content-Type header that will be
          # sent to the server will contain a `boundary` parameter, e.g.
          # multipart/form-data; boundary=---abc--
          extra_headers = {"Content-Type": "multipart/form-data", **(extra_headers or {})}

        return await self._post(
            f"/projects/{project_id}/artifacts/{version}/content",
            body=maybe_transform(body, content_upload_params.ContentUploadParams),
            files=files,
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=Artifact,
        )

class ContentsWithRawResponse:
    def __init__(self, contents: Contents) -> None:
        self.list = to_raw_response_wrapper(
            contents.list,
        )
        self.upload = to_raw_response_wrapper(
            contents.upload,
        )

class AsyncContentsWithRawResponse:
    def __init__(self, contents: AsyncContents) -> None:
        self.list = async_to_raw_response_wrapper(
            contents.list,
        )
        self.upload = async_to_raw_response_wrapper(
            contents.upload,
        )