# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing import List
from typing_extensions import Literal, Required, Annotated, TypedDict

from .._utils import PropertyInfo

__all__ = ["WebhookCreateParams"]


class WebhookCreateParams(TypedDict, total=False):
    target: Required[Literal["Documents", "Project", "Docset"]]

    url: Required[str]

    events: List[
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

    secret: str

    target_id: Annotated[str, PropertyInfo(alias="targetId")]
