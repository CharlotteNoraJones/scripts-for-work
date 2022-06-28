/*
* Moves half of the school menus in the second footer column to the third column. 
* https://app.asana.com/0/1201388388286192/1202429000473080
*/

window.addEventListener("load", (event) => {
    let second_column_list = document.querySelector("#footer-f1 div div:nth-child(2) ul");
    let third_column_list = document.querySelector("#footer-f1 div div:nth-child(3) ul");

    schools_amount = second_column_list.childElementCount;
    half_schools_amount = parseInt(schools_amount / 2);

    latter_half_selector = "#footer-f1 div div:nth-child(2) ul li:nth-child(n+" + (half_schools_amount + 2) + ")";
    let schools_to_move = document.querySelectorAll(latter_half_selector);

    schools_to_move.forEach((school) => {
        third_column_list.append(school);
    });
});

