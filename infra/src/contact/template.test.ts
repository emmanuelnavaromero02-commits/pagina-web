import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const template = readFileSync(
  new URL("../../template.yaml", import.meta.url),
  "utf8",
);

describe("contact infrastructure controls", () => {
  it("enforces the 10 KiB body limit at WAF before Lambda", () => {
    assert.match(template, /Name: BodySizeLimit[\s\S]*Size: 10240/);
    assert.match(template, /OversizeHandling: MATCH/);
  });

  it("combines reputation, challenge, and blocking rate controls", () => {
    assert.match(template, /AWSManagedRulesAmazonIpReputationList/);
    assert.match(template, /Name: PerIpChallenge[\s\S]*Challenge: \{\}/);
    assert.match(template, /Name: PerIpRateLimit[\s\S]*ResponseCode: 429/);
  });

  it("keeps request bodies and WAF samples out of logs", () => {
    assert.match(template, /DataTraceEnabled: false/);
    assert.match(template, /LoggingLevel: "OFF"/);
    assert.doesNotMatch(template, /\$context\.requestBody/);
    assert.doesNotMatch(template, /SampledRequestsEnabled: true/);
  });
});
