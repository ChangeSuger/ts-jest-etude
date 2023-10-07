test(".toBeGreaterThan", () => {
  expect(10).toBeGreaterThan(9);
});

test(".toBeGreaterThanOrEqual", () => {
  expect(10).toBeGreaterThanOrEqual(10);
});

test(".toBeLessThan", () => {
  expect(10).toBeLessThan(11);
});

test(".toBeLessThanOrEqual", () => {
  expect(10).toBeLessThanOrEqual(10);
});

test(".toBeCloseTo", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
