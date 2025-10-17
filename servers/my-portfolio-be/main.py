import json
import os
from logging import getLogger

import firebase_admin
from fastapi import FastAPI, HTTPException, Request, Security, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from firebase_admin import auth, credentials

from schemas.agent_chat import ChatRequest
from utils.agent import stream_agent_response

logger = getLogger(__name__)

if not firebase_admin._apps:
    service_account_info = json.loads(os.environ["FIREBASE_SERVICE_ACCOUNT"])
    cred = credentials.Certificate(service_account_info)
    firebase_admin.initialize_app(cred)

security = HTTPBearer()


def verify_token(
    request: Request,
    credentials: HTTPAuthorizationCredentials = Security(security),  # noqa: B008
):
    try:
        if request.url.path == "/":
            return  # Skip verification for health check endpoint
        auth.verify_id_token(credentials.credentials)
        logger.info("Token verified successfully")
    except auth.InvalidIdTokenError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid ID token"
        ) from e
    except auth.ExpiredIdTokenError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Expired ID token"
        ) from e
    except Exception as e:
        logger.exception(e)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Token verification failed: {e}",
        ) from e


app = FastAPI(dependencies=[Security(verify_token)])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health_check():
    return {"status": "healthy"}


@app.post("/chat")
def chat_endpoint(chat_history: ChatRequest):
    chat_history = chat_history.model_dump()
    return StreamingResponse(
        stream_agent_response(chat_history["chat_history"]),
        media_type="text/event-stream",
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
