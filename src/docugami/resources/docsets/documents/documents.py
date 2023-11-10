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
from ....types.docsets import document_list_docset_params
from .dgmls import Dgmls, AsyncDgmls, DgmlsWithRawResponse, AsyncDgmlsWithRawResponse

import httpx

from ....types import Document, Docset, document, docset

from ....types.docsets import DocumentListDocsetResponse, document_list_docset_response

from typing_extensions import Literal

from ...._response import to_raw_response_wrapper, async_to_raw_response_wrapper

from ... import _response

if TYPE_CHECKING:
  from ...._client import AsyncDocugami, Docugami

__all__ = ["Documents", "AsyncDocuments"]

class Documents(SyncAPIResource):
    dgmls: Dgmls
    with_raw_response: DocumentsWithRawResponse

    def __init__(self, client: Docugami) -> None:
        super().__init__(client)
        self.dgmls = Dgmls(client)
        self.with_raw_response = DocumentsWithRawResponse(self)

    def retrieve(self,
    document_id: str,
    *,
    docset_id: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Document:
        """
        Get a document from a docset

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            f"/docsets/{docset_id}/documents/{document_id}",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=Document,
        )

    def update(self,
    document_id: str,
    *,
    docset_id: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Docset:
        """
        The document is moved if it is already part of a docset.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._put(
            f"/docsets/{docset_id}/documents/{document_id}",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=Docset,
        )

    def delete(self,
    document_id: str,
    *,
    docset_id: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> None:
        """
        Removing a document from a docset does _not_ delete the document.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return self._delete(
            f"/docsets/{docset_id}/documents/{document_id}",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=NoneType,
        )

    def list_docset(self,
    id: str,
    *,
    cursor: str | NotGiven = NOT_GIVEN,
    limit: int | NotGiven = NOT_GIVEN,
    max_pages: int | NotGiven = NOT_GIVEN,
    max_size: int | NotGiven = NOT_GIVEN,
    min_pages: int | NotGiven = NOT_GIVEN,
    min_size: int | NotGiven = NOT_GIVEN,
    prefix: str | NotGiven = NOT_GIVEN,
    status: Literal["New", "Ingesting", "Ingested", "Processing", "Ready", "Error"] | NotGiven = NOT_GIVEN,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> DocumentListDocsetResponse:
        """
        List documents in a docset

        Args:
          cursor: Opaque continuation token used to get additional items when a previous query
              returned more than `limit` items.

          limit: Maximum number of items to return.

          maxPages: Filters documents by maximum number of pages in the document.

          maxSize: Filters documents by maximum file size in bytes.

          minPages: Filters documents by minimum number of pages in the document.

          minSize: Filters documents by minimum file size in bytes.

          prefix: Filters documents by `name` beginning with this prefix.

          status: Filters documents by status.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return self._get(
            f"/docsets/{id}/documents",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout, query=maybe_transform({
                "cursor": cursor,
                "limit": limit,
                "max_pages": max_pages,
                "max_size": max_size,
                "min_pages": min_pages,
                "min_size": min_size,
                "prefix": prefix,
                "status": status,
            }, document_list_docset_params.DocumentListDocsetParams)),
            cast_to=DocumentListDocsetResponse,
        )

class AsyncDocuments(AsyncAPIResource):
    dgmls: AsyncDgmls
    with_raw_response: AsyncDocumentsWithRawResponse

    def __init__(self, client: AsyncDocugami) -> None:
        super().__init__(client)
        self.dgmls = AsyncDgmls(client)
        self.with_raw_response = AsyncDocumentsWithRawResponse(self)

    async def retrieve(self,
    document_id: str,
    *,
    docset_id: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Document:
        """
        Get a document from a docset

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            f"/docsets/{docset_id}/documents/{document_id}",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=Document,
        )

    async def update(self,
    document_id: str,
    *,
    docset_id: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Docset:
        """
        The document is moved if it is already part of a docset.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._put(
            f"/docsets/{docset_id}/documents/{document_id}",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=Docset,
        )

    async def delete(self,
    document_id: str,
    *,
    docset_id: str,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> None:
        """
        Removing a document from a docset does _not_ delete the document.

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "*/*", **(extra_headers or {})}
        return await self._delete(
            f"/docsets/{docset_id}/documents/{document_id}",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=NoneType,
        )

    async def list_docset(self,
    id: str,
    *,
    cursor: str | NotGiven = NOT_GIVEN,
    limit: int | NotGiven = NOT_GIVEN,
    max_pages: int | NotGiven = NOT_GIVEN,
    max_size: int | NotGiven = NOT_GIVEN,
    min_pages: int | NotGiven = NOT_GIVEN,
    min_size: int | NotGiven = NOT_GIVEN,
    prefix: str | NotGiven = NOT_GIVEN,
    status: Literal["New", "Ingesting", "Ingested", "Processing", "Ready", "Error"] | NotGiven = NOT_GIVEN,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> DocumentListDocsetResponse:
        """
        List documents in a docset

        Args:
          cursor: Opaque continuation token used to get additional items when a previous query
              returned more than `limit` items.

          limit: Maximum number of items to return.

          maxPages: Filters documents by maximum number of pages in the document.

          maxSize: Filters documents by maximum file size in bytes.

          minPages: Filters documents by minimum number of pages in the document.

          minSize: Filters documents by minimum file size in bytes.

          prefix: Filters documents by `name` beginning with this prefix.

          status: Filters documents by status.

          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        return await self._get(
            f"/docsets/{id}/documents",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout, query=maybe_transform({
                "cursor": cursor,
                "limit": limit,
                "max_pages": max_pages,
                "max_size": max_size,
                "min_pages": min_pages,
                "min_size": min_size,
                "prefix": prefix,
                "status": status,
            }, document_list_docset_params.DocumentListDocsetParams)),
            cast_to=DocumentListDocsetResponse,
        )

class DocumentsWithRawResponse:
    def __init__(self, documents: Documents) -> None:
        self.dgmls = DgmlsWithRawResponse(documents.dgmls)

        self.retrieve = to_raw_response_wrapper(
            documents.retrieve,
        )
        self.update = to_raw_response_wrapper(
            documents.update,
        )
        self.delete = to_raw_response_wrapper(
            documents.delete,
        )
        self.list_docset = to_raw_response_wrapper(
            documents.list_docset,
        )

class AsyncDocumentsWithRawResponse:
    def __init__(self, documents: AsyncDocuments) -> None:
        self.dgmls = AsyncDgmlsWithRawResponse(documents.dgmls)

        self.retrieve = async_to_raw_response_wrapper(
            documents.retrieve,
        )
        self.update = async_to_raw_response_wrapper(
            documents.update,
        )
        self.delete = async_to_raw_response_wrapper(
            documents.delete,
        )
        self.list_docset = async_to_raw_response_wrapper(
            documents.list_docset,
        )