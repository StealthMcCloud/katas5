numberArray = [6, 2, 7, 3, 99, 54, 12, 8, 19, 65];

// Katas1
// These first one doesn't pass due to the code provided doesn't have the correct pronuncuation in it.  The second one works correctly as there is correct pronunciation in it.
function reverseString(string) {
    let newString = string.split().reverse().join();
    return newString;
}

function testReverseString() {
    let result = reverseString("galaxy phones rock");
    console.assert(result === "kcor senohp yxalag", {
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
// The first one failed due to trying to multiple the numberArray after it is being told to get the lowest number which gives you 4.  The second one works due to negation of the multiplication.
function lowestNumber() {
    let lowNumber = (Math.min(...numberArray) * 2);
    return lowNumber;
}

function lowNumberChecker() {
    let result = lowestNumber(numberArray)
    console.assert(result === 2, {
        "funtion": "lowestNumber(numberArray)",
        "expected": "2",
        "result": result
    })
}
lowNumberChecker();

function lowestNumberFix() {
    let lowNumberfix = (Math.min(...numberArray));
    return lowNumberfix;
}

function lowNumberCheckerFix() {
    let result = lowestNumberFix(numberArray)
    console.log(result === 2, {
        "funtion": "lowestNumber(numberArray)",
        "expected": "2",
        "result": result
    })
}
lowNumberCheckerFix();

// Katas4
function highestNumber() {
    let highNumber = (Math.max(...numberArray) % 3);
    return highNumber;
}

function highNumberChecker() {
    let result = highestNumber(numberArray)
    console.assert(result === 99, {
        "funtion": "highestNumber(numberArray)",
        "expected": "99",
        "result": result
    })
}
highNumberChecker();

function highestNumberFix() {
    let highNumberfix = (Math.max(...numberArray));
    return highNumberfix;
}

function highNumberCheckerFix() {
    let result = highestNumberFix(numberArray)
    console.log(result === 99, {
        "funtion": "highestNumber(numberArray)",
        "expected": "99",
        "result": result
    })
}
highNumberCheckerFix();

// Katas5
let x = 4
let y = 3
function remainder() {
    let result = x / y;
    console.assert(result >= 2, {
        "funtion": "remainder()",
        "expected": "1",
        "result": result
    })
}
remainder();

function remainderFix() {
    let resultFix = x % y;
    console.log(resultFix >= 1, {
        "funtion": "remainderFix()",
        "expected": "1",
        "result": resultFix
})
}
remainderFix();

// Katas6
let distinctValuesArray = [1, 3, 5, 3, 7, 3, 1, 1, 5]
function distinctArrayCheck() {
    let uniqueValues = distinctValuesArray.filter;
    console.assert(uniqueValues === 1, 3, 5, 7, {
        "funtion": "distinctArrayCheck()",
        "expected": "1, 3, 5, 7",
        "result": uniqueValues

    })}
distinctArrayCheck();

function distinctArrayCheckFix() {
    let uniqueValuesFix = [...new Set(distinctValuesArray)];
    console.assert(uniqueValuesFix === 1, 3, 5, 7, {
        "funtion": "distinctArrayCheckFix()",
        "expected": "1, 3, 5, 7",
        "result": uniqueValuesFix
    })
}
distinctArrayCheckFix();
// Katas7


// Katas8

