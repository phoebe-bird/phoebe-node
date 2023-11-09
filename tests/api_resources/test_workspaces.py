# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os

import pytest

from docugami import Docugami, AsyncDocugami
from tests.utils import assert_matches_type
from docugami.types import Workspace
from docugami._client import Docugami, AsyncDocugami

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"


class TestWorkspaces:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    def test_method_get(self, client: Docugami) -> None:
        workspace = client.workspaces.get()
        assert_matches_type(Workspace, workspace, path=["response"])

    @parametrize
    def test_raw_response_get(self, client: Docugami) -> None:
        response = client.workspaces.with_raw_response.get()
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        workspace = response.parse()
        assert_matches_type(Workspace, workspace, path=["response"])


class TestAsyncWorkspaces:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    async def test_method_get(self, client: AsyncDocugami) -> None:
        workspace = await client.workspaces.get()
        assert_matches_type(Workspace, workspace, path=["response"])

    @parametrize
    async def test_raw_response_get(self, client: AsyncDocugami) -> None:
        response = await client.workspaces.with_raw_response.get()
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        workspace = response.parse()
        assert_matches_type(Workspace, workspace, path=["response"])
