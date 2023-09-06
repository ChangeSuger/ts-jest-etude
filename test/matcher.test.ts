// Jest Matcher

// Common Matchers
// toBe
test("", () => {
  expect(1 + 2).toBe(3);
});

// toEqual
test("", () => {
  const data = {one: 1};
  (data as any)["two"] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

// not
test("", () => {
  expect(1 + 2).not.toBe(4);
});

// Truthy & Falsy
// toBeNull
test("", () => {
  expect(null).toBeNull();
});

// toBeUndefined
test("", () => {
  let a;
  expect(a).toBeUndefined();
});

// toBeDefined
test("", () => {
  let a = 1;
  expect(a).toBeDefined();
});

// toBeTruthy
test("", () => {
  expect(1).toBeTruthy();
});

// toBeFalsy
test("", () => {
  expect(0).toBeFalsy();
});

// Number
// toBeGreaterThan
test("", () => {
  expect(1).toBeGreaterThan(0);
});

// toBeGreaterThanOrEqual
test("", () => {
  expect(1).toBeGreaterThanOrEqual(1);
});

// toBeLessThan
test("", () => {
  expect(1).toBeLessThan(2);
});

// toBeLessThanOrEqual
test("", () => {
  expect(1).toBeLessThanOrEqual(1);
});

// toBeCloseTo
test("", () => {
  // expect(0.1 + 0.2).toBe(0.3); // This won't work because of rounding error
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

// String
// toMatch
test("", () => {
  expect("Hello World").toMatch(/Hello/);
});

// Array & Iterable
// toContain
test("", () => {
  expect([1, 2, 3]).toContain(1);
});

// Exception
// toThrow
test("", () => {
  expect(() => {
    throw new Error("error");
  }).toThrow();
  expect(() => {
    throw new Error("error");
  }).toThrow("error");
  expect(() => {
    throw new Error("error");
  }).toThrow(/error/);
});
