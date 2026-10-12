import test from "node:test";
import assert from "node:assert/strict";
import { validateEnquiry, enquiryMessage } from "../server/utils/enquiry.mjs";

const valid = {
  name: "Test Visitor",
  email: "visitor@example.com",
  phone: "+234 800 000 0000",
  category: "Custom software",
  description: "A sufficiently detailed project enquiry.",
  website: "",
};

test("valid enquiries are trimmed and cannot change message routing", () => {
  const data = validateEnquiry({ ...valid, name: " Test Visitor ", to: "attacker@example.com" });
  assert.equal(data.name, "Test Visitor");
  const message = enquiryMessage(data, "mailer@zalhtz.com");
  assert.equal(message.to, "u2us@zalhtz.com");
  assert.equal(message.from.address, "mailer@zalhtz.com");
  assert.equal(message.replyTo.address, valid.email);
  assert.equal(message.html, undefined);
});

test("rejects malformed, oversized and honeypot submissions", () => {
  for (const data of [
    null,
    [],
    { ...valid, email: "x@example.com\r\nBcc:a@example.com" },
    { ...valid, name: "Name\nBcc" },
    { ...valid, description: "x".repeat(5001) },
    { ...valid, category: "Unknown" },
    { ...valid, website: "https://spam.test" },
    { ...valid, name: { value: "Name" } },
  ]) assert.equal(validateEnquiry(data), null);
});
