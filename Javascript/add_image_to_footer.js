/*
* Adds images to the last column of the footer. 
* https://app.asana.com/0/1201388388286192/1202574898506815
*/

let footer_images = document.createElement("div");
let acsi_link = "https://5il.co/1dswu";
let wacs_logo = "https://5il.co/1dswv";

last_footer_column = document.querySelector("#footer-f1 div.footer-column-last");
column_header = last_footer_column.firstChild;
column_header.before(footer_images);

footer_images.outerHTML = ('<div class="org-links">' +
    '<img src="' + acsi_link + '" alt="ACSI: Association of Christian Schools International">' +
    '<img src="'+ wacs_logo + '" alt="WASC Accrediting Commision for Schools">' +
    '</div>');
