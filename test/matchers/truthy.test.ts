test(".toBeNull", () => {
  expect(null).toBeNull();
});

test(".toBeUndefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test(".toBeDefined", () => {
  let a = 1;
  expect(a).toBeDefined();
});

test(".toBeTruthy", () => {
  expect(true).toBeTruthy();
});

test(".toBeFalsy", () => {
  expect("").toBeFalsy();
  expect(0).toBeFalsy();
  expect(undefined).toBeFalsy();
});