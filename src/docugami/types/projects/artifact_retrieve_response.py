# File generated from our OpenAPI spec by Stainless.

from typing import List, Optional

from .artifact import Artifact
from ..._models import BaseModel

__all__ = ["ArtifactRetrieveResponse"]


class ArtifactRetrieveResponse(BaseModel):
    artifacts: List[Artifact]

    next: Optional[str] = None
    """URL to get the next page of results.

    Not present when there are no further results.
    """
