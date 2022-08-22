var inputField;

window.addEventListener("load", (event) => {
    inputField = document.getElementById("house-value");
    inputField.oninput = calculateTax;
})

function calculateTax() {
    
    let houseValue = inputField.value;

    let renovationsCostField = document.querySelector("#renovations-cost");
    let operatingCostField = document.querySelector("#operating-cost")
    let gymCostField = document.querySelector("#gym-cost");
    let total1Field = document.querySelector("#total-1-2");
    let total2Field = document.querySelector("#total-1-2-3");

    let renovationsCost = (0.264-0.206)*(houseValue/100)
    renovationsCostField.innerHTML = renovationsCost;

    let operatingCost = 0.07*(houseValue/100);
    operatingCostField.innerHTML = operatingCost;

    let gymCost = 0.059*(houseValue/100);
    gymCostField.innerHTML = gymCost;

    let total1 = renovationsCost + operatingCost;
    total1Field.innerHTML = total1;
    
    let total2 = renovationsCost + operatingCost + gymCost;
    total2Field.innerHTML = total2;
}