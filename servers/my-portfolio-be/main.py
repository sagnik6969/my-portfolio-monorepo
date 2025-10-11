from logging import getLogger

import firebase_admin
from fastapi import FastAPI, HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from firebase_admin import auth

logger = getLogger(__name__)

if not firebase_admin._apps:
    firebase_admin.initialize_app()

security = HTTPBearer()


def verify_token(credentials: HTTPAuthorizationCredentials = Security(security)):  # noqa: B008
    try:
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


@app.get("/")
def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
