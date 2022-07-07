/*
* Adds a link to the "Our Legacy" section
* https://app.asana.com/0/1201388388286192/1202562702132274
*/

window.addEventListener("load", (event) => {
    let spotlight_header = document.querySelector("#SL1 > div.see-all-container.see-all-top.bold");

    spotlight_header.appendChild(makeLink())

});

function makeLink() {
    let new_link = document.createElement("a");
    new_link.setAttribute("href", "/o/athletics/page/our-legacy")
    new_link.setAttribute("class", "stats-link")
    new_link.innerHTML = "See Our Legacy";
    return new_link;
};
