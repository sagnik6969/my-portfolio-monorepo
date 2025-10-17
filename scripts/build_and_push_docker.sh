#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e
# Print each command to the terminal before it is executed.
set -x

docker build -t "sagnik6969/my-portfolio-be" .
docker push "sagnik6969/my-portfolio-be"
