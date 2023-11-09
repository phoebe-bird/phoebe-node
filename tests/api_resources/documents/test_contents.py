# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os

import httpx
import pytest
from respx import MockRouter

from docugami import Docugami, AsyncDocugami
from tests.utils import assert_matches_type
from docugami.types import Document
from docugami._types import BinaryResponseContent
from docugami._client import Docugami, AsyncDocugami

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"


class TestContents:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    def test_method_list(self, client: Docugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/documents/{id}/content").mock(return_value=httpx.Response(200, json={"foo": "bar"}))
        content = client.documents.contents.list(
            "string",
        )
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    def test_raw_response_list(self, client: Docugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/documents/{id}/content").mock(return_value=httpx.Response(200, json={"foo": "bar"}))
        response = client.documents.contents.with_raw_response.list(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    def test_method_upload(self, client: Docugami) -> None:
        content = client.documents.contents.upload(
            file=b"raw file contents",
        )
        assert_matches_type(Document, content, path=["response"])

    @parametrize
    def test_method_upload_with_all_params(self, client: Docugami) -> None:
        content = client.documents.contents.upload(
            file=b"raw file contents",
            docset_id="string",
        )
        assert_matches_type(Document, content, path=["response"])

    @parametrize
    def test_raw_response_upload(self, client: Docugami) -> None:
        response = client.documents.contents.with_raw_response.upload(
            file=b"raw file contents",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert_matches_type(Document, content, path=["response"])


class TestAsyncContents:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    async def test_method_list(self, client: AsyncDocugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/documents/{id}/content").mock(return_value=httpx.Response(200, json={"foo": "bar"}))
        content = await client.documents.contents.list(
            "string",
        )
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    @pytest.mark.respx(base_url=base_url)
    async def test_raw_response_list(self, client: AsyncDocugami, respx_mock: MockRouter) -> None:
        respx_mock.get("/documents/{id}/content").mock(return_value=httpx.Response(200, json={"foo": "bar"}))
        response = await client.documents.contents.with_raw_response.list(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert isinstance(content, BinaryResponseContent)
        assert content.json() == {"foo": "bar"}

    @parametrize
    async def test_method_upload(self, client: AsyncDocugami) -> None:
        content = await client.documents.contents.upload(
            file=b"raw file contents",
        )
        assert_matches_type(Document, content, path=["response"])

    @parametrize
    async def test_method_upload_with_all_params(self, client: AsyncDocugami) -> None:
        content = await client.documents.contents.upload(
            file=b"raw file contents",
            docset_id="string",
        )
        assert_matches_type(Document, content, path=["response"])

    @parametrize
    async def test_raw_response_upload(self, client: AsyncDocugami) -> None:
        response = await client.documents.contents.with_raw_response.upload(
            file=b"raw file contents",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        content = response.parse()
        assert_matches_type(Document, content, path=["response"])
