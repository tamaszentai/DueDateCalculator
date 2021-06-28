const assert = require("assert");
const index = require("../index");

// Predefined variables to pass in

const notWeekend = new Date(Date.UTC(2021, 5, 28, 16, 59));
const weekend = new Date(Date.UTC(2021, 5, 26, 16, 59));
const outOfWorkingHours = new Date(Date.UTC(2021, 5, 28, 8, 59));
const inWorkingHours = new Date(Date.UTC(2021, 5, 28, 16, 59));

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

describe("isOutOfWorkingHours function", () => {
  it("it should returns true", () => {
    const result = index.isOutOfWorkingHours(outOfWorkingHours);
    assert.strictEqual(result, true);
  });
  it("it should returns false", () => {
    const result = index.isOutOfWorkingHours(inWorkingHours);
    assert.strictEqual(result, false);
  });
});
