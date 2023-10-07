test("toThrow", () => {
  // not argument
  expect(() => {
    throw new Error("This is a error");
  }).toThrow();

  // use regex
  expect(() => {
    throw new Error("This is a error");
  }).toThrow(/error/);

  // use string
  expect(() => {
    throw new Error("This is a error");
  }).toThrow("error");

  // use object
  expect(() => {
    throw new Error("This is a error");
  }).toThrow(new Error("This is a error"));

  // use class
  expect(() => {
    throw new Error("This is a error");
  }).toThrow(Error);
});