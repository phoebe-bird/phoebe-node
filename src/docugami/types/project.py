# File generated from our OpenAPI spec by Stainless.

from typing import Optional
from datetime import datetime
from typing_extensions import Literal

from pydantic import Field as FieldInfo

from .._models import BaseModel

__all__ = ["Project", "Docset", "Artifacts"]


class Docset(BaseModel):
    id: Optional[str] = None

    url: Optional[str] = None


class Artifacts(BaseModel):
    url: Optional[str] = None

    version: Optional[str] = None


class Project(BaseModel):
    id: str

    created_at: datetime = FieldInfo(alias="createdAt")

    docset: Docset

    name: str

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

    url: str

    artifacts: Optional[Artifacts] = None

    updated_at: Optional[datetime] = FieldInfo(alias="updatedAt", default=None)
