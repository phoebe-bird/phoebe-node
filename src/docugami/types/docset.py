# File generated from our OpenAPI spec by Stainless.

from typing import Optional
from datetime import datetime

from pydantic import Field as FieldInfo

from .._models import BaseModel

__all__ = ["Docset"]


class Docset(BaseModel):
    id: Optional[str] = None

    created_at: Optional[datetime] = FieldInfo(alias="createdAt", default=None)

    document_count: Optional[int] = FieldInfo(alias="documentCount", default=None)

    is_sample: Optional[bool] = FieldInfo(alias="isSample", default=None)

    name: Optional[str] = None

    updated_at: Optional[datetime] = FieldInfo(alias="updatedAt", default=None)

    url: Optional[str] = None
