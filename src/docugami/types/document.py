# File generated from our OpenAPI spec by Stainless.

from typing import Optional
from datetime import datetime
from typing_extensions import Literal

from pydantic import Field as FieldInfo

from .._models import BaseModel

__all__ = ["Document", "Docset", "Error"]


class Docset(BaseModel):
    id: str

    url: str

    dgml_url: Optional[str] = FieldInfo(alias="dgmlUrl", default=None)
    """URL to download the processed semantic document."""


class Error(BaseModel):
    detail: Optional[str] = None

    title: Optional[str] = None


class Document(BaseModel):
    id: str

    created_at: datetime = FieldInfo(alias="createdAt")

    download_url: str = FieldInfo(alias="downloadUrl")

    name: str

    size: int

    status: Literal["New", "Ingesting", "Ingested", "Processing", "Ready", "Error"]

    url: str

    docset: Optional[Docset] = None

    error: Optional[Error] = None

    is_sample: Optional[bool] = FieldInfo(alias="isSample", default=None)

    page_count: Optional[int] = FieldInfo(alias="pageCount", default=None)

    processed_at: Optional[datetime] = FieldInfo(alias="processedAt", default=None)
