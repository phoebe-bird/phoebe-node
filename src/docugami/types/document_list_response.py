# File generated from our OpenAPI spec by Stainless.

from typing import List, Optional

from .._models import BaseModel
from .document import Document

__all__ = ["DocumentListResponse"]


class DocumentListResponse(BaseModel):
    documents: List[Document]

    next: Optional[str] = None
    """URL to get the next page of results.

    Not present when there are no further results.
    """
