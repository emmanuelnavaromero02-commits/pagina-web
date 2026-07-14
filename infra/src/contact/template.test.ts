import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const template = readFileSync(
  new URL("../../template.yaml", import.meta.url),
  "utf8",
);
const productionWorkflow = readFileSync(
  new URL("../../../.github/workflows/deploy-production.yml", import.meta.url),
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

  it("keeps sandbox delivery on one verified corporate mailbox", () => {
    assert.match(template, /SesAccessMode:[\s\S]*AllowedValues:[\s\S]*- sandbox[\s\S]*- production/);
    assert.match(template, /SandboxForbidsExternalRecipients:/);
    assert.match(
      template,
      /SingleMailboxWhenExternalRecipientsAreDisabled:[\s\S]*!Equals \[!Ref SenderEmail, !Ref RecipientEmail\]/,
    );
    assert.match(template, /ExternalRecipientsRequireProductionMode:/);
    assert.match(template, /"ForAllValues:StringEquals":[\s\S]*ses:Recipients:[\s\S]*!Ref RecipientEmail/);
  });

  it("matches API throttling to the SES sandbox send-rate ceiling", () => {
    assert.match(template, /ThrottlingBurstLimit: !If \[IsSesSandbox, 1, 25\]/);
    assert.match(template, /ThrottlingRateLimit: !If \[IsSesSandbox, 1, 10\]/);
  });

  it("exposes the deployed SES gate state for post-deploy verification", () => {
    assert.match(template, /SesAccessMode:[\s\S]*Value: !Ref SesAccessMode/);
    assert.match(
      template,
      /SesRecipientPolicy:[\s\S]*single-verified-mailbox[\s\S]*external-recipients-enabled/,
    );
  });

  it("gates the Mexico-only production workflow by the real SES account mode", () => {
    assert.match(productionWorkflow, /ses_access_mode:[\s\S]*- sandbox[\s\S]*- production/);
    assert.match(productionWorkflow, /enable_external_ses_recipient:/);
    assert.match(productionWorkflow, /test "\$SES_SENDER_EMAIL" = "\$SES_RECIPIENT_EMAIL"/);
    assert.match(productionWorkflow, /test "\$ses_production" = "False"/);
    assert.match(productionWorkflow, /test "\$ses_production" = "True"/);
    assert.match(productionWorkflow, /NEXT_PUBLIC_EU_MARKET_ENABLED: "false"/);
    assert.match(productionWorkflow, /AllowExternalRecipients="\$ENABLE_EXTERNAL_SES_RECIPIENT"/);
    assert.match(
      productionWorkflow,
      /"website":"robot","formStartedAt":1/,
    );
  });
});
