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
from docugami.types import document_list_params

from docugami._client import Docugami, AsyncDocugami

from docugami.types import Document, DocumentListResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"

class TestDocuments:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    def test_method_retrieve(self, client: Docugami) -> None:
        document = client.documents.retrieve(
            "string",
        )
        assert_matches_type(Document, document, path=['response'])

    @parametrize
    def test_raw_response_retrieve(self, client: Docugami) -> None:
        response = client.documents.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        document = response.parse()
        assert_matches_type(Document, document, path=['response'])

    @parametrize
    def test_method_list(self, client: Docugami) -> None:
        document = client.documents.list()
        assert_matches_type(DocumentListResponse, document, path=['response'])

    @parametrize
    def test_method_list_with_all_params(self, client: Docugami) -> None:
        document = client.documents.list(
            cursor="string",
            docset={
                "id": "string"
            },
            limit=1,
            max_pages=0,
            max_size=0,
            min_pages=0,
            min_size=0,
            name="string",
            prefix="string",
            samples=True,
            status="Ready",
        )
        assert_matches_type(DocumentListResponse, document, path=['response'])

    @parametrize
    def test_raw_response_list(self, client: Docugami) -> None:
        response = client.documents.with_raw_response.list()
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        document = response.parse()
        assert_matches_type(DocumentListResponse, document, path=['response'])

    @parametrize
    def test_method_delete(self, client: Docugami) -> None:
        document = client.documents.delete(
            "string",
        )
        assert document is None

    @parametrize
    def test_raw_response_delete(self, client: Docugami) -> None:
        response = client.documents.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        document = response.parse()
        assert document is None
class TestAsyncDocuments:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    async def test_method_retrieve(self, client: AsyncDocugami) -> None:
        document = await client.documents.retrieve(
            "string",
        )
        assert_matches_type(Document, document, path=['response'])

    @parametrize
    async def test_raw_response_retrieve(self, client: AsyncDocugami) -> None:
        response = await client.documents.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        document = response.parse()
        assert_matches_type(Document, document, path=['response'])

    @parametrize
    async def test_method_list(self, client: AsyncDocugami) -> None:
        document = await client.documents.list()
        assert_matches_type(DocumentListResponse, document, path=['response'])

    @parametrize
    async def test_method_list_with_all_params(self, client: AsyncDocugami) -> None:
        document = await client.documents.list(
            cursor="string",
            docset={
                "id": "string"
            },
            limit=1,
            max_pages=0,
            max_size=0,
            min_pages=0,
            min_size=0,
            name="string",
            prefix="string",
            samples=True,
            status="Ready",
        )
        assert_matches_type(DocumentListResponse, document, path=['response'])

    @parametrize
    async def test_raw_response_list(self, client: AsyncDocugami) -> None:
        response = await client.documents.with_raw_response.list()
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        document = response.parse()
        assert_matches_type(DocumentListResponse, document, path=['response'])

    @parametrize
    async def test_method_delete(self, client: AsyncDocugami) -> None:
        document = await client.documents.delete(
            "string",
        )
        assert document is None

    @parametrize
    async def test_raw_response_delete(self, client: AsyncDocugami) -> None:
        response = await client.documents.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        document = response.parse()
        assert document is None