# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing_extensions import Literal, Annotated, TypedDict

from .._utils import PropertyInfo

__all__ = ["WebhookListParams"]


class WebhookListParams(TypedDict, total=False):
    cursor: str
    """
    Opaque continuation token used to get additional items when a previous query
    returned more than `limit` items.
    """

    limit: int
    """Maximum number of items to return."""

    target: Literal["Documents", "Project", "Docset"]
    """Filters webhooks by target type.

    'read:documents' scope is required for document and docset targets and
    'read:projects' for project targets.
    """

    target_id: Annotated[str, PropertyInfo(alias="targetId")]
    """Filters webhooks by target id."""
