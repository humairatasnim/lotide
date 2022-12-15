const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqArrays", () => {
  it("returns true for { a: '1', b: '2' } and { b: '2', a: '1' }", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false for { a: '1', b: '2' } and { a: '1', b: '2', c: '3' }", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("returns true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("returns false for { c: '1', d: ['2', 3] } and { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
  it("returns false for { a: [1, 2], b: 2 } and { a: [1, 2], b: 5 }", () => {
    const ab1 = { a: [1, 2], b: 2 };
    const ab2 = { a: [1, 2], b: 5 };
    assert.deepEqual(eqObjects(ab1, ab2), false);
  });
});
