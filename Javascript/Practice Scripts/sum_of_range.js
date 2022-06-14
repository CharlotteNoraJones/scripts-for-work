console.log(range(2, -10));

/* Returns an array of every number between start and end, start and end included. 
step is an optional parameter that changes the amount by which the range increments. It is set to 1 by default. 
Assumes that start, and, and step are all integers. */
function range(start, end, step = 1) {

    // Guard Clause. Step = 0 results in an infinite loop. 
    if (step == 0) {
        return "Step cannot be 0. This results in an infinite loop. "
    }

    // Guard Clause. No point in running anything if there is no range. 
    if (start == end) {
        return [start];
    }

    rangeValues = [];

    // The rest of the function assumes start < end. 
    if (start > end) {
        // Swaps start and end. 
        start = start ^ end;
        end = start ^ end;
        start = start ^ end;
    }

    // Calculates the range. 
    if (step >= 1) {
        for (let i = start; i <= end; i += step) {
            rangeValues.push(i);
        }
    } else if (step <= -1) {
        for (let i = end; i >= start; i += step) {
            rangeValues.push(i);
        }
    }

    return rangeValues;

}

// Returns the sum of everything in the array numArray
function sum(numArray) {
    total = 0;
    for (let num of numArray) {
        total += num;
    }
    return total;
}