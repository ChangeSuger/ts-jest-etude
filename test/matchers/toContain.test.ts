test("toContain", () => {
  // Array
  expect([1, 2, 3, 4]).toContain(4);

  // String
  expect("Hello World").toContain("Hello");

  // Set
  expect(new Set([1, 2, 3, 4, 3, 2, 4])).toContain(4);
})