testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(testArray);
reverseArrayInPlace(testArray);
console.log(testArray);


// Outputs a new array that is the reverse of the inputted array. It will not effect the original array. 
function reverseArray(oldArray){
    newArray = [];
    for (i = oldArray.length - 1; i >= 0; i--) {
        newArray.push(oldArray[i]);
    }
    return newArray
}

// Reverses the inputted array. 
function reverseArrayInPlace(oldArray){
    halfLength = Math.floor(oldArray.length / 2);
    for (i = 0; i < halfLength/2; i++){
        // We will swap the elements at these locations. 
        firstElementIndex = i;
        secondElementIndex = oldArray.length - i - 1;

        // Swapping elements
        temp = oldArray[firstElementIndex];
        oldArray[firstElementIndex] = oldArray[secondElementIndex];
        oldArray[secondElementIndex] = temp;
    }


}

/* I also tried a recursive solution for reveseArrayinPlace. Recursive solution to reverse in 
place doesnt work well. Slicing an array creates a new array.  */