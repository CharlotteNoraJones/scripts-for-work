// Performs a deep comparision on any two objects. 

let object1 = {left: 1, right: 2};
let object2 = {left: 4, right: 3};
let object3 = {here: {is: "an"}, object: 2};
let object4 = {left: 1, right: 1, up: 1};
let object5 = {left: object4, right: 1}
let object6 = 5;
console.log("Result: " + deepEqual(object1, object2));


/* 
* Deep comparision between two objects.
* The objecs are equal if the have the same keys with the same value, 
* the order of the keys does not matter. 
* Comparison between keys and values type-sensitive. 
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
    a_keys = Object.keys(a);
    b_keys = Object.keys(b);
    if (a_keys.length != b_keys.length) {
        return false;
    }

    // Check if all the keys are titled the same. 
    a_keys.forEach((x, i) => {
        if (!(b_keys.includes(x))) {
            return false;
        }
    })
    // Compare the value of each key. 
    // By this point, we know that each object has the same keys. 
    a_keys.forEach((x, i) => {
        console.log(a[x]);
        console.log(b[x]);
        if (!(deepEqual(a[x], b[x]))) {
            console.log("Hello")
            return false;
        }
    });

    return true;
}


// Note to self: Remember that ordering of keys in list is not reliable. 