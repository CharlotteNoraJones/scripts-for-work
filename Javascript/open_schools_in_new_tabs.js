/*
* Forces the schools links in the Schools menu and footer to open in new tabs.
* https://app.asana.com/0/1201388388286192/1202308202301901
*/
window.addEventListener("load", (event) => {

    // Sets target for Schools Menu
    document.getElementById("schoolsbutton").addEventListener("click", (event) => {
        document.querySelectorAll("#schoolsmenu a").forEach(function(element) {
            element.setAttribute('target', '_blank');
        });
    });

    // Sets target for the footer
    document.querySelectorAll("#footer-f1 div.row div:nth-child(2) a").forEach(function(element) {
        element.setAttribute('target', '_blank');
    });
});

