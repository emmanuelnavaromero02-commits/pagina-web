import {
  SESv2Client,
  SendEmailCommand,
  type SendEmailCommandInput,
} from "@aws-sdk/client-sesv2";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

const MAX_BODY_BYTES = 10 * 1024;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;
const CLOCK_SKEW_MS = 60 * 1_000;

export const ALLOWED_SERVICES = [
  "software-factory",
  "enterprise-integration",
  "cloud-data",
  "operational-ai",
  "enterprise-copilot",
  "initial-diagnosis",
] as const;

export const ALLOWED_TOPICS = [
  "copilot",
  "finance",
  "operations",
  "hr",
  "reporting",
  "sap",
  "automation",
  "support",
  "governance",
] as const;

export type AllowedService = (typeof ALLOWED_SERVICES)[number];
export type AllowedTopic = (typeof ALLOWED_TOPICS)[number];
export type Locale = "es" | "en";

export type ContactRequest = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: AllowedService;
  message: string;
  topic?: AllowedTopic;
  locale: Locale;
  privacyAccepted: true;
  website: "";
  formStartedAt: number;
};

type ValidationResult =
  | { ok: true; value: ContactRequest }
  | {
      ok: false;
      statusCode: 400 | 403;
      code: "INVALID_REQUEST" | "BOT_REJECTED";
    };

type RuntimeConfig = {
  allowedOrigin: string;
  configurationSet: string;
  minFormFillMs: number;
  recipientEmail: string;
  senderEmail: string;
};

type Dependencies = {
  now: () => number;
  sendEmail: (input: SendEmailCommandInput) => Promise<void>;
};

const ses = new SESv2Client({});

const defaultDependencies: Dependencies = {
  now: Date.now,
  sendEmail: async (input) => {
    await ses.send(new SendEmailCommand(input));
  },
};

const allowedKeys = new Set<keyof ContactRequest>([
  "name",
  "company",
  "email",
  "phone",
  "service",
  "message",
  "topic",
  "locale",
  "privacyAccepted",
  "website",
  "formStartedAt",
]);

const serviceSet = new Set<string>(ALLOWED_SERVICES);
const topicSet = new Set<string>(ALLOWED_TOPICS);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d\s().-]{6,30}$/;

function isBoundedString(
  value: unknown,
  minimum: number,
  maximum: number,
): value is string {
  return (
    typeof value === "string" &&
    value.trim().length >= minimum &&
    value.trim().length <= maximum
  );
}

export function validateContactRequest(
  input: unknown,
  now: number,
  minFormFillMs: number,
): ValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, statusCode: 400, code: "INVALID_REQUEST" };
  }

  const candidate = input as Record<string, unknown>;
  if (
    Object.keys(candidate).some(
      (key) => !allowedKeys.has(key as keyof ContactRequest),
    )
  ) {
    return { ok: false, statusCode: 400, code: "INVALID_REQUEST" };
  }

  if (typeof candidate.website !== "string") {
    return { ok: false, statusCode: 400, code: "INVALID_REQUEST" };
  }

  if (candidate.website !== "") {
    return { ok: false, statusCode: 403, code: "BOT_REJECTED" };
  }

  if (!Number.isSafeInteger(candidate.formStartedAt)) {
    return { ok: false, statusCode: 400, code: "INVALID_REQUEST" };
  }

  const formStartedAt = candidate.formStartedAt as number;
  const elapsed = now - formStartedAt;
  if (
    elapsed < minFormFillMs ||
    elapsed > MAX_FORM_AGE_MS ||
    formStartedAt > now + CLOCK_SKEW_MS
  ) {
    return { ok: false, statusCode: 403, code: "BOT_REJECTED" };
  }

  const phone =
    candidate.phone === undefined && !("phone" in candidate)
      ? undefined
      : typeof candidate.phone === "string"
        ? candidate.phone.trim()
        : null;
  const topic =
    candidate.topic === undefined && !("topic" in candidate)
      ? undefined
      : typeof candidate.topic === "string"
        ? candidate.topic.trim()
        : null;

  if (
    !isBoundedString(candidate.name, 2, 120) ||
    !isBoundedString(candidate.company, 2, 160) ||
    !isBoundedString(candidate.email, 3, 254) ||
    !emailPattern.test(candidate.email.trim()) ||
    (phone !== undefined && (phone === null || !phonePattern.test(phone))) ||
    !isBoundedString(candidate.message, 10, 4_000) ||
    typeof candidate.service !== "string" ||
    !serviceSet.has(candidate.service) ||
    (topic !== undefined && (topic === null || !topicSet.has(topic))) ||
    (candidate.locale !== "es" && candidate.locale !== "en") ||
    candidate.privacyAccepted !== true
  ) {
    return { ok: false, statusCode: 400, code: "INVALID_REQUEST" };
  }

  const value: ContactRequest = {
    name: candidate.name.trim(),
    company: candidate.company.trim(),
    email: candidate.email.trim().toLowerCase(),
    service: candidate.service as AllowedService,
    message: candidate.message.trim(),
    locale: candidate.locale,
    privacyAccepted: true,
    website: "",
    formStartedAt,
  };

  if (phone !== undefined && phone !== null) value.phone = phone;
  if (topic !== undefined && topic !== null)
    value.topic = topic as AllowedTopic;

  return { ok: true, value };
}

function readConfig(): RuntimeConfig {
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  const configurationSet = process.env.SES_CONFIGURATION_SET;
  const recipientEmail = process.env.RECIPIENT_EMAIL;
  const senderEmail = process.env.SENDER_EMAIL;
  const minFormFillMs = Number(process.env.MIN_FORM_FILL_MS ?? "3000");

  if (
    !allowedOrigin ||
    !configurationSet ||
    !recipientEmail ||
    !senderEmail ||
    !Number.isSafeInteger(minFormFillMs) ||
    minFormFillMs < 1_000
  ) {
    throw new Error("Invalid Lambda runtime configuration");
  }

  return {
    allowedOrigin,
    configurationSet,
    minFormFillMs,
    recipientEmail,
    senderEmail,
  };
}

function response(
  statusCode: number,
  code: string,
  allowedOrigin: string,
): APIGatewayProxyResult {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Credentials": "true",
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
      Vary: "Origin",
    },
    body: JSON.stringify({ ok: statusCode === 200, code }),
  };
}

function getHeader(
  event: APIGatewayProxyEvent,
  name: string,
): string | undefined {
  const expected = name.toLowerCase();
  const entry = Object.entries(event.headers ?? {}).find(
    ([headerName]) => headerName.toLowerCase() === expected,
  );
  return entry?.[1] ?? undefined;
}

function bodySize(event: APIGatewayProxyEvent): number {
  if (!event.body) return 0;
  return event.isBase64Encoded
    ? Buffer.from(event.body, "base64").byteLength
    : Buffer.byteLength(event.body, "utf8");
}

function decodeBody(event: APIGatewayProxyEvent): string {
  if (!event.body) return "";
  return event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character] ?? character;
  });
}

function buildEmail(
  contact: ContactRequest,
  config: RuntimeConfig,
): SendEmailCommandInput {
  const phone = contact.phone ?? "No facilitado";
  const topic = contact.topic ?? "No especificado";
  const subject = `[Web] Nuevo contacto: ${contact.service}`;
  const text = [
    `Nombre: ${contact.name}`,
    `Empresa: ${contact.company}`,
    `Correo: ${contact.email}`,
    `Teléfono: ${phone}`,
    `Servicio: ${contact.service}`,
    `Tema: ${topic}`,
    `Idioma: ${contact.locale}`,
    "",
    "Mensaje:",
    contact.message,
  ].join("\n");

  const rows = [
    ["Nombre", contact.name],
    ["Empresa", contact.company],
    ["Correo", contact.email],
    ["Teléfono", phone],
    ["Servicio", contact.service],
    ["Tema", topic],
    ["Idioma", contact.locale],
  ]
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:4px 12px 4px 0">${escapeHtml(label ?? "")}</th><td>${escapeHtml(value ?? "")}</td></tr>`,
    )
    .join("");

  const html = [
    "<h1>Nuevo contacto desde 7 Business Solutions</h1>",
    `<table>${rows}</table>`,
    "<h2>Mensaje</h2>",
    `<p style="white-space:pre-wrap">${escapeHtml(contact.message)}</p>`,
  ].join("");

  return {
    FromEmailAddress: config.senderEmail,
    Destination: { ToAddresses: [config.recipientEmail] },
    ReplyToAddresses: [contact.email],
    ConfigurationSetName: config.configurationSet,
    Content: {
      Simple: {
        Subject: { Data: subject, Charset: "UTF-8" },
        Body: {
          Text: { Data: text, Charset: "UTF-8" },
          Html: { Data: html, Charset: "UTF-8" },
        },
      },
    },
    EmailTags: [
      { Name: "source", Value: "website" },
      { Name: "locale", Value: contact.locale },
      { Name: "service", Value: contact.service },
    ],
  };
}

export function createHandler(
  dependencies: Dependencies = defaultDependencies,
) {
  return async (
    event: APIGatewayProxyEvent,
    context: Context,
  ): Promise<APIGatewayProxyResult> => {
    let config: RuntimeConfig;
    try {
      config = readConfig();
    } catch (error) {
      console.error(
        JSON.stringify({
          event: "configuration_error",
          requestId: context.awsRequestId,
          errorName: error instanceof Error ? error.name : "UnknownError",
        }),
      );
      return response(500, "TEMPORARY_ERROR", "null");
    }

    const contentType = getHeader(event, "content-type") ?? "";
    const declaredLength = Number(getHeader(event, "content-length") ?? "0");
    if (
      !contentType.toLowerCase().startsWith("application/json") ||
      (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) ||
      bodySize(event) > MAX_BODY_BYTES
    ) {
      return response(400, "INVALID_REQUEST", config.allowedOrigin);
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(decodeBody(event));
    } catch {
      return response(400, "INVALID_REQUEST", config.allowedOrigin);
    }

    const validation = validateContactRequest(
      parsed,
      dependencies.now(),
      config.minFormFillMs,
    );
    if (!validation.ok) {
      return response(
        validation.statusCode,
        validation.code,
        config.allowedOrigin,
      );
    }

    try {
      await dependencies.sendEmail(buildEmail(validation.value, config));
      console.info(
        JSON.stringify({
          event: "contact_sent",
          requestId: context.awsRequestId,
        }),
      );
      return response(200, "CONTACT_SENT", config.allowedOrigin);
    } catch (error) {
      console.error(
        JSON.stringify({
          event: "ses_send_failed",
          requestId: context.awsRequestId,
          errorName: error instanceof Error ? error.name : "UnknownError",
        }),
      );
      return response(500, "TEMPORARY_ERROR", config.allowedOrigin);
    }
  };
}

export const handler = createHandler();
