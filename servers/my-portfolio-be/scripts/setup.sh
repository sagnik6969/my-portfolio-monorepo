#!/bin/bash

# Exit on error
set -e

echo "🔍 Checking development environment..."

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "❌ uv package manager not found!"
    echo "Please install uv first from:"
    echo ""
    echo "https://docs.astral.sh/uv/getting-started/installation/"
    echo ""
    exit 1
fi

echo "🚀 Setting up Python project..."

# Install dependencies using uv sync
echo "📦 Installing dependencies..."
uv sync

# Install pre-commit
echo "🔧 Setting up pre-commit hooks..."
uv run pre-commit install

echo "✅ Setup complete! Your development environment is ready."