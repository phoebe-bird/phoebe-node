# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import TYPE_CHECKING, List

import httpx

from ...types import (
    Docset,
    DocsetListResponse,
    docset_list_params,
    docset_create_params,
)
from ..._types import NOT_GIVEN, Body, Query, Headers, NoneType, NotGiven
from ..._utils import maybe_transform
from .documents import (
    Documents,
    AsyncDocuments,
    DocumentsWithRawResponse,
    AsyncDocumentsWithRawResponse,
)
from ..._resource import SyncAPIResource, AsyncAPIResource
from ..._response import to_raw_response_wrapper, async_to_raw_response_wrapper
from ..._base_client import make_request_options

if TYPE_CHECKING:
    from ..._client import Docugami, AsyncDocugami

__all__ = ["Docsets", "AsyncDocsets"]


class Docsets(SyncAPIResource):
    documents: Documents
    with_raw_response: DocsetsWithRawResponse

    def __init__(self, client: Docugami) -> None:
        super().__init__(client)
        self.documents = Documents(client)
        self.with_raw_response = DocsetsWithRawResponse(self)

    def create(
        self,
        *,
        name: str,
        documents: List[str] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Docset:
        """
        Create a docset

        Args:
          name: The name of the docset.

          documents: Optional collection of document ids to include in the new docset. Documents will
              be moved if they already belong to a docset.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._post(
            "/docsets",
            body=maybe_transform(
                {
                    "name": name,
                    "documents": documents,
                },
                docset_create_params.DocsetCreateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Docset,
        )

    def retrieve(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Docset:
        """
        Get a docset

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            f"/docsets/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Docset,
        )

    def list(
        self,
        *,
        cursor: str | NotGiven = NOT_GIVEN,
        limit: int | NotGiven = NOT_GIVEN,
        max_documents: int | NotGiven = NOT_GIVEN,
        min_documents: int | NotGiven = NOT_GIVEN,
        name: str | NotGiven = NOT_GIVEN,
        samples: bool | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> DocsetListResponse:
        """
        List docsets

        Args:
          cursor: Opaque continuation token used to get additional items when a previous query
              returned more than `limit` items.

          limit: Maximum number of items to return.

          maxDocuments: Filters docsets by maximum number of documents in the set.

          minDocuments: Filters docsets by minimum number of documents in the set.

          name: Filters docsets by name.

          samples: Whether or not to return sample docsets.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            "/docsets",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "cursor": cursor,
                        "limit": limit,
                        "max_documents": max_documents,
                        "min_documents": min_documents,
                        "name": name,
                        "samples": samples,
                    },
                    docset_list_params.DocsetListParams,
                ),
            ),
            cast_to=DocsetListResponse,
        )

    def delete(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> None:
        """
        Deleting a docset does _not_ delete any documents it contains.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return self._delete(
            f"/docsets/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=NoneType,
        )


class AsyncDocsets(AsyncAPIResource):
    documents: AsyncDocuments
    with_raw_response: AsyncDocsetsWithRawResponse

    def __init__(self, client: AsyncDocugami) -> None:
        super().__init__(client)
        self.documents = AsyncDocuments(client)
        self.with_raw_response = AsyncDocsetsWithRawResponse(self)

    async def create(
        self,
        *,
        name: str,
        documents: List[str] | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Docset:
        """
        Create a docset

        Args:
          name: The name of the docset.

          documents: Optional collection of document ids to include in the new docset. Documents will
              be moved if they already belong to a docset.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._post(
            "/docsets",
            body=maybe_transform(
                {
                    "name": name,
                    "documents": documents,
                },
                docset_create_params.DocsetCreateParams,
            ),
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Docset,
        )

    async def retrieve(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Docset:
        """
        Get a docset

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            f"/docsets/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Docset,
        )

    async def list(
        self,
        *,
        cursor: str | NotGiven = NOT_GIVEN,
        limit: int | NotGiven = NOT_GIVEN,
        max_documents: int | NotGiven = NOT_GIVEN,
        min_documents: int | NotGiven = NOT_GIVEN,
        name: str | NotGiven = NOT_GIVEN,
        samples: bool | NotGiven = NOT_GIVEN,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> DocsetListResponse:
        """
        List docsets

        Args:
          cursor: Opaque continuation token used to get additional items when a previous query
              returned more than `limit` items.

          limit: Maximum number of items to return.

          maxDocuments: Filters docsets by maximum number of documents in the set.

          minDocuments: Filters docsets by minimum number of documents in the set.

          name: Filters docsets by name.

          samples: Whether or not to return sample docsets.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            "/docsets",
            options=make_request_options(
                extra_headers=extra_headers,
                extra_query=extra_query,
                extra_body=extra_body,
                timeout=timeout,
                query=maybe_transform(
                    {
                        "cursor": cursor,
                        "limit": limit,
                        "max_documents": max_documents,
                        "min_documents": min_documents,
                        "name": name,
                        "samples": samples,
                    },
                    docset_list_params.DocsetListParams,
                ),
            ),
            cast_to=DocsetListResponse,
        )

    async def delete(
        self,
        id: str,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> None:
        """
        Deleting a docset does _not_ delete any documents it contains.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return await self._delete(
            f"/docsets/{id}",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=NoneType,
        )


class DocsetsWithRawResponse:
    def __init__(self, docsets: Docsets) -> None:
        self.documents = DocumentsWithRawResponse(docsets.documents)

        self.create = to_raw_response_wrapper(
            docsets.create,
        )
        self.retrieve = to_raw_response_wrapper(
            docsets.retrieve,
        )
        self.list = to_raw_response_wrapper(
            docsets.list,
        )
        self.delete = to_raw_response_wrapper(
            docsets.delete,
        )


class AsyncDocsetsWithRawResponse:
    def __init__(self, docsets: AsyncDocsets) -> None:
        self.documents = AsyncDocumentsWithRawResponse(docsets.documents)

        self.create = async_to_raw_response_wrapper(
            docsets.create,
        )
        self.retrieve = async_to_raw_response_wrapper(
            docsets.retrieve,
        )
        self.list = async_to_raw_response_wrapper(
            docsets.list,
        )
        self.delete = async_to_raw_response_wrapper(
            docsets.delete,
        )
