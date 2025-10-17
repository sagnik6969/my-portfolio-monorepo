FROM python:3.13-slim-bookworm

WORKDIR /app

COPY pyproject.toml .

RUN pip install -e .

COPY constants ./constants
COPY schemas ./schemas
COPY utils ./utils
COPY main.py ./


EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]