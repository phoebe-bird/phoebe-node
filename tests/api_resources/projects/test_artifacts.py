# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os

import pytest

from docugami import Docugami, AsyncDocugami
from tests.utils import assert_matches_type
from docugami._client import Docugami, AsyncDocugami
from docugami.types.projects import Artifact, ArtifactListResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"


class TestArtifacts:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    def test_method_retrieve(self, client: Docugami) -> None:
        artifact = client.projects.artifacts.retrieve(
            "string",
            project_id="string",
            version="1",
        )
        assert_matches_type(Artifact, artifact, path=["response"])

    @parametrize
    def test_raw_response_retrieve(self, client: Docugami) -> None:
        response = client.projects.artifacts.with_raw_response.retrieve(
            "string",
            project_id="string",
            version="1",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        artifact = response.parse()
        assert_matches_type(Artifact, artifact, path=["response"])

    @parametrize
    def test_method_list(self, client: Docugami) -> None:
        artifact = client.projects.artifacts.list(
            "1",
            project_id="string",
        )
        assert_matches_type(ArtifactListResponse, artifact, path=["response"])

    @parametrize
    def test_method_list_with_all_params(self, client: Docugami) -> None:
        artifact = client.projects.artifacts.list(
            "1",
            project_id="string",
            cursor="string",
            document={"id": "string"},
            is_read_only=True,
            limit=1,
            max_size=0,
            min_size=0,
            name="string",
        )
        assert_matches_type(ArtifactListResponse, artifact, path=["response"])

    @parametrize
    def test_raw_response_list(self, client: Docugami) -> None:
        response = client.projects.artifacts.with_raw_response.list(
            "1",
            project_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        artifact = response.parse()
        assert_matches_type(ArtifactListResponse, artifact, path=["response"])

    @parametrize
    def test_method_delete(self, client: Docugami) -> None:
        artifact = client.projects.artifacts.delete(
            "string",
            project_id="string",
            version="1",
        )
        assert artifact is None

    @parametrize
    def test_raw_response_delete(self, client: Docugami) -> None:
        response = client.projects.artifacts.with_raw_response.delete(
            "string",
            project_id="string",
            version="1",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        artifact = response.parse()
        assert artifact is None


class TestAsyncArtifacts:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    async def test_method_retrieve(self, client: AsyncDocugami) -> None:
        artifact = await client.projects.artifacts.retrieve(
            "string",
            project_id="string",
            version="1",
        )
        assert_matches_type(Artifact, artifact, path=["response"])

    @parametrize
    async def test_raw_response_retrieve(self, client: AsyncDocugami) -> None:
        response = await client.projects.artifacts.with_raw_response.retrieve(
            "string",
            project_id="string",
            version="1",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        artifact = response.parse()
        assert_matches_type(Artifact, artifact, path=["response"])

    @parametrize
    async def test_method_list(self, client: AsyncDocugami) -> None:
        artifact = await client.projects.artifacts.list(
            "1",
            project_id="string",
        )
        assert_matches_type(ArtifactListResponse, artifact, path=["response"])

    @parametrize
    async def test_method_list_with_all_params(self, client: AsyncDocugami) -> None:
        artifact = await client.projects.artifacts.list(
            "1",
            project_id="string",
            cursor="string",
            document={"id": "string"},
            is_read_only=True,
            limit=1,
            max_size=0,
            min_size=0,
            name="string",
        )
        assert_matches_type(ArtifactListResponse, artifact, path=["response"])

    @parametrize
    async def test_raw_response_list(self, client: AsyncDocugami) -> None:
        response = await client.projects.artifacts.with_raw_response.list(
            "1",
            project_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        artifact = response.parse()
        assert_matches_type(ArtifactListResponse, artifact, path=["response"])

    @parametrize
    async def test_method_delete(self, client: AsyncDocugami) -> None:
        artifact = await client.projects.artifacts.delete(
            "string",
            project_id="string",
            version="1",
        )
        assert artifact is None

    @parametrize
    async def test_raw_response_delete(self, client: AsyncDocugami) -> None:
        response = await client.projects.artifacts.with_raw_response.delete(
            "string",
            project_id="string",
            version="1",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        artifact = response.parse()
        assert artifact is None
