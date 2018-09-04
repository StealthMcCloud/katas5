// Katas1
// The first reverseStringFix failed as it only too the first word in the array o

function reverseString(string) {
    let newString = string.reverse();
    return newString;
}

function testReverseString() {
    let result = reverseStringFix("galaxy phones rock");
    console.log(result === "kcor senohp yxalag", {
        "function": "reverseString(Galaxy Phones Rock)",
        "expected": "kcoR senohP yxalaG",
        "result": result
    })
}
testReverseString();

function reverseStringFix(string) {
    let newString = string.split("").reverse().join("");
    return newString;
}

function testReverseStringFix() {
    let resultFix = reverseStringFix("galaxy phones rock")
    console.log(resultFix === "kcor senohp yxalag", {
        "function": "reverseStringFix(Galaxy Phones Rock)",
        "expected": "kcoR senohP yxalaG",
        "result": resultFix
    });
}
testReverseStringFix();


// Katas2
//The first reverseSentence function fails since the it is reversing all the letters instead of the words.  The reverseSentenceFix is then correctly seperating the words into seperate strings before combining them back together again.

function reverseSentence(sentence) {
    let newSentence = sentence.split("").reverse().join("");
    return newSentence;
}

function testReverseSentence() {
    let result = reverseSentence("Clint eating Chicken")
    console.assert(result === "Chicken eating Clint", {
        "function": "reverseSentence(Clint eating Chicken)",
        "expected": "Chicken eating Clint",
        "result": result
    });
}
testReverseSentence();

function reverseSentenceFix(sentence) {
    let newSentenceFix = sentence.split(" ").reverse().join(" ");
    return newSentenceFix;
}
function testReverseSentenceFix() {
    let resultFix = reverseSentenceFix("Clint eating Chicken")
    console.log(resultFix === "Chicken eating Clint", {
        "function": "reverseSentenceFix(Clint eating Chicken)",
        "expected": "Chicken eating Clint",
        "resultFix": resultFix
    })
}
testReverseSentenceFix();


// Katas3


// Katas4


// Katas5


// Katas6


// Katas7


// Katas8

