# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import List, Union, Dict, Optional
from typing_extensions import Literal, TypedDict, Required, Annotated
from .._types import FileTypes
from .._utils import PropertyInfo
from ..types import shared_params

from typing_extensions import TypedDict, Annotated

from .._utils import PropertyInfo

from . import _utils

__all__ = ["DocsetListParams"]

class DocsetListParams(TypedDict, total=False):
    cursor: str
    """
    Opaque continuation token used to get additional items when a previous query
    returned more than `limit` items.
    """

    limit: int
    """Maximum number of items to return."""

    max_documents: Annotated[int, PropertyInfo(alias="maxDocuments")]
    """Filters docsets by maximum number of documents in the set."""

    min_documents: Annotated[int, PropertyInfo(alias="minDocuments")]
    """Filters docsets by minimum number of documents in the set."""

    name: str
    """Filters docsets by name."""

    samples: bool
    """Whether or not to return sample docsets."""