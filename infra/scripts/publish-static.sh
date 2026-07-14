#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 3 ]]; then
  echo "Uso: $0 <directorio-out> <bucket-s3> <distribution-id>" >&2
  exit 64
fi

OUT_DIR="$1"
BUCKET="$2"
DISTRIBUTION_ID="$3"

if [[ ! -f "$OUT_DIR/index.html" || ! -f "$OUT_DIR/404.html" ]]; then
  echo "El export debe contener index.html y 404.html." >&2
  exit 65
fi

# La primera pasada mantiene todo el export coherente y elimina archivos obsoletos.
aws s3 sync "$OUT_DIR/" "s3://$BUCKET/" \
  --delete \
  --cache-control "public,max-age=3600" \
  --no-progress

# Los assets con hash de Next.js son inmutables.
if [[ -d "$OUT_DIR/_next/static" ]]; then
  aws s3 cp "$OUT_DIR/_next/static/" "s3://$BUCKET/_next/static/" \
    --recursive \
    --cache-control "public,max-age=31536000,immutable" \
    --no-progress
fi

# HTML siempre revalida para que un despliegue sea visible inmediatamente.
aws s3 cp "$OUT_DIR/" "s3://$BUCKET/" \
  --recursive \
  --exclude "*" \
  --include "*.html" \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html; charset=utf-8" \
  --no-progress

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text

