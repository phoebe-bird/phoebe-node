# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os
import pytest
import httpx
from typing_extensions import get_args
from typing import Optional
from respx import MockRouter
from docugami import Docugami, AsyncDocugami
from docugami._types import BinaryResponseContent
from tests.utils import assert_matches_type
from docugami.types import project_list_params

from docugami._client import Docugami, AsyncDocugami

from docugami.types import Project, ProjectListResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"

class TestProjects:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    def test_method_retrieve(self, client: Docugami) -> None:
        project = client.projects.retrieve(
            "string",
        )
        assert_matches_type(Project, project, path=['response'])

    @parametrize
    def test_raw_response_retrieve(self, client: Docugami) -> None:
        response = client.projects.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        project = response.parse()
        assert_matches_type(Project, project, path=['response'])

    @parametrize
    def test_method_list(self, client: Docugami) -> None:
        project = client.projects.list()
        assert_matches_type(ProjectListResponse, project, path=['response'])

    @parametrize
    def test_method_list_with_all_params(self, client: Docugami) -> None:
        project = client.projects.list(
            cursor="string",
            docset={
                "id": "string"
            },
            limit=1,
            name="string",
            type="TabularReport",
        )
        assert_matches_type(ProjectListResponse, project, path=['response'])

    @parametrize
    def test_raw_response_list(self, client: Docugami) -> None:
        response = client.projects.with_raw_response.list()
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        project = response.parse()
        assert_matches_type(ProjectListResponse, project, path=['response'])

    @parametrize
    def test_method_delete(self, client: Docugami) -> None:
        project = client.projects.delete(
            "string",
        )
        assert project is None

    @parametrize
    def test_raw_response_delete(self, client: Docugami) -> None:
        response = client.projects.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        project = response.parse()
        assert project is None
class TestAsyncProjects:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    async def test_method_retrieve(self, client: AsyncDocugami) -> None:
        project = await client.projects.retrieve(
            "string",
        )
        assert_matches_type(Project, project, path=['response'])

    @parametrize
    async def test_raw_response_retrieve(self, client: AsyncDocugami) -> None:
        response = await client.projects.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        project = response.parse()
        assert_matches_type(Project, project, path=['response'])

    @parametrize
    async def test_method_list(self, client: AsyncDocugami) -> None:
        project = await client.projects.list()
        assert_matches_type(ProjectListResponse, project, path=['response'])

    @parametrize
    async def test_method_list_with_all_params(self, client: AsyncDocugami) -> None:
        project = await client.projects.list(
            cursor="string",
            docset={
                "id": "string"
            },
            limit=1,
            name="string",
            type="TabularReport",
        )
        assert_matches_type(ProjectListResponse, project, path=['response'])

    @parametrize
    async def test_raw_response_list(self, client: AsyncDocugami) -> None:
        response = await client.projects.with_raw_response.list()
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        project = response.parse()
        assert_matches_type(ProjectListResponse, project, path=['response'])

    @parametrize
    async def test_method_delete(self, client: AsyncDocugami) -> None:
        project = await client.projects.delete(
            "string",
        )
        assert project is None

    @parametrize
    async def test_raw_response_delete(self, client: AsyncDocugami) -> None:
        response = await client.projects.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        project = response.parse()
        assert project is None