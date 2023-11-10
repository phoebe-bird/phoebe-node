# File generated from our OpenAPI spec by Stainless.

from typing import Optional, Union, List, Dict, Any
from typing_extensions import Literal
from pydantic import Field as FieldInfo
from .._models import BaseModel
from ..types import shared

from .webhook import Webhook

from typing import List, Optional

from . import webhook

__all__ = ["WebhookListResponse"]

class WebhookListResponse(BaseModel):
    webhooks: List[Webhook]

    next: Optional[str] = None
    """URL to get the next page of results.

    Not present when there are no further results.
    """