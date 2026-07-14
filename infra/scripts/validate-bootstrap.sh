#!/usr/bin/env bash
set -euo pipefail

INFRA_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEMPLATE="$INFRA_DIR/bootstrap-template.yaml"

if [[ ! -f "$TEMPLATE" ]]; then
  echo "Falta bootstrap-template.yaml." >&2
  exit 66
fi

if grep -Eq 'AdministratorAccess|AWS::IAM::User|AWS::IAM::AccessKey' "$TEMPLATE"; then
  echo "El bootstrap contiene una política administradora, un usuario o una access key." >&2
  exit 65
fi

if grep -Eq "^[[:space:]]+Action:[[:space:]]+['\"]?\\*['\"]?[[:space:]]*$" "$TEMPLATE"; then
  echo "El bootstrap contiene Action: *; revisa el alcance antes de continuar." >&2
  exit 65
fi

if command -v cfn-lint >/dev/null 2>&1; then
  cfn-lint "$TEMPLATE"
elif command -v uvx >/dev/null 2>&1; then
  uvx --from cfn-lint cfn-lint "$TEMPLATE"
else
  echo "cfn-lint/uvx no están instalados; se omitió el lint de bootstrap-template.yaml." >&2
fi

if [[ "${AWS_VALIDATE_REMOTE:-0}" == "1" ]]; then
  aws cloudformation validate-template \
    --template-body "file://$TEMPLATE" \
    --query 'Description' \
    --output text
fi

echo "Bootstrap validado sin desplegar."
