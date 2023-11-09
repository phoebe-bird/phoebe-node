# File generated from our OpenAPI spec by Stainless.

from typing import List, Optional

from .webhook import Webhook
from .._models import BaseModel

__all__ = ["WebhookListResponse"]


class WebhookListResponse(BaseModel):
    webhooks: List[Webhook]

    next: Optional[str] = None
    """URL to get the next page of results.

    Not present when there are no further results.
    """
