#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Uso: $0 <region> [dominio-identidad]" >&2
  exit 64
fi

REGION="$1"
IDENTITY="${2:-7businesssolutions.com}"

aws sesv2 get-account \
  --region "$REGION" \
  --query '{ProductionAccessEnabled:ProductionAccessEnabled,SendingEnabled:SendingEnabled,EnforcementStatus:EnforcementStatus,SendQuota:SendQuota}'

aws sesv2 get-email-identity \
  --region "$REGION" \
  --email-identity "$IDENTITY" \
  --query '{VerifiedForSendingStatus:VerifiedForSendingStatus,DkimAttributes:DkimAttributes,MailFromAttributes:MailFromAttributes}'

