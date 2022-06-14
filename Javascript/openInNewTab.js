window.addEventListener("load", (event) => {
    // This code makes all links with the class "class-link" open in a new tab.
    // Made in for this ticket: https://app.asana.com/0/1201388388286192/1201540093794079
    links = document.querySelectorAll("a.class-link");
    links.forEach(function(link) {
        link.setAttribute("target", "_blank")
    });

});