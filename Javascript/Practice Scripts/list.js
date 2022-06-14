let list = arrayToList([1, 2, 3])

console.log(JSON.stringify(list))

console.log(listToArray(list));

let newList = prepend(5, list)
console.log(JSON.stringify(newList));

console.log(nth(1, newList))

// Converts an array into a list. These lists store a single value and a child list.
function arrayToList(arrayToConvert) {
    if (arrayToConvert.length == 1) { // Checks if we're at the lowest level. 
        return { value: arrayToConvert[0], childList: null };
    } else {
        return { value: arrayToConvert[0], childList: arrayToList(arrayToConvert.slice(1)) };
    }
}

// Converts a list into an Array
function listToArray(listToConvert) {
    if (listToConvert.childList == null) { //Checks if we're at the lowest level
        return [listToConvert.value];
    } else {
        return [listToConvert.value].concat(listToArray(listToConvert.childList));
    }
}

/* Adds newElement to the front of list.
This creates a whole new list, rather than mutating the old one. */
function prepend(newElement, oldlist){
    return {value: newElement, childList: deepCopyList(oldlist)};
}

// Creates a copy the inputted list
function deepCopyList(oldList) {
    if (oldList.childList == null) {
        return {value: oldList.value, childList: null};
    } else {
        return {value: oldList.value, childList: deepCopyList(oldList.childList)};
    }
}

// Returns the element at index. Assumes index is less than the total length of the list. 
// This is currently broken
function nth(index, list){
    if (index == 0) {
        return list.value;
    } else {
        return nth(index--, list.childList);
    }
}