# File generated from our OpenAPI spec by Stainless.

from typing import List, Optional

from .project import Project
from .._models import BaseModel

__all__ = ["ProjectListResponse"]


class ProjectListResponse(BaseModel):
    projects: List[Project]

    next: Optional[str] = None
    """URL to get the next page of results.

    Not present when there are no further results.
    """
