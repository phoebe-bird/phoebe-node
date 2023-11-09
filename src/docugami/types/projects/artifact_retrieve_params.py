# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing_extensions import Required, Annotated, TypedDict

from ..._utils import PropertyInfo

__all__ = ["ArtifactRetrieveParams", "Document"]


class ArtifactRetrieveParams(TypedDict, total=False):
    project_id: Required[Annotated[str, PropertyInfo(alias="projectId")]]

    cursor: str
    """
    Opaque continuation token used to get additional items when a previous query
    returned more than `limit` items.
    """

    document: Document

    is_read_only: Annotated[bool, PropertyInfo(alias="isReadOnly")]
    """Filters artifacts by read-only status."""

    limit: int
    """Maximum number of items to return."""

    max_size: Annotated[int, PropertyInfo(alias="maxSize")]
    """Filters artifacts by maximum file size in bytes"""

    min_size: Annotated[int, PropertyInfo(alias="minSize")]
    """Filters artifacts by minimum file size in bytes."""

    name: str
    """Filters artifacts by name."""


class Document(TypedDict, total=False):
    id: str
    """Filters artifacts by document id."""
