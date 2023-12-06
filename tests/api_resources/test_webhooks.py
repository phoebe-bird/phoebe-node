# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os

import pytest

from docugami import Docugami, AsyncDocugami
from tests.utils import assert_matches_type
from docugami.types import Webhook
from docugami._client import Docugami, AsyncDocugami
from docugami.pagination import SyncWebhooksPage, AsyncWebhooksPage

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")
api_key = "My API Key"


class TestWebhooks:
    strict_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = Docugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    def test_method_create(self, client: Docugami) -> None:
        webhook = client.webhooks.create(
            target="Project",
            url="https://example.com/docugami-callback",
        )
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    def test_method_create_with_all_params(self, client: Docugami) -> None:
        webhook = client.webhooks.create(
            target="Project",
            url="https://example.com/docugami-callback",
            events=["Documents.Create", "Documents.Delete", "Docset.Document.Add"],
            secret="string",
            target_id="0gjiwhvpeqcg",
        )
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    def test_raw_response_create(self, client: Docugami) -> None:
        response = client.webhooks.with_raw_response.create(
            target="Project",
            url="https://example.com/docugami-callback",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    def test_method_retrieve(self, client: Docugami) -> None:
        webhook = client.webhooks.retrieve(
            "string",
        )
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    def test_raw_response_retrieve(self, client: Docugami) -> None:
        response = client.webhooks.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    def test_method_list(self, client: Docugami) -> None:
        webhook = client.webhooks.list()
        assert_matches_type(SyncWebhooksPage[Webhook], webhook, path=["response"])

    @parametrize
    def test_method_list_with_all_params(self, client: Docugami) -> None:
        webhook = client.webhooks.list(
            cursor="string",
            limit=1,
            target="Project",
            target_id="0gjiwhvpeqcg",
        )
        assert_matches_type(SyncWebhooksPage[Webhook], webhook, path=["response"])

    @parametrize
    def test_raw_response_list(self, client: Docugami) -> None:
        response = client.webhooks.with_raw_response.list()
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert_matches_type(SyncWebhooksPage[Webhook], webhook, path=["response"])

    @parametrize
    def test_method_delete(self, client: Docugami) -> None:
        webhook = client.webhooks.delete(
            "string",
        )
        assert webhook is None

    @parametrize
    def test_raw_response_delete(self, client: Docugami) -> None:
        response = client.webhooks.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert webhook is None


class TestAsyncWebhooks:
    strict_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=True)
    loose_client = AsyncDocugami(base_url=base_url, api_key=api_key, _strict_response_validation=False)
    parametrize = pytest.mark.parametrize("client", [strict_client, loose_client], ids=["strict", "loose"])

    @parametrize
    async def test_method_create(self, client: AsyncDocugami) -> None:
        webhook = await client.webhooks.create(
            target="Project",
            url="https://example.com/docugami-callback",
        )
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    async def test_method_create_with_all_params(self, client: AsyncDocugami) -> None:
        webhook = await client.webhooks.create(
            target="Project",
            url="https://example.com/docugami-callback",
            events=["Documents.Create", "Documents.Delete", "Docset.Document.Add"],
            secret="string",
            target_id="0gjiwhvpeqcg",
        )
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    async def test_raw_response_create(self, client: AsyncDocugami) -> None:
        response = await client.webhooks.with_raw_response.create(
            target="Project",
            url="https://example.com/docugami-callback",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    async def test_method_retrieve(self, client: AsyncDocugami) -> None:
        webhook = await client.webhooks.retrieve(
            "string",
        )
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    async def test_raw_response_retrieve(self, client: AsyncDocugami) -> None:
        response = await client.webhooks.with_raw_response.retrieve(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert_matches_type(Webhook, webhook, path=["response"])

    @parametrize
    async def test_method_list(self, client: AsyncDocugami) -> None:
        webhook = await client.webhooks.list()
        assert_matches_type(AsyncWebhooksPage[Webhook], webhook, path=["response"])

    @parametrize
    async def test_method_list_with_all_params(self, client: AsyncDocugami) -> None:
        webhook = await client.webhooks.list(
            cursor="string",
            limit=1,
            target="Project",
            target_id="0gjiwhvpeqcg",
        )
        assert_matches_type(AsyncWebhooksPage[Webhook], webhook, path=["response"])

    @parametrize
    async def test_raw_response_list(self, client: AsyncDocugami) -> None:
        response = await client.webhooks.with_raw_response.list()
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert_matches_type(AsyncWebhooksPage[Webhook], webhook, path=["response"])

    @parametrize
    async def test_method_delete(self, client: AsyncDocugami) -> None:
        webhook = await client.webhooks.delete(
            "string",
        )
        assert webhook is None

    @parametrize
    async def test_raw_response_delete(self, client: AsyncDocugami) -> None:
        response = await client.webhooks.with_raw_response.delete(
            "string",
        )
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        webhook = response.parse()
        assert webhook is None
