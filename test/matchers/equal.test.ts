// .toBe
test(".toBe", () => {
  expect(1).toBe(1);
  expect("Hello World").toBe("Hello World");
});

// .toEqual
test(".toEqual", () => {
  expect({ foo: "bar" }).toEqual({ foo: "bar" });
  expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
});