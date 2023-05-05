const spellChecker = require("./spellChecker");

// test("should throw error if input not a string", () => {
//   expect(() => spellChecker("sentence must be a string")).toThrowError(
//     "sentence must be a string"
//   );
// });

test("should throw error if input sentence is empty", () => {
  expect(() => spellChecker("")).toThrowError("sentence cannot be empty");
});

test("should throw error if input contains punctuation", () => {
  expect(() => spellChecker("!*'")).toThrowError(
    "sentence cannot contain punctuation"
  );
});
