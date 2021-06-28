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

describe("calculateDueDate function", () => {
    it("it should returns Can't submit on weekends!", () => {
      const result = index.calculateDueDate(weekend);
      assert.strictEqual(result, "Can't submit on weekends!");
    });
    it("it should returns Can't submit out of working hours!", () => {
      const result = index.calculateDueDate(outOfWorkingHours);
      assert.strictEqual(result, "Can't submit out of working hours!");
    });
    it("it should returns 2021.06.30:10:59", () => {
      const result = index.calculateDueDate(inWorkingHours, 10);
      assert.deepStrictEqual(result, new Date(Date.UTC(2021, 5, 30, 10, 59)));
    });
  });
