from typing import Literal

from pydantic import BaseModel


class ChatItem(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    chat_history: list[ChatItem]
