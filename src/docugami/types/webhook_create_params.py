# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import List, Union, Dict, Optional
from typing_extensions import Literal, TypedDict, Required, Annotated
from .._types import FileTypes
from .._utils import PropertyInfo
from ..types import shared_params

from typing_extensions import TypedDict, Literal, Required, Annotated

from typing import List

from .._utils import PropertyInfo

from . import _utils

__all__ = ["WebhookCreateParams"]

class WebhookCreateParams(TypedDict, total=False):
    target: Required[Literal["Documents", "Project", "Docset"]]

    url: Required[str]

    events: List[Literal["Documents.Create", "Documents.Delete", "Docset.Document.Add", "Docset.Document.Remove", "Docset.Document.Dgml", "Project.Artifacts.Create", "Project.Artifacts.Delete", "Project.Artifacts.Modify", "Project.Artifacts.Version"]]

    secret: str

    target_id: Annotated[str, PropertyInfo(alias="targetId")]