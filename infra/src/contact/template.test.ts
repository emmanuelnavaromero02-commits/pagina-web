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

  it("limits the SNS resource policy to CloudWatch alarm publishing", () => {
    assert.doesNotMatch(template, /Action:\s+SNS:\*/i);
    assert.match(template, /Sid: AllowCloudWatchPublish[\s\S]*Action: sns:Publish/);
    assert.doesNotMatch(template, /AWS::SES::ConfigurationSetEventDestination/);
  });

  it("grants API Gateway the complete required CloudWatch Logs action set", () => {
    for (const action of [
      "CreateLogGroup",
      "CreateLogStream",
      "DescribeLogGroups",
      "DescribeLogStreams",
      "PutLogEvents",
      "GetLogEvents",
      "FilterLogEvents",
    ]) {
      assert.match(template, new RegExp(`logs:${action}`));
    }
  });

  it("keeps the regional API Gateway account setting owned by preview only", () => {
    assert.match(
      template,
      /OwnsRegionalApiGatewayAccount: !Equals \[!Ref Environment, preview\]/,
    );
    assert.match(
      template,
      /ApiGatewayCloudWatchRole:[\s\S]*?Condition: OwnsRegionalApiGatewayAccount/,
    );
    assert.match(
      template,
      /ApiGatewayAccount:[\s\S]*?Condition: OwnsRegionalApiGatewayAccount/,
    );
    assert.doesNotMatch(template, /DependsOn:\s+- ApiGatewayAccount/);
  });

  it("does not reserve concurrency below this account's unreserved minimum", () => {
    assert.doesNotMatch(template, /ReservedConcurrentExecutions/);
  });

  it("keeps strict request-model validation despite SAM CORS import warnings", () => {
    assert.match(template, /additionalProperties: false/);
    assert.match(template, /ValidateBody: true/);
    assert.doesNotMatch(template, /FailOnWarnings: true/);
  });

  it("accepts the software topic in the API request model", () => {
    assert.match(template, /topic:\s+type: string\s+enum:[\s\S]*?- software/);
  });

  it("lets Lambda classify a populated honeypot as a 403 antispam response", () => {
    assert.match(template, /website:\s+type: string\s+maxLength: 200/);
  });

  it("builds a CommonJS handler so bundled AWS SDK node imports load in Lambda", () => {
    assert.match(template, /Format: cjs/);
    assert.match(template, /\.js=\.cjs/);
  });

  it("authorizes both SES resources referenced by each send", () => {
    assert.match(template, /identity\/\$\{SesIdentityDomain\}/);
    assert.match(
      template,
      /configuration-set\/\$\{SesConfigurationSet\}/,
    );
  });
});
