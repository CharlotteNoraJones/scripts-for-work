/*
* Changes the title of the Events page and the "See All Events button" on
* the homepage to "See Calendar"
* https://app.asana.com/0/1201388388286192/1202476593935955
*/

window.addEventListener("load", event => {
    let path = window.location.pathname;
    if (path == '/o/bhs') {
        document.querySelector("#events-e4 > div > div.see-all-container.see-all-top.light > a").innerHTML = "See Calendar";
    }

    if (path.includes("events")) {
        document.querySelector("#container > div > div > div.event-cal-content > div.event-cal-content-toolbar > div.toolbar-header.toolbar-header > div > div.header-title").innerHTML = "Calendar";
        buttons = document.querySelectorAll("button");
        buttons.forEach((button, i) => {
            button.addEventListener("click", (event) => {
                wait_and_change_events();
            });
        });
    }
});

var oldOpen = XMLHttpRequest.prototype.open;
function onStateChange(event) {
    // code goes here
    wait_and_change_events();
}

XMLHttpRequest.prototype.open = function () {
    this.addEventListener("loadend", onStateChange);

    oldOpen.apply(this, arguments);
};

function wait_and_change_events() {
    change_event_title_interval = setInterval(function(){    
        let events_header = document.querySelector("#container > div > div > div.event-cal-content > div.event-cal-content-toolbar > div.toolbar-header.toolbar-header > div > div.header-title");
        if (events_header != null) {
            events_header.innerHTML = "Calendar";
            clearInterval(change_event_title_interval);
        }
    }, 10);

}