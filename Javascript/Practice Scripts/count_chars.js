console.log(countB("BBBBCCCSeeeee"));

// Returns the amount of charToCount in checkText
function countChar (checkText, charToCount) {
    let charNum = 0;

    for (let count = 0; count < checkText.length; count++) {
        if (checkText[count] == charToCount) {
            charNum++;
        }
    }
    return charNum;
}

// Counts how many times B (case sensitive) appears in a string.
function countB(checkText) {
    return countChar(checkText, "B")
}