const spellChecker = function (sentence) {
  if (typeof sentence !== "string") {
    console.log("sentence must be a string");
    throw new Error("sentence must be a string");
  } else if (sentence === "") {
    console.log("sentence cannot be empty");
    throw new Error("sentence cannot be empty");
  }

  const regex = /[\.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  const hasPunctuation = regex.test(sentence);

  if (hasPunctuation) {
    console.log("sentence cannot contain punctuation");
    throw new Error("sentence cannot contain punctuation");
  }
};

module.exports = spellChecker;

module.exports = spellChecker;

// if (typeof sentence !== "string") {
//   // the variable is not a string
// } else if (sentence === "") {
//   // the variable is an empty string
// } else {
//   // the variable is a non-empty string
// }
