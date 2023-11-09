# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing_extensions import Required, Annotated, TypedDict

from ..._types import FileTypes
from ..._utils import PropertyInfo

__all__ = ["ContentUploadParams"]


class ContentUploadParams(TypedDict, total=False):
    file: Required[FileTypes]

    docset_id: Annotated[str, PropertyInfo(alias="docset.id")]
