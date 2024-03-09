var cancellable = require("./index.js");

test.skip('skip', () => {});

describe("test suite", () => {
  it("test a", () => {
    const result = [];

    const cancelTimeMs = 190;
    const cancelFn = cancellable((x) => x * 2, [4], 35);
    setTimeout(cancelFn, cancelTimeMs);
    
    expect(1).toEqual(1);
  });
  it("test b", () => {
    const cancelTimeMs = 165; 
    const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30) 
    setTimeout(cancelFn, cancelTimeMs);

    expect(1).toEqual(1);
  });
  it("test c", () => {
    
    const cancelTimeMs = 180;
    const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
    setTimeout(cancelFn, cancelTimeMs)

    expect(1).toEqual(1);
  });
});
