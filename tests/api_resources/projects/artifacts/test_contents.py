# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os

import httpx
import pytest
from respx import MockRouter

from docugami import Docugami, AsyncDocugami
from tests.utils import assert_matches_type
from docugami._types import BinaryResponseContent
from docugami._client import Docugami, AsyncDocugami
from docugami.types.projects import Artifact

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"


class TestContents:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    def test_method_download(self, client: Docugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/projects/{projectId}/artifacts/{version}/{artifactId}/content").mock(
            return_value=httpx.Response(200, json={"foo": "bar"})
        )
        content = client.projects.artifacts.contents.download(
            "string",
            project_id="string",
            version="1",
        )
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    def test_raw_response_download(self, client: Docugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/projects/{projectId}/artifacts/{version}/{artifactId}/content").mock(
            return_value=httpx.Response(200, json={"foo": "bar"})
        )
        response = client.projects.artifacts.contents.with_raw_response.download(
            "string",
            project_id="string",
            version="1",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    def test_method_upload(self, client: Docugami) -> None:
        content = client.projects.artifacts.contents.upload(
            "1",
            project_id="string",
            file=b"raw file contents",
        )
        assert_matches_type(Artifact, content, path=["response"])

    @parametrize
    def test_method_upload_with_all_params(self, client: Docugami) -> None:
        content = client.projects.artifacts.contents.upload(
            "1",
            project_id="string",
            file=b"raw file contents",
            document_id="string",
        )
        assert_matches_type(Artifact, content, path=["response"])

    @parametrize
    def test_raw_response_upload(self, client: Docugami) -> None:
        response = client.projects.artifacts.contents.with_raw_response.upload(
            "1",
            project_id="string",
            file=b"raw file contents",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert_matches_type(Artifact, content, path=["response"])


class TestAsyncContents:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    async def test_method_download(self, client: AsyncDocugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/projects/{projectId}/artifacts/{version}/{artifactId}/content").mock(
            return_value=httpx.Response(200, json={"foo": "bar"})
        )
        content = await client.projects.artifacts.contents.download(
            "string",
            project_id="string",
            version="1",
        )
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    async def test_raw_response_download(self, client: AsyncDocugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/projects/{projectId}/artifacts/{version}/{artifactId}/content").mock(
            return_value=httpx.Response(200, json={"foo": "bar"})
        )
        response = await client.projects.artifacts.contents.with_raw_response.download(
            "string",
            project_id="string",
            version="1",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    async def test_method_upload(self, client: AsyncDocugami) -> None:
        content = await client.projects.artifacts.contents.upload(
            "1",
            project_id="string",
            file=b"raw file contents",
        )
        assert_matches_type(Artifact, content, path=["response"])

    @parametrize
    async def test_method_upload_with_all_params(self, client: AsyncDocugami) -> None:
        content = await client.projects.artifacts.contents.upload(
            "1",
            project_id="string",
            file=b"raw file contents",
            document_id="string",
        )
        assert_matches_type(Artifact, content, path=["response"])

    @parametrize
    async def test_raw_response_upload(self, client: AsyncDocugami) -> None:
        response = await client.projects.artifacts.contents.with_raw_response.upload(
            "1",
            project_id="string",
            file=b"raw file contents",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert_matches_type(Artifact, content, path=["response"])
