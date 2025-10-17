#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e
# Print each command to the terminal before it is executed.
set -x

docker build -t "sagnik6969/my-portfolio-be" .
docker push "sagnik6969/my-portfolio-be"
echo "Pushed image to docker"
echo "🚀 Triggering Render deploy..."

# Trigger the deploy and capture HTTP status code
status_code=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$RENDER_DEPLOY_HOOK")

# Check if it succeeded
if [ "$status_code" -ne 200 ]; then
  echo "❌ Deploy trigger failed with HTTP status: $status_code" >&2
  exit 1
fi

echo "✅ Deploy triggered successfully!"