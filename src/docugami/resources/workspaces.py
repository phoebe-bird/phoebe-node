# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import warnings
from typing import TYPE_CHECKING, Optional, Union, List, Dict, Any, Mapping, cast, overload
from typing_extensions import Literal
from .._utils import extract_files, maybe_transform, required_args, deepcopy_minimal, strip_not_given
from .._types import NotGiven, Timeout, Headers, NoneType, Query, Body, NOT_GIVEN, UnknownResponse, FileTypes, BinaryResponseContent
from .._base_client import AsyncPaginator, make_request_options, HttpxBinaryResponseContent
from .._resource import SyncAPIResource, AsyncAPIResource
from .._base_client import SyncAPIClient, AsyncAPIClient, _merge_mappings
from ..types import shared_params

import httpx

from ..types import Workspace, workspace

from .._response import to_raw_response_wrapper, async_to_raw_response_wrapper

from . import _response

if TYPE_CHECKING:
  from .._client import AsyncDocugami, Docugami

__all__ = ["Workspaces", "AsyncWorkspaces"]

class Workspaces(SyncAPIResource):
    with_raw_response: WorkspacesWithRawResponse

    def __init__(self, client: Docugami) -> None:
        super().__init__(client)
        self.with_raw_response = WorkspacesWithRawResponse(self)

    def get(self,
    *,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Workspace:
        """Get workspace details"""
        return self._get(
            "/workspace",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=Workspace,
        )

class AsyncWorkspaces(AsyncAPIResource):
    with_raw_response: AsyncWorkspacesWithRawResponse

    def __init__(self, client: AsyncDocugami) -> None:
        super().__init__(client)
        self.with_raw_response = AsyncWorkspacesWithRawResponse(self)

    async def get(self,
    *,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> Workspace:
        """Get workspace details"""
        return await self._get(
            "/workspace",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
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