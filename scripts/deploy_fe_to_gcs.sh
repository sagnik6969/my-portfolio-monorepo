#!/bin/bash

echo "Deploying $DIST_FOLDER to gs://$FE_BUCKET_NAME..."

# Use gsutil to sync the dist folder with the GCS bucket.
# -m: performs a parallel (multi-threaded/multi-processing) copy.
# -r: recurses into directories.
# The final "/" on the source directory is important to copy the contents, not the directory itself.
gsutil -m rsync -r "$DIST_FOLDER/*" "gs://$FE_BUCKET_NAME/my_portfolio"

echo "Deployment to gs://$FE_BUCKET_NAME complete."
echo "Your application should be available at: https://storage.googleapis.com/$BUCKET_NAME/index.html"
