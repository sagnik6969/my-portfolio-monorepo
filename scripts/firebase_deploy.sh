#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e
# Print each command to the terminal before it is executed.
set -x

npm install -g firebase

firebase deploy --only hosting