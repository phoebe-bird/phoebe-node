# File generated from our OpenAPI spec by Stainless.

from typing import List, Generic, Optional
from typing_extensions import override

import httpx

from ._types import ModelT
from ._base_client import BasePage, PageInfo, BaseSyncPage, BaseAsyncPage

__all__ = [
    "SyncDocumentsPage",
    "AsyncDocumentsPage",
    "SyncDocsetsPage",
    "AsyncDocsetsPage",
    "SyncPagesPage",
    "AsyncPagesPage",
    "SyncProjectsPage",
    "AsyncProjectsPage",
    "SyncWebhooksPage",
    "AsyncWebhooksPage",
    "SyncArtifactsPage",
    "AsyncArtifactsPage",
]


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


class SyncDocsetsPage(BaseSyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    docsets: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        docsets = self.docsets
        if not docsets:
            return []
        return docsets

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class AsyncDocsetsPage(BaseAsyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    docsets: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        docsets = self.docsets
        if not docsets:
            return []
        return docsets

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class SyncPagesPage(BaseSyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    pages: List[ModelT]

    @override
    def _get_page_items(self) -> List[ModelT]:
        pages = self.pages
        if not pages:
            return []
        return pages

    @override
    def next_page_info(self) -> None:
        """
        This page represents a response that isn't actually paginated at the API level
        so there will never be a next page.
        """
        return None


class AsyncPagesPage(BaseAsyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    pages: List[ModelT]

    @override
    def _get_page_items(self) -> List[ModelT]:
        pages = self.pages
        if not pages:
            return []
        return pages

    @override
    def next_page_info(self) -> None:
        """
        This page represents a response that isn't actually paginated at the API level
        so there will never be a next page.
        """
        return None


class SyncProjectsPage(BaseSyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    projects: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        projects = self.projects
        if not projects:
            return []
        return projects

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class AsyncProjectsPage(BaseAsyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    projects: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        projects = self.projects
        if not projects:
            return []
        return projects

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class SyncWebhooksPage(BaseSyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    webhooks: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        webhooks = self.webhooks
        if not webhooks:
            return []
        return webhooks

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class AsyncWebhooksPage(BaseAsyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    webhooks: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        webhooks = self.webhooks
        if not webhooks:
            return []
        return webhooks

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class SyncArtifactsPage(BaseSyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    artifacts: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        artifacts = self.artifacts
        if not artifacts:
            return []
        return artifacts

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))


class AsyncArtifactsPage(BaseAsyncPage[ModelT], BasePage[ModelT], Generic[ModelT]):
    artifacts: List[ModelT]
    next: Optional[str] = None

    @override
    def _get_page_items(self) -> List[ModelT]:
        artifacts = self.artifacts
        if not artifacts:
            return []
        return artifacts

    @override
    def next_page_info(self) -> Optional[PageInfo]:
        url = self.next
        if url is None:
            return None

        return PageInfo(url=httpx.URL(url))
