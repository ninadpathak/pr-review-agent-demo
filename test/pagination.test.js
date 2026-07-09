const { test } = require("node:test");
const assert = require("node:assert");
const { paginate, pageCount } = require("../src/pagination");

const items = Array.from({ length: 10 }, (_, i) => i + 1); // 1..10

test("first page returns the first pageSize items", () => {
  assert.deepStrictEqual(paginate(items, 1, 3), [1, 2, 3]);
});

test("second page returns the next slice", () => {
  assert.deepStrictEqual(paginate(items, 2, 3), [4, 5, 6]);
});

test("page below 1 is clamped to page 1", () => {
  assert.deepStrictEqual(paginate(items, 0, 3), [1, 2, 3]);
});

test("pageCount rounds up", () => {
  assert.strictEqual(pageCount(10, 3), 4);
  assert.strictEqual(pageCount(9, 3), 3);
});
