# File generated from our OpenAPI spec by Stainless.

from typing import List, Generic, Optional
from typing_extensions import override

import httpx

from ._types import ModelT
from ._base_client import BasePage, PageInfo, BaseSyncPage, BaseAsyncPage

__all__ = ["SyncDocumentsPage", "AsyncDocumentsPage"]


class SyncDocumentsPage(BaseSyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    documents: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        documents = self.documents
        if not documents:
            return []
        return documents

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class AsyncDocumentsPage(BaseAsyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    documents: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        documents = self.documents
        if not documents:
            return []
        return documents

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))
