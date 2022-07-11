/*
* Makes all external links open in a new tab.
* https://app.asana.com/0/1201388388286192/1202556449849111
*/

window.addEventListener("load", event => {
    makeExternalLinksOpenInNewTab();
});

var oldOpen = XMLHttpRequest.prototype.open;
function onStateChange(event) {
    change_event_title_interval = setInterval(function(){    
        makeExternalLinksOpenInNewTab();
    }, 10);
}

XMLHttpRequest.prototype.open = function () {
    this.addEventListener("loadend", onStateChange);

    oldOpen.apply(this, arguments);
};


function makeExternalLinksOpenInNewTab() {
    let links = document.querySelectorAll("a");
    let external_links = [...links].filter(checkExternalLink);

    external_links.forEach(link => {
        link.setAttribute("target", "_blank");
    });

}

function checkExternalLink(link) {
    // Takes in a "a" node, returns if it is an external link based on domain name. 
    let link_url = link.href;
    let current_domain = window.location.hostname;
    let link_is_external = !(link_url.includes(current_domain));
    return link_is_external;

}

// End external link code