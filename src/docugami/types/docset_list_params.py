# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing_extensions import Annotated, TypedDict

from .._utils import PropertyInfo

__all__ = ["DocsetListParams"]


class DocsetListParams(TypedDict, total=False):
    cursor: str
    """
    Opaque continuation token used to get additional items when a previous query
    returned more than `limit` items.
    """

    limit: int
    """Maximum number of items to return."""

    max_documents: Annotated[int, PropertyInfo(alias="maxDocuments")]
    """Filters docsets by maximum number of documents in the set."""

    min_documents: Annotated[int, PropertyInfo(alias="minDocuments")]
    """Filters docsets by minimum number of documents in the set."""

    name: str
    """Filters docsets by name."""

    samples: bool
    """Whether or not to return sample docsets."""
