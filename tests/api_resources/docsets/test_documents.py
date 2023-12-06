# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os

import pytest

from docugami import Docugami, AsyncDocugami
from tests.utils import assert_matches_type
from docugami.types import Docset, Document
from docugami._client import Docugami, AsyncDocugami
from docugami.pagination import SyncDocumentsPage, AsyncDocumentsPage

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"


class TestDocuments:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    def test_method_retrieve(self, client: Docugami) -> None:
        document = client.docsets.documents.retrieve(
            "string",
            docset_id="string",
        )
        assert_matches_type(Document, document, path=["response"])

    @parametrize
    def test_raw_response_retrieve(self, client: Docugami) -> None:
        response = client.docsets.documents.with_raw_response.retrieve(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(Document, document, path=["response"])

    @parametrize
    def test_method_list(self, client: Docugami) -> None:
        document = client.docsets.documents.list(
            "string",
        )
        assert_matches_type(SyncDocumentsPage[Document], document, path=["response"])

    @parametrize
    def test_method_list_with_all_params(self, client: Docugami) -> None:
        document = client.docsets.documents.list(
            "string",
            cursor="string",
            limit=1,
            max_pages=0,
            max_size=0,
            min_pages=0,
            min_size=0,
            prefix="string",
            status="Ready",
        )
        assert_matches_type(SyncDocumentsPage[Document], document, path=["response"])

    @parametrize
    def test_raw_response_list(self, client: Docugami) -> None:
        response = client.docsets.documents.with_raw_response.list(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(SyncDocumentsPage[Document], document, path=["response"])

    @parametrize
    def test_method_delete(self, client: Docugami) -> None:
        document = client.docsets.documents.delete(
            "string",
            docset_id="string",
        )
        assert document is None

    @parametrize
    def test_raw_response_delete(self, client: Docugami) -> None:
        response = client.docsets.documents.with_raw_response.delete(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert document is None

    @parametrize
    def test_method_add(self, client: Docugami) -> None:
        document = client.docsets.documents.add(
            "string",
            docset_id="string",
        )
        assert_matches_type(Docset, document, path=["response"])

    @parametrize
    def test_raw_response_add(self, client: Docugami) -> None:
        response = client.docsets.documents.with_raw_response.add(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(Docset, document, path=["response"])

    @parametrize
    def test_method_dgml(self, client: Docugami) -> None:
        document = client.docsets.documents.dgml(
            "string",
            docset_id="string",
        )
        assert_matches_type(str, document, path=["response"])

    @parametrize
    def test_raw_response_dgml(self, client: Docugami) -> None:
        response = client.docsets.documents.with_raw_response.dgml(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(str, document, path=["response"])


class TestAsyncDocuments:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    async def test_method_retrieve(self, client: AsyncDocugami) -> None:
        document = await client.docsets.documents.retrieve(
            "string",
            docset_id="string",
        )
        assert_matches_type(Document, document, path=["response"])

    @parametrize
    async def test_raw_response_retrieve(self, client: AsyncDocugami) -> None:
        response = await client.docsets.documents.with_raw_response.retrieve(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(Document, document, path=["response"])

    @parametrize
    async def test_method_list(self, client: AsyncDocugami) -> None:
        document = await client.docsets.documents.list(
            "string",
        )
        assert_matches_type(AsyncDocumentsPage[Document], document, path=["response"])

    @parametrize
    async def test_method_list_with_all_params(self, client: AsyncDocugami) -> None:
        document = await client.docsets.documents.list(
            "string",
            cursor="string",
            limit=1,
            max_pages=0,
            max_size=0,
            min_pages=0,
            min_size=0,
            prefix="string",
            status="Ready",
        )
        assert_matches_type(AsyncDocumentsPage[Document], document, path=["response"])

    @parametrize
    async def test_raw_response_list(self, client: AsyncDocugami) -> None:
        response = await client.docsets.documents.with_raw_response.list(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(AsyncDocumentsPage[Document], document, path=["response"])

    @parametrize
    async def test_method_delete(self, client: AsyncDocugami) -> None:
        document = await client.docsets.documents.delete(
            "string",
            docset_id="string",
        )
        assert document is None

    @parametrize
    async def test_raw_response_delete(self, client: AsyncDocugami) -> None:
        response = await client.docsets.documents.with_raw_response.delete(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert document is None

    @parametrize
    async def test_method_add(self, client: AsyncDocugami) -> None:
        document = await client.docsets.documents.add(
            "string",
            docset_id="string",
        )
        assert_matches_type(Docset, document, path=["response"])

    @parametrize
    async def test_raw_response_add(self, client: AsyncDocugami) -> None:
        response = await client.docsets.documents.with_raw_response.add(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(Docset, document, path=["response"])

    @parametrize
    async def test_method_dgml(self, client: AsyncDocugami) -> None:
        document = await client.docsets.documents.dgml(
            "string",
            docset_id="string",
        )
        assert_matches_type(str, document, path=["response"])

    @parametrize
    async def test_raw_response_dgml(self, client: AsyncDocugami) -> None:
        response = await client.docsets.documents.with_raw_response.dgml(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        document = response.parse()
        assert_matches_type(str, document, path=["response"])
