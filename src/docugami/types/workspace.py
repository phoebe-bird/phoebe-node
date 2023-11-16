# File generated from our OpenAPI spec by Stainless.

from typing import Optional
from datetime import datetime
from typing_extensions import Literal

from pydantic import Field as FieldInfo

from .._models import BaseModel

__all__ = ["Workspace", "Quota", "QuotaPage", "QuotaUser"]


class QuotaPage(BaseModel):
    max: int

    used: int

    max_per_document: Optional[int] = FieldInfo(alias="maxPerDocument", default=None)


class QuotaUser(BaseModel):
    max: int

    used: int


class Quota(BaseModel):
    page: Optional[QuotaPage] = None

    user: Optional[QuotaUser] = None


class Workspace(BaseModel):
    id: str

    created_at: datetime = FieldInfo(alias="createdAt")

    name: str

    type: Literal["Trial", "Professional", "Team", "Business", "Enterprise"]

    expired: Optional[bool] = None

    expires_at: Optional[str] = FieldInfo(alias="expiresAt", default=None)

    quota: Optional[Quota] = None
