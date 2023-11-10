# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import TYPE_CHECKING
import time
import asyncio

if TYPE_CHECKING:
  from ._client import AsyncDocugami, Docugami

class SyncAPIResource:
    _client: Docugami

    def __init__(self, client: Docugami) -> None:
        self._client = client
        self._get = client.get
        self._post = client.post
        self._patch = client.patch
        self._put = client.put
        self._delete = client.delete
        self._get_api_list = client.get_api_list

    def _sleep(self, seconds: float) -> None:
      time.sleep(seconds)

class AsyncAPIResource:
    _client: AsyncDocugami

    def __init__(self, client: AsyncDocugami) -> None:
        self._client = client
        self._get = client.get
        self._post = client.post
        self._patch = client.patch
        self._put = client.put
        self._delete = client.delete
        self._get_api_list = client.get_api_list

    async def _sleep(self, seconds: float) -> None:
      await asyncio.sleep(seconds)