/*
* Disables the email links in the staff section. 
* https://app.asana.com/0/1201388388286192/1202776852967691
*/


window.addEventListener("load", (event) => {
    deactive_emails()
});

var oldOpen = XMLHttpRequest.prototype.open;
function onStateChange(event) {
    // code goes here
    change_event_title_interval = setInterval(function(){    
        if (check_for_emails()) {
            deactive_emails()
            clearInterval(change_event_title_interval);
        }
    }, 10);
}
XMLHttpRequest.prototype.open = function () {
    this.addEventListener("loadend", onStateChange);

    oldOpen.apply(this, arguments);
};

function deactive_emails() {
    let emails = document.querySelectorAll(".staff-info a.contact-button");
    replace_with_p(emails);
}

function replace_with_p(elements) {
    //Takes in a nodelist, and replaces each with a p element with the same innterHTML
    elements.forEach(element => {
        let element_parent = element.parentNode;
        let element_text = element.innerHTML;
        let element_p = document.createElement("p");
        element_p.innerHTML = element_text;

        element_parent.removeChild(element);
        element_parent.appendChild(element_p);
    });
};

function check_for_emails() {
    // Returns true if .class-link is on the page, false otherwise. 
    class_link = document.querySelector(".staff-info a.contact-button");
    return (class_link != null);
}

// End staff email code 