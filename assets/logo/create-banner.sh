#!/bin/bash

# Terminal[X]MCP Banner Creation Script
# Creates optimized banner from logo.png
# Usage: ./create-banner.sh

echo "🎨 Creating Terminal[X]MCP banner..."

# Check if logo.png exists
if [ ! -f "logo.png" ]; then
    echo "❌ Error: logo.png not found in current directory"
    echo "📁 Please place your logo.png file in assets/logo/ directory"
    exit 1
fi

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "❌ Error: ImageMagick not installed"
    echo "🔧 Install with: brew install imagemagick"
    exit 1
fi

# Create banner with one command
echo "🔄 Processing logo and creating banner..."
magick -size 1200x400 xc:white \( logo.png -resize 380x380 \) -gravity center -composite -strip -quality 85 terminal-x-mcp-banner.png

# Check if banner was created successfully
if [ -f "terminal-x-mcp-banner.png" ]; then
    # Get file size
    SIZE=$(ls -lh terminal-x-mcp-banner.png | awk '{print $5}')
    echo "✅ Banner created successfully!"
    echo "📏 Size: 1200x400 pixels"
    echo "💾 File size: $SIZE"
    echo "📁 Saved as: terminal-x-mcp-banner.png"
else
    echo "❌ Error: Failed to create banner"
    exit 1
fi

echo "🎯 Banner ready for Terminal[X]MCP documentation!" 