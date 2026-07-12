const { test } = require("node:test");
const assert = require("node:assert");
const { daysBetween, addDays } = require("../src/dates");

test("daysBetween counts whole days", () => {
  assert.strictEqual(daysBetween("2024-01-01", "2024-01-04"), 3);
});

test("addDays adds days", () => {
  assert.strictEqual(addDays("2024-01-01", 3), "2024-01-04");
});

test("addDays crosses month boundaries", () => {
  assert.strictEqual(addDays("2024-01-31", 1), "2024-02-01");
});
