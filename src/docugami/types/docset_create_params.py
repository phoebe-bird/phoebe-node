# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import List, Union, Dict, Optional
from typing_extensions import Literal, TypedDict, Required, Annotated
from .._types import FileTypes
from .._utils import PropertyInfo
from ..types import shared_params

from typing_extensions import TypedDict, Required

from typing import List

__all__ = ["DocsetCreateParams"]

class DocsetCreateParams(TypedDict, total=False):
    name: Required[str]
    """The name of the docset."""

    documents: List[str]
    """Optional collection of document ids to include in the new docset.

    Documents will be moved if they already belong to a docset.
    """