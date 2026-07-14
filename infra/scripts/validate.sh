#!/usr/bin/env bash
set -euo pipefail

INFRA_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$INFRA_DIR"

npm ci
npm run typecheck
npm test
npm run build

./scripts/validate-bootstrap.sh

if command -v sam >/dev/null 2>&1; then
  sam validate --lint --template-file template.yaml
  sam build --template-file template.yaml
else
  echo "SAM CLI no está instalado; se omitieron sam validate y sam build." >&2
fi

if command -v cfn-lint >/dev/null 2>&1; then
  cfn-lint hosting-template.yaml
else
  echo "cfn-lint no está instalado; se omitió el lint de hosting-template.yaml." >&2
fi
