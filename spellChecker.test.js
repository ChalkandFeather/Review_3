const spellChecker = require("./spellChecker");

test("should throw error if input sentence is empty", () => {
  expect(() => spellChecker("")).toThrowError("sentence cannot be empty");
});
