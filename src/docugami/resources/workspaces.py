# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import TYPE_CHECKING

import httpx

from ..types import Workspace
from .._types import NOT_GIVEN, Body, Query, Headers, NotGiven
from .._resource import SyncAPIResource, AsyncAPIResource
from .._response import to_raw_response_wrapper, async_to_raw_response_wrapper
from .._base_client import make_request_options

if TYPE_CHECKING:
    from .._client import Docugami, AsyncDocugami

__all__ = ["Workspaces", "AsyncWorkspaces"]


class Workspaces(SyncAPIResource):
    with_raw_response: WorkspacesWithRawResponse

    def __init__(self, client: Docugami) -> None:
        super().__init__(client)
        self.with_raw_response = WorkspacesWithRawResponse(self)

    def get(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Workspace:
        """Get workspace details"""
        return self._get(
            "/workspace",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Workspace,
        )


class AsyncWorkspaces(AsyncAPIResource):
    with_raw_response: AsyncWorkspacesWithRawResponse

    def __init__(self, client: AsyncDocugami) -> None:
        super().__init__(client)
        self.with_raw_response = AsyncWorkspacesWithRawResponse(self)

    async def get(
        self,
        *,
        # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
        # The extra values given here take precedence over values defined on the client or passed to this method.
        extra_headers: Headers | None = None,
        extra_query: Query | None = None,
        extra_body: Body | None = None,
        timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,
    ) -> Workspace:
        """Get workspace details"""
        return await self._get(
            "/workspace",
            options=make_request_options(
                extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout
            ),
            cast_to=Workspace,
        )


class WorkspacesWithRawResponse:
    def __init__(self, workspaces: Workspaces) -> None:
        self.get = to_raw_response_wrapper(
            workspaces.get,
        )


class AsyncWorkspacesWithRawResponse:
    def __init__(self, workspaces: AsyncWorkspaces) -> None:
        self.get = async_to_raw_response_wrapper(
            workspaces.get,
        )
