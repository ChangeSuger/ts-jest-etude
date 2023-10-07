// .not
test(".not", () => {
  expect(1).not.toBe(2);
});

// .resolves
test(".resolves", async() => {
  await expect(Promise.resolve(1)).resolves.toBe(1);
  await expect(Promise.resolve(1)).resolves.not.toBe(2);
});


// .rejects
test(".rejects", async() => {
  await expect(Promise.reject(new Error("This is a error")))
    .rejects.toThrow("This is a error");
});
