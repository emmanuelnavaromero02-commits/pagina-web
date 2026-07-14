#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 3 ]]; then
  echo "Uso: $0 <region> <dominio-identidad> <dominio-mail-from>" >&2
  echo "Ejemplo: $0 eu-west-1 7businesssolutions.com mail.7businesssolutions.com" >&2
  exit 64
fi

REGION="$1"
IDENTITY="$2"
MAIL_FROM_DOMAIN="$3"

aws sesv2 put-email-identity-mail-from-attributes \
  --region "$REGION" \
  --email-identity "$IDENTITY" \
  --mail-from-domain "$MAIL_FROM_DOMAIN" \
  --behavior-on-mx-failure REJECT_MESSAGE

cat <<EOF
Configuración enviada a SES. No se modificó DNS.
Crea y valida en tu proveedor DNS los registros que SES muestre para:
  MX  $MAIL_FROM_DOMAIN -> feedback-smtp.$REGION.amazonses.com (prioridad 10)
  TXT $MAIL_FROM_DOMAIN -> v=spf1 include:amazonses.com ~all
Después ejecuta: scripts/check-ses.sh $REGION $IDENTITY
EOF

