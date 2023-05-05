const spellChecker = function (sentence) {
  if (sentence.length === 0) {
    console.log("sentence cannot be empty");
    throw new Error("sentence cannot be empty");
  }
};

module.exports = spellChecker;

// if (typeof sentence !== "string") {
//   // the variable is not a string
// } else if (sentence === "") {
//   // the variable is an empty string
// } else {
//   // the variable is a non-empty string
// }
