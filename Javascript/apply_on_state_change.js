document.querySelector("#container > div > div > div.event-cal-content > div.event-cal-content-toolbar > div.toolbar-header.toolbar-header > div > div.header-title").innerHTML = "Calendar";

var oldOpen = XMLHttpRequest.prototype.open;
function onStateChange(event) {
    // code goes here
    change_event_title_interval = setInterval(function(){    
        let events_header = document.querySelector("#container > div > div > div.event-cal-content > div.event-cal-content-toolbar > div.toolbar-header.toolbar-header > div > div.header-title");
        if (events_header != null) {
            events_header.innerHTML = "Calendar";
            clearInterval(change_event_title_interval);
        }
        console.log("Hello");
    }, 10);
}
XMLHttpRequest.prototype.open = function () {
    this.addEventListener("loadend", onStateChange);

    oldOpen.apply(this, arguments);
};

