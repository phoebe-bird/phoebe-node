# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import List, Union, Dict, Optional
from typing_extensions import Literal, TypedDict, Required, Annotated
from ...._types import FileTypes
from ...._utils import PropertyInfo
from ....types import shared_params

from typing_extensions import TypedDict, Annotated, Required

from ...._utils import PropertyInfo

from ...._types import FileTypes

from ... import _utils, _types

__all__ = ["ContentUploadParams"]

class ContentUploadParams(TypedDict, total=False):
    project_id: Required[Annotated[str, PropertyInfo(alias="projectId")]]

    file: Required[FileTypes]

    document_id: Annotated[str, PropertyInfo(alias="document.id")]