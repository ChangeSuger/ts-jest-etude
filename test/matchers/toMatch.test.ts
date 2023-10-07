test("toMatch", () => {
  // use regex
  expect("Hello World").toMatch(/Hello/);

  // use string
  expect("Hello World").toMatch("Hello");
})