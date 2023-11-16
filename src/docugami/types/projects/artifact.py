# File generated from our OpenAPI spec by Stainless.

from typing import Optional
from datetime import datetime

from pydantic import Field as FieldInfo

from ..._models import BaseModel

__all__ = ["Artifact", "Document"]


class Document(BaseModel):
    id: Optional[str] = None

    url: Optional[str] = None


class Artifact(BaseModel):
    id: str

    created_at: datetime = FieldInfo(alias="createdAt")

    download_url: str = FieldInfo(alias="downloadUrl")

    is_read_only: bool = FieldInfo(alias="isReadOnly")

    name: str

    size: int

    url: str

    version: str

    document: Optional[Document] = None

    updated_at: Optional[datetime] = FieldInfo(alias="updatedAt", default=None)
