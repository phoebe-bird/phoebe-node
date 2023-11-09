# File generated from our OpenAPI spec by Stainless.

from typing import List, Optional

from .docset import Docset
from .._models import BaseModel

__all__ = ["DocsetListResponse"]


class DocsetListResponse(BaseModel):
    docsets: List[Docset]

    next: Optional[str] = None
    """URL to get the next page of results.

    Not present when there are no further results.
    """
