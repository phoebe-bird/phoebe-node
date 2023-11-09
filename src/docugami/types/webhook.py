# File generated from our OpenAPI spec by Stainless.

from typing import List, Optional
from datetime import datetime
from typing_extensions import Literal

from pydantic import Field as FieldInfo

from .._models import BaseModel

__all__ = ["Webhook"]


class Webhook(BaseModel):
    id: Optional[str] = None

    created_at: Optional[datetime] = FieldInfo(alias="createdAt", default=None)

    events: Optional[
        List[
            Literal[
                "Documents.Create",
                "Documents.Delete",
                "Docset.Document.Add",
                "Docset.Document.Remove",
                "Docset.Document.Dgml",
                "Project.Artifacts.Create",
                "Project.Artifacts.Delete",
                "Project.Artifacts.Modify",
                "Project.Artifacts.Version",
            ]
        ]
    ] = None

    target: Optional[Literal["Documents", "Project", "Docset"]] = None

    target_id: Optional[str] = FieldInfo(alias="targetId", default=None)

    url: Optional[str] = None

    webhook_url: Optional[str] = FieldInfo(alias="webhookUrl", default=None)
