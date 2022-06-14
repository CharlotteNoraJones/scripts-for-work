
const delay = ms => new Promise(res => setTimeout(res, ms));


var oldOpen = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function () {
    this.addEventListener("loadend", changeClassLink())

    oldOpen.apply(this, arguments);
};

async function changeClassLink() {

    // This makes sure the code loads after the API call is totally completed. 
    await delay(250);

    document.querySelectorAll("#staff a.class-link").forEach((x) => { x.childNodes[0].innerHTML = "Class Link" });
}