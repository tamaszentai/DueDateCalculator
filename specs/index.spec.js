const assert = require("assert");
const index = require("../index");

// Predefined variables to pass in

const notWeekend = new Date(Date.UTC(2021, 5, 28, 16, 59));
const weekend = new Date(Date.UTC(2021, 5, 26, 16, 59));

// Tests

describe("isWeekend function", () => {
    it("should returns true", () => {
      const result = index.isWeekend(weekend);
      assert.strictEqual(result, true);
    });
  
    it("should returns false", () => {
      const result = index.isWeekend(notWeekend);
      assert.strictEqual(result, false);
    });
  });