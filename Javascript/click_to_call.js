/*
* Adds click to call to the phone number in the footer. 
* https://app.asana.com/0/1201388388286192/1202625975136563
*/

window.addEventListener("load", (event) => {
    $("#footer-f1 > div.row > div.footer-column-main > p > span:nth-child(4)").wrap('<a href="tel:+1-805-488-3588"></a>');
});