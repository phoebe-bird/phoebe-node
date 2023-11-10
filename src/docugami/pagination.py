# File generated from our OpenAPI spec by Stainless.

import re
from typing import Optional, TypeVar, List, Generic, Dict, Any, Type, Mapping, cast
from typing_extensions import TypedDict, Literal, Annotated, Protocol, runtime_checkable

from httpx import URL, Response
from pydantic import Field

from ._models import BaseModel
from ._types import ModelT
from ._utils import PropertyInfo, is_mapping
from ._base_client import BasePage, BaseSyncPage, BaseAsyncPage, PageInfo

_BaseModelT = TypeVar('_BaseModelT', bound=BaseModel)