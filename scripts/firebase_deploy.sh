#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e
# Print each command to the terminal before it is executed.
set -x

echo "Installing firebase cli"
npm install -g firebase-tools

# Add npm global bin to PATH (important!)
export PATH="$(npm bin -g):$PATH"

echo "deploying fe to firebase"
firebase deploy --only hosting