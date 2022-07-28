/*
* Changes the class links in the staff section to say "Visit Teacher Webpage"
* https://app.asana.com/0/1201388388286192/1202669431886508
*/

window.addEventListener("load", (event) => {
    changeClassLink()
});

var oldOpen = XMLHttpRequest.prototype.open;
function onStateChange(event) {
    // code goes here
    change_event_title_interval = setInterval(function(){    
        if (checkForClassLink()) {
            changeClassLink()
            clearInterval(change_event_title_interval);
        }
    }, 10);
}
XMLHttpRequest.prototype.open = function () {
    this.addEventListener("loadend", onStateChange);

    oldOpen.apply(this, arguments);
};



function changeClassLink() {
    link_text = "Visit Teacher Webpage";
    class_links = document.querySelectorAll("a.class-link span");
    class_links.forEach(element => {
        element.innerHTML = link_text;
    });
}

function checkForClassLink() {
    // Returns true if .class-link is on the page, false otherwise. 
    class_link = document.querySelector(".class-link");
    return (class_link != null);
}