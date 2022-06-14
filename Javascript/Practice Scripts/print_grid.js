/* Prints a grid of columns x rows, with alternating firstSymbol and secondSymbol */

let columns = 8;
let rows = 8;
let firstSymbol = ' ';
let secondSymbol = '#';
let grid = '';

// firstsymbol is always initially selected.
let selectedSymbol = firstSymbol;

for (let rowCount = 0; rowCount < rows; rowCount++) {
    for (let columnCount = 0; columnCount < columns; columnCount++) {
        grid += selectedSymbol;
        selectedSymbol = (selectedSymbol == firstSymbol) ? secondSymbol : firstSymbol;
    }
    grid += '\n';
    selectedSymbol = (selectedSymbol == firstSymbol) ? secondSymbol : firstSymbol;
}


console.log(grid);