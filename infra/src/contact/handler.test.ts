import assert from "node:assert/strict";
import { afterEach, beforeEach, describe, it } from "node:test";
import type { SendEmailCommandInput } from "@aws-sdk/client-sesv2";
import type { APIGatewayProxyEvent, Context } from "aws-lambda";
import { createHandler, type ContactRequest } from "./handler.js";

const now = Date.UTC(2026, 6, 14, 16, 0, 0);
const context = { awsRequestId: "test-request-id" } as Context;

const validRequest: ContactRequest = {
  name: "Rabely Jovana",
  company: "Empresa de prueba",
  email: "contacto@example.org",
  phone: "+52 55 1234 5678",
  service: "initial-diagnosis",
  message: "Necesitamos revisar nuestros procesos internos.",
  topic: "operations",
  locale: "es",
  privacyAccepted: true,
  website: "",
  formStartedAt: now - 10_000,
};

function eventFor(body: unknown): APIGatewayProxyEvent {
  return {
    body: typeof body === "string" ? body : JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    isBase64Encoded: false,
  } as unknown as APIGatewayProxyEvent;
}

function makeHandler(
  sendEmail: (input: SendEmailCommandInput) => Promise<void>,
) {
  return createHandler({ now: () => now, sendEmail });
}

beforeEach(() => {
  process.env.ALLOWED_ORIGIN = "https://preview.7businesssolutions.com";
  process.env.MIN_FORM_FILL_MS = "3000";
  process.env.RECIPIENT_EMAIL = "ventas@7businesssolutions.com";
  process.env.SENDER_EMAIL = "ventas@7businesssolutions.com";
  process.env.SES_CONFIGURATION_SET = "7bs-contact-preview";
});

afterEach(() => {
  delete process.env.ALLOWED_ORIGIN;
  delete process.env.MIN_FORM_FILL_MS;
  delete process.env.RECIPIENT_EMAIL;
  delete process.env.SENDER_EMAIL;
  delete process.env.SES_CONFIGURATION_SET;
});

describe("contact handler", () => {
  it("sends a valid message through SES without using the visitor as sender", async () => {
    let sent: SendEmailCommandInput | undefined;
    const handler = makeHandler(async (input) => {
      sent = input;
    });

    const result = await handler(eventFor(validRequest), context);

    assert.equal(result.statusCode, 200);
    assert.equal(sent?.FromEmailAddress, "ventas@7businesssolutions.com");
    assert.deepEqual(sent?.Destination?.ToAddresses, [
      "ventas@7businesssolutions.com",
    ]);
    assert.deepEqual(sent?.ReplyToAddresses, ["contacto@example.org"]);
    assert.equal(sent?.ConfigurationSetName, "7bs-contact-preview");
    assert.equal(
      result.headers?.["Access-Control-Allow-Origin"],
      "https://preview.7businesssolutions.com",
    );
    assert.equal(result.headers?.["Access-Control-Allow-Credentials"], "true");
  });

  it("rejects unknown properties", async () => {
    let calls = 0;
    const handler = makeHandler(async () => {
      calls += 1;
    });

    const result = await handler(
      eventFor({ ...validRequest, unexpected: "value" }),
      context,
    );

    assert.equal(result.statusCode, 400);
    assert.equal(calls, 0);
  });

  it("rejects malformed optional fields and a missing honeypot", async () => {
    const handler = makeHandler(async () => undefined);
    const invalidPhone = await handler(
      eventFor({ ...validRequest, phone: 123456 }),
      context,
    );
    const invalidTopic = await handler(
      eventFor({ ...validRequest, topic: { value: "operations" } }),
      context,
    );
    const withoutHoneypot: Partial<ContactRequest> = { ...validRequest };
    delete withoutHoneypot.website;
    const missingHoneypot = await handler(eventFor(withoutHoneypot), context);

    assert.equal(invalidPhone.statusCode, 400);
    assert.equal(invalidTopic.statusCode, 400);
    assert.equal(missingHoneypot.statusCode, 400);
  });

  it("rejects payloads larger than 10 KiB", async () => {
    const handler = makeHandler(async () => undefined);
    const result = await handler(
      eventFor({ ...validRequest, message: "x".repeat(10 * 1024) }),
      context,
    );

    assert.equal(result.statusCode, 400);
  });

  it("rejects a populated honeypot or an implausibly fast form", async () => {
    const handler = makeHandler(async () => undefined);
    const honeypot = await handler(
      eventFor({ ...validRequest, website: "https://spam.example" }),
      context,
    );
    const tooFast = await handler(
      eventFor({ ...validRequest, formStartedAt: now - 500 }),
      context,
    );

    assert.equal(honeypot.statusCode, 403);
    assert.equal(tooFast.statusCode, 403);
  });

  it("requires explicit privacy acceptance", async () => {
    const handler = makeHandler(async () => undefined);
    const result = await handler(
      eventFor({ ...validRequest, privacyAccepted: false }),
      context,
    );

    assert.equal(result.statusCode, 400);
  });

  it("returns a generic error and never logs form content when SES fails", async () => {
    const originalError = console.error;
    const lines: string[] = [];
    console.error = (...args: unknown[]) => lines.push(args.join(" "));

    try {
      const handler = makeHandler(async () => {
        throw new Error("provider failure");
      });
      const result = await handler(eventFor(validRequest), context);

      assert.equal(result.statusCode, 500);
      assert.doesNotMatch(lines.join("\n"), /contacto@example\.org/);
      assert.doesNotMatch(lines.join("\n"), /procesos internos/);
    } finally {
      console.error = originalError;
    }
  });
});
