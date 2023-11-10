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

from docugami._client import Docugami, AsyncDocugami

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"

class TestDgmls:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    def test_method_list(self, client: Docugami) -> None:
        dgml = client.docsets.documents.dgmls.list(
            "string",
            docset_id="string",
        )
        assert_matches_type(str, dgml, path=['response'])

    @parametrize
    def test_raw_response_list(self, client: Docugami) -> None:
        response = client.docsets.documents.dgmls.with_raw_response.list(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        dgml = response.parse()
        assert_matches_type(str, dgml, path=['response'])
class TestAsyncDgmls:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])


    @parametrize
    async def test_method_list(self, client: AsyncDocugami) -> None:
        dgml = await client.docsets.documents.dgmls.list(
            "string",
            docset_id="string",
        )
        assert_matches_type(str, dgml, path=['response'])

    @parametrize
    async def test_raw_response_list(self, client: AsyncDocugami) -> None:
        response = await client.docsets.documents.dgmls.with_raw_response.list(
            "string",
            docset_id="string",
        )
        assert response.http_request.headers.get('X-Stainless-Lang') == 'python'
        dgml = response.parse()
        assert_matches_type(str, dgml, path=['response'])