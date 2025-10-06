#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Deploying $DIST_FOLDER to gs://$GCP_FE_BUCKET_NAME..."

# Use gsutil to sync the dist folder with the GCS bucket.
# -m: performs a parallel (multi-threaded/multi-processing) copy.
# -r: recurses into directories.
# The final "/*" on the source directory is important to copy the contents, not the directory itself.
gsutil -m rsync -r "$DIST_FOLDER/*" "gs://$GCP_FE_BUCKET_NAME/my_portfolio"

echo "Deployment to gs://$GCP_FE_BUCKET_NAME complete."
echo "Your application should be available at: https://storage.googleapis.com/$GCP_FE_BUCKET_NAME/index.html"
