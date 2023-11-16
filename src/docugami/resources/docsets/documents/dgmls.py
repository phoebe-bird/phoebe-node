# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import TYPE_CHECKING

import httpx

from ...._types import NOT_GIVEN, Body, Query, Headers, NotGiven
from ...._resource import SyncAPIResource, AsyncAPIResource
from ...._response import to_raw_response_wrapper, async_to_raw_response_wrapper
from ...._base_client import make_request_options

if TYPE_CHECKING:
    from ...._client import Docugami, AsyncDocugami

__all__ = ["Dgmls", "AsyncDgmls"]


class Dgmls(SyncAPIResource):
    with_raw_response: DgmlsWithRawResponse

    def __init__(self, client: Docugami) -> None:
        super().__init__(client)
        self.with_raw_response = DgmlsWithRawResponse(self)

    def list(
        self,
        document_id: str,
        *,
        docset_id: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> str:
        """
        Download processed document output

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "application/xml", **(extra_headers or {})}
        return self._get(
            f"/docsets/{docset_id}/documents/{document_id}/dgml",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=str,
        )


class AsyncDgmls(AsyncAPIResource):
    with_raw_response: AsyncDgmlsWithRawResponse

    def __init__(self, client: AsyncDocugami) -> None:
        super().__init__(client)
        self.with_raw_response = AsyncDgmlsWithRawResponse(self)

    async def list(
        self,
        document_id: str,
        *,
        docset_id: str,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> str:
        """
        Download processed document output

        Args:
          extra_headers: Send extra headers

          extra_query: Add additional query parameters to the request

          extra_body: Add additional JSON properties to the request

          timeout: Override the client-level default timeout for this request, in seconds
        """
        extra_headers = {"Accept": "application/xml", **(extra_headers or {})}
        return await self._get(
            f"/docsets/{docset_id}/documents/{document_id}/dgml",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=str,
        )


class DgmlsWithRawResponse:
    def __init__(self, dgmls: Dgmls) -> None:
        self.list = to_raw_response_wrapper(
            dgmls.list,
        )


class AsyncDgmlsWithRawResponse:
    def __init__(self, dgmls: AsyncDgmls) -> None:
        self.list = async_to_raw_response_wrapper(
            dgmls.list,
        )
