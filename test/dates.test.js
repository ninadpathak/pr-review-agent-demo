const { test } = require("node:test");
const assert = require("node:assert");
const { daysBetween } = require("../src/dates");

test("daysBetween counts whole days", () => {
  assert.strictEqual(daysBetween("2024-01-01", "2024-01-04"), 3);
});
