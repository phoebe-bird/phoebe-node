# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing_extensions import Literal, Annotated, TypedDict

from ..._utils import PropertyInfo

__all__ = ["DocumentListDocsetParams"]


class DocumentListDocsetParams(TypedDict, total=False):
    cursor: str
    """
    Opaque continuation token used to get additional items when a previous query
    returned more than `limit` items.
    """

    limit: int
    """Maximum number of items to return."""

    max_pages: Annotated[int, PropertyInfo(alias="maxPages")]
    """Filters documents by maximum number of pages in the document."""

    max_size: Annotated[int, PropertyInfo(alias="maxSize")]
    """Filters documents by maximum file size in bytes."""

    min_pages: Annotated[int, PropertyInfo(alias="minPages")]
    """Filters documents by minimum number of pages in the document."""

    min_size: Annotated[int, PropertyInfo(alias="minSize")]
    """Filters documents by minimum file size in bytes."""

    prefix: str
    """Filters documents by `name` beginning with this prefix."""

    status: Literal["New", "Ingesting", "Ingested", "Processing", "Ready", "Error"]
    """Filters documents by status."""
