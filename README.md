User Story
Mega Soft Weird - Produce Word Processor
Requirements - Spellchecker

String may contain single word or short string/sentence
no punctuation or commas
User will supply a string
String will be checked against the dictionary/word bank
incorrectly spelled words should be highlighted with 'tilder' '~' and returned in original place
casing should be maintained in the output.

**const spellChecker**
Error - empty string " No input supplied "
string.split(" ")
**input string to lowercase?**

return string.join(" ")

for prototype
dictionary / word bank with

const wordBank = ["I", "must", "check", "my", "spelling", "for", "each", "word"]
**Consider wordBank to be all lowercase in order to accurately check words**

| input           | output              |
| --------------- | ------------------- |
| " "             | "No input supplied" |
| "word"          | "word"              |
| "word spelling" | "word spelling"     |
| "pleaze"        | "~pleaze~"          |
| "pleaze check"  | "~pleaze~ check"    |
| "pleaze rite"   | "~pleaze~ ~rite~"   |
| "WorD"          | "WorD"              |
| "WORD"          | "WORD"              |
