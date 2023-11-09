# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import List
from typing_extensions import Required, TypedDict

__all__ = ["DocsetCreateParams"]


class DocsetCreateParams(TypedDict, total=False):
    name: Required[str]
    """The name of the docset."""

    documents: List[str]
    """Optional collection of document ids to include in the new docset.

    Documents will be moved if they already belong to a docset.
    """
