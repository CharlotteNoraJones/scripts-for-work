
var oldOpen = XMLHttpRequest.prototype.open;
console.log(oldOpen);

XMLHttpRequest.prototype.open = function () {

    this.addEventListener('loadend', changeClassLink);

    this.addEventListener('readystatechange', (event) => {
        console.log(this.readyState);
    })

    oldOpen.apply(this, arguments);
}



function changeClassLink() {
    console.log("Greetings");
    document.querySelectorAll("#staff a.class-link").forEach((x) => {x.childNodes[0].innerHTML = "Class Link"})
}
