# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing_extensions import Literal, TypedDict

__all__ = ["ProjectListParams", "Docset"]


class ProjectListParams(TypedDict, total=False):
    cursor: str
    """
    Opaque continuation token used to get additional items when a previous query
    returned more than `limit` items.
    """

    docset: Docset

    limit: int
    """Maximum number of items to return."""

    name: str
    """Filters projects by name."""

    type: Literal[
        "TabularReport",
        "Abstract",
        "ExcelExport",
        "AssistedAuthoring",
        "AutomationAnywhereDocumentAssembly",
        "AutomationAnywhereWorkFlow",
        "ZapierWorkFlow",
        "UiPathWorkFlow",
        "UiPathDocumentAssembly",
        "PowerAutomateWorkFlow",
        "SmartsheetExport",
        "DiligenceReport",
        "Chat",
    ]
    """Filters projects by type."""


class Docset(TypedDict, total=False):
    id: str
    """Filters projects by docset."""
