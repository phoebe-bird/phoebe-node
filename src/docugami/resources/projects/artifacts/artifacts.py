# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import TYPE_CHECKING

import httpx

from .contents import (
    Contents,
    AsyncContents,
    ContentsWithRawResponse,
    AsyncContentsWithRawResponse,
)
from ...._types import NOT_GIVEN, Body, Query, Headers, NoneType, NotGiven
from ...._utils import maybe_transform
from ...._resource import SyncAPIResource, AsyncAPIResource
from ...._response import to_raw_response_wrapper, async_to_raw_response_wrapper
from ...._base_client import make_request_options
from ....types.projects import (
    Artifact,
    ArtifactRetrieveResponse,
    artifact_retrieve_params,
)

if TYPE_CHECKING:
    from ...._client import Docugami, AsyncDocugami

__all__ = ["Artifacts", "AsyncArtifacts"]


class Artifacts(SyncAPIResource):
    contents: Contents
    with_raw_response: ArtifactsWithRawResponse

    def __init__(self, client: Docugami) -> None:
        super().__init__(client)
        self.contents = Contents(client)
        self.with_raw_response = ArtifactsWithRawResponse(self)

    def retrieve(
        self,
        version: str | NotGiven = NOT_GIVEN,
        *,
        project_id: str,
        cursor: str | NotGiven = NOT_GIVEN,
        document: artifact_retrieve_params.Document | NotGiven = NOT_GIVEN,
        is_read_only: bool | NotGiven = NOT_GIVEN,
        limit: int | NotGiven = NOT_GIVEN,
        max_size: int | NotGiven = NOT_GIVEN,
        min_size: int | NotGiven = NOT_GIVEN,
        name: str | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> ArtifactRetrieveResponse:
        """
        List artifacts

        Args:
          cursor: Opaque continuation token used to get additional items when a previous query
              returned more than `limit` items.

          isReadOnly: Filters artifacts by read-only status.

          limit: Maximum number of items to return.

          maxSize: Filters artifacts by maximum file size in bytes

          minSize: Filters artifacts by minimum file size in bytes.

          name: Filters artifacts by name.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            f"/projects/{project_id}/artifacts/{version}",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "cursor": cursor,
                        "document": document,
                        "is_read_only": is_read_only,
                        "limit": limit,
                        "max_size": max_size,
                        "min_size": min_size,
                        "name": name,
                    },
                    artifact_retrieve_params.ArtifactRetrieveParams,
                ),
            ),
            cast_to=ArtifactRetrieveResponse,
        )

    def delete(
        self,
        artifact_id: str,
        *,
        project_id: str,
        version: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> None:
        """
        Read-only artifacts cannot be deleted.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return self._delete(
            f"/projects/{project_id}/artifacts/{version}/{artifact_id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=NoneType,
        )

    def get(
        self,
        artifact_id: str,
        *,
        project_id: str,
        version: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Artifact:
        """
        Get an artifact

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            f"/projects/{project_id}/artifacts/{version}/{artifact_id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Artifact,
        )


class AsyncArtifacts(AsyncAPIResource):
    contents: AsyncContents
    with_raw_response: AsyncArtifactsWithRawResponse

    def __init__(self, client: AsyncDocugami) -> None:
        super().__init__(client)
        self.contents = AsyncContents(client)
        self.with_raw_response = AsyncArtifactsWithRawResponse(self)

    async def retrieve(
        self,
        version: str | NotGiven = NOT_GIVEN,
        *,
        project_id: str,
        cursor: str | NotGiven = NOT_GIVEN,
        document: artifact_retrieve_params.Document | NotGiven = NOT_GIVEN,
        is_read_only: bool | NotGiven = NOT_GIVEN,
        limit: int | NotGiven = NOT_GIVEN,
        max_size: int | NotGiven = NOT_GIVEN,
        min_size: int | NotGiven = NOT_GIVEN,
        name: str | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> ArtifactRetrieveResponse:
        """
        List artifacts

        Args:
          cursor: Opaque continuation token used to get additional items when a previous query
              returned more than `limit` items.

          isReadOnly: Filters artifacts by read-only status.

          limit: Maximum number of items to return.

          maxSize: Filters artifacts by maximum file size in bytes

          minSize: Filters artifacts by minimum file size in bytes.

          name: Filters artifacts by name.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            f"/projects/{project_id}/artifacts/{version}",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "cursor": cursor,
                        "document": document,
                        "is_read_only": is_read_only,
                        "limit": limit,
                        "max_size": max_size,
                        "min_size": min_size,
                        "name": name,
                    },
                    artifact_retrieve_params.ArtifactRetrieveParams,
                ),
            ),
            cast_to=ArtifactRetrieveResponse,
        )

    async def delete(
        self,
        artifact_id: str,
        *,
        project_id: str,
        version: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> None:
        """
        Read-only artifacts cannot be deleted.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return await self._delete(
            f"/projects/{project_id}/artifacts/{version}/{artifact_id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=NoneType,
        )

    async def get(
        self,
        artifact_id: str,
        *,
        project_id: str,
        version: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Artifact:
        """
        Get an artifact

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            f"/projects/{project_id}/artifacts/{version}/{artifact_id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Artifact,
        )


class ArtifactsWithRawResponse:
    def __init__(self, artifacts: Artifacts) -> None:
        self.contents = ContentsWithRawResponse(artifacts.contents)

        self.retrieve = to_raw_response_wrapper(
            artifacts.retrieve,
        )
        self.delete = to_raw_response_wrapper(
            artifacts.delete,
        )
        self.get = to_raw_response_wrapper(
            artifacts.get,
        )


class AsyncArtifactsWithRawResponse:
    def __init__(self, artifacts: AsyncArtifacts) -> None:
        self.contents = AsyncContentsWithRawResponse(artifacts.contents)

        self.retrieve = async_to_raw_response_wrapper(
            artifacts.retrieve,
        )
        self.delete = async_to_raw_response_wrapper(
            artifacts.delete,
        )
        self.get = async_to_raw_response_wrapper(
            artifacts.get,
        )
