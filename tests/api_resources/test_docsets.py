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
from docugami.types import docset_create_params
from docugami.types import docset_list_params

from docugami._client import Docugami, AsyncDocugami

from docugami.types import Docset, DocsetListResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"

class TestDocsets:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    def test_method_create(self, client: Docugami) -> None:
        docset = client.docsets.create(
            name="Loss Runs",
        )
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    def test_method_create_with_all_params(self, client: Docugami) -> None:
        docset = client.docsets.create(
            name="Loss Runs",
            documents=["bn0px5iaym7z", "bn0px5iaym7z", "bn0px5iaym7z"],
        )
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    def test_raw_response_create(self, client: Docugami) -> None:
        response = client.docsets.with_raw_response.create(
            name="Loss Runs",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    def test_method_retrieve(self, client: Docugami) -> None:
        docset = client.docsets.retrieve(
            "string",
        )
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    def test_raw_response_retrieve(self, client: Docugami) -> None:
        response = client.docsets.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    def test_method_list(self, client: Docugami) -> None:
        docset = client.docsets.list()
        assert_matches_type(DocsetListResponse, docset, path=['response'])

    @parametrize
    def test_method_list_with_all_params(self, client: Docugami) -> None:
        docset = client.docsets.list(
            cursor="string",
            limit=1,
            max_documents=0,
            min_documents=0,
            name="string",
            samples=True,
        )
        assert_matches_type(DocsetListResponse, docset, path=['response'])

    @parametrize
    def test_raw_response_list(self, client: Docugami) -> None:
        response = client.docsets.with_raw_response.list()
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert_matches_type(DocsetListResponse, docset, path=['response'])

    @parametrize
    def test_method_delete(self, client: Docugami) -> None:
        docset = client.docsets.delete(
            "string",
        )
        assert docset is None

    @parametrize
    def test_raw_response_delete(self, client: Docugami) -> None:
        response = client.docsets.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert docset is None
class TestAsyncDocsets:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    async def test_method_create(self, client: AsyncDocugami) -> None:
        docset = await client.docsets.create(
            name="Loss Runs",
        )
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    async def test_method_create_with_all_params(self, client: AsyncDocugami) -> None:
        docset = await client.docsets.create(
            name="Loss Runs",
            documents=["bn0px5iaym7z", "bn0px5iaym7z", "bn0px5iaym7z"],
        )
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    async def test_raw_response_create(self, client: AsyncDocugami) -> None:
        response = await client.docsets.with_raw_response.create(
            name="Loss Runs",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    async def test_method_retrieve(self, client: AsyncDocugami) -> None:
        docset = await client.docsets.retrieve(
            "string",
        )
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    async def test_raw_response_retrieve(self, client: AsyncDocugami) -> None:
        response = await client.docsets.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert_matches_type(Docset, docset, path=['response'])

    @parametrize
    async def test_method_list(self, client: AsyncDocugami) -> None:
        docset = await client.docsets.list()
        assert_matches_type(DocsetListResponse, docset, path=['response'])

    @parametrize
    async def test_method_list_with_all_params(self, client: AsyncDocugami) -> None:
        docset = await client.docsets.list(
            cursor="string",
            limit=1,
            max_documents=0,
            min_documents=0,
            name="string",
            samples=True,
        )
        assert_matches_type(DocsetListResponse, docset, path=['response'])

    @parametrize
    async def test_raw_response_list(self, client: AsyncDocugami) -> None:
        response = await client.docsets.with_raw_response.list()
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert_matches_type(DocsetListResponse, docset, path=['response'])

    @parametrize
    async def test_method_delete(self, client: AsyncDocugami) -> None:
        docset = await client.docsets.delete(
            "string",
        )
        assert docset is None

    @parametrize
    async def test_raw_response_delete(self, client: AsyncDocugami) -> None:
        response = await client.docsets.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        docset = response.parse()
        assert docset is None