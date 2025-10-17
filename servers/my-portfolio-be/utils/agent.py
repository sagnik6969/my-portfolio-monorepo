import json

from langchain.agents import create_agent
from langchain.chat_models import init_chat_model

from constants.prompt import SYSTEM_PROMPT

llm = init_chat_model("google_genai:gemini-2.5-flash")

with open("constants/resume.json") as f:
    person_details = f.read()

agent = create_agent(
    model=llm,
    tools=[],
    system_prompt=SYSTEM_PROMPT.format(person_details=person_details),
)


def stream_agent_response(chat_history):
    for token, metadata in agent.stream(
        {"messages": chat_history},
        stream_mode="messages",
    ):
        yield f"event: message\ndata: {json.dumps({'token': token.content_blocks, 'metadata': metadata})}\n\n"
    yield "event: message\ndata: [DONE]\n\n"
