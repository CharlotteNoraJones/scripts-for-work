// Performs a deep comparision on any two objects. 

let object1 = {left: 1, right: 1};
let object2 = {left: 4, right: 3};
let object3 = {here: {is: "an"}, object: 2};
let object4 = {left: 1, right: 1, up: 1};
let object5 = {left: object4, right: 1}
let object6 = 5;
console.log(deepEqual(object6, 6));


/* 
* Deep comparision between two objects.
* The objecs are equal if the have the same keys with the same value, 
* the order of the keys does not matter.  
*/
function deepEqual(a, b) {

    a_type = typeof a;
    b_type = typeof b;

    // Check if objects are both of the same type
    if (a_type != b_type) {
        return false;
    }

    // If they are not objects, compare value. 
    both_are_not_objects = !((a_type === 'object') && (b_type === 'object'));
    if (both_are_not_objects) {
        return a === b;
    }

    // If they are both objects check if they have the same amount of keys. 
    

    // Check if all the keys are titled the same. 

    // Compare the value of each key. 

    return true;
}


// Note to self: Remember that ordering of keys in list is not reliable. 