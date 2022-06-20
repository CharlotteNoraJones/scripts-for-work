// Performs a deep comparision on any two objects. 

let object1 = {left: 1, right: 1};
let object2 = {left: 4, right: 3};
let object3 = {here: {is: "an"}, object: 2};
let object4 = {left: 1, right: 1, up: 1};
let object5 = {left: object4, right: 1}
let object6 = 5;
console.log(deepEqual(object6, object6));


// Deep comparision between two items of any type, including objects. 
function deepEqual(item1, item2) {

    // Check if objects are both of the same type

    // If they are not objects, compare value. 

    // If they are both objects check if they have the same amount of keys. 

    // If they are both objects with the same amount of keys, compare each key. 

}
