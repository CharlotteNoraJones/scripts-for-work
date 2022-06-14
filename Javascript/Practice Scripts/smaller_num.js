console.log(smallerNum(7, 5));

// returns the smaller of num1 and num2
function smallerNum (num1, num2) {
    numToReturn = num2
    if (num1 < num2) {
        numToReturn = num1;
    }

    return numToReturn;
}