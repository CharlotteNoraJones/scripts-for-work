console.log(isEven(-75));

// Returns true if a number is even. Works for both positive and negative numbers. 
function isEven(num){

    if (num == 0) {
        return true;
    }
    else if (num == 1) {
        return false;
    }
    else {
        /* Without this check, entering a negative number will result in infinite recursion. 
        This check should be located outside of this function to make it faster, but the assignment calls
        for one function, and this implementation will choke on big numbers anyway. */
        if (num < 0) {
            num = num * -1;
        }

        return isEven(num - 2);
    }
}