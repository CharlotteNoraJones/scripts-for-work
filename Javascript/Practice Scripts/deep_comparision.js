// Performs a deep comparision on any two objects. 

let object1 = { left: 1, right: 2 };
let object2 = { left: 4, right: 3 };
let object3 = { here: { is: "an" }, second_key: 2 };
let object3alt = { here: { is: "fe" }, second_key: 2 };
let object4 = { left: 1, right: 1, up: 1 };
let object5 = { left: object4, right: 1 }
let object6 = 5;
console.log("Result: " + deepEqual(object3, object3alt));


function deepEqual(a, b) {
    /* 
    * Deep comparision between two objects.
    * The objecs are equal if the have the same keys with the same values, 
    * the order of the keys does not matter. 
    * Comparison between keys and values is type-sensitive. 
    * This is a pure function.
    */

    if (!checkSameType(a, b)) {
        return false;
    }

    if (!checkBothObjects(a, b)) {
        return (a === b);
    }

    if (!checkObjectKeys(a, b)) {
        return false;
    }

    // Check if all values are the same
    // By this point, we know that all keys are the same. 
    a_keys = Object.keys(a);
    b_keys = Object.keys(b);

    values_equality = true;

    a_keys.forEach((key) => {
        if(!deepEqual(a[key], b[key])) {
            values_equality = false;
        }
    });

    return values_equality;
}

function checkSameType(a, b) {
    // Returns true if a and b are of the same type. 
    a_type = typeof a;
    b_type = typeof b;

    return a_type == b_type;

}

function checkBothObjects(a, b) {
    // Return true if both a and b are objects. 
    a_type = typeof a;
    b_type = typeof b;

    return ((a_type === 'object') && (b_type === 'object'));
}

function checkObjectKeys(a, b) {
    // Takes in two objects. Returns true if they have the same keys. 
    // The order of keys is not considered. 

    let keys_are_equal = true;

    a_keys = Object.keys(a);
    b_keys = Object.keys(b);

    a_keys.forEach((a_key) => {
        if (!(b_keys.includes(a_key))) {
            keys_are_equal = false;
        }
    });

    return keys_are_equal;
}