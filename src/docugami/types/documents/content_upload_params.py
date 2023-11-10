# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import List, Union, Dict, Optional
from typing_extensions import Literal, TypedDict, Required, Annotated
from ..._types import FileTypes
from ..._utils import PropertyInfo
from ...types import shared_params

from typing_extensions import TypedDict, Required, Annotated

from ..._types import FileTypes

from ..._utils import PropertyInfo

from .. import _types, _utils

__all__ = ["ContentUploadParams"]

class ContentUploadParams(TypedDict, total=False):
    file: Required[FileTypes]

    docset_id: Annotated[str, PropertyInfo(alias="docset.id")]