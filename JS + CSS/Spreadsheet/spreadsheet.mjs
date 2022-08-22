class Spreadsheet {
    #table; 
    #defaultValue = "0";

    constructor(rows, columns) {
        /*
        * The spreadsheet is represented as a 2d array [row][column]
        * Each cell is an object. 
        */

        this.#table = [];
        let newColumn = [];
        let newCell = {
            contents:this.#defaultValue,
            isUserInput:false,  //Determines if the cell is an input field. 
        };

        for (let x = 0; x < rows; x++) {
            newColumn = []
            for (let y = 0; y < columns; y++) {

                newColumn.push(newCell);
            }
            this.#table.push(newColumn);
        }
    }

    get table() {
        return this.#table;
    }

    assignValue(newValue, coordinates) {
        // coordinates is assumed to be an array with a length of 2. 
        row = coordinates[0];
        column = coordinates[1];
        table[row][column].contents = newValue;
    }

    enableInput(coordinates) {
        row = coordinates[0];
        column = coordinates[1];
    }

    buildHTMLSpreadsheet() {
        // Returns a string of html for the spreadsheet
        let tableHTML = "<table class='spreadsheet-table'>";
        this.#table.forEach(row => {
            tableHTML += "<tr>";

            row.forEach(cell => {
                
                if (cell.isUserInput) {
                    tableHTML += "<input><td>" + cell.contents + "</td></input>";
                } else {
                    tableHTML += "<td>" + cell.contents + "</td>";
                }
            });

            tableHTML += "</tr>";
        });

        tableHTML += "</table>";
        return tableHTML;
    }
}

export default Spreadsheet;