/*
* Moves bottom_child above top_child
* https://app.asana.com/0/1201388388286192/1202475664074599
*/

window.addEventListener("load", (event) => {

    let top_child = document.querySelector("#footer-f1 > div > div.footer-column-last > a:nth-child(2)")
    let bottom_child = document.querySelector("#footer-f1 > div > div.footer-column-last > ul");

    top_child.prepend(bottom_child);

});

// End switching code. 