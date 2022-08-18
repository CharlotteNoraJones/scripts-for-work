/*
* Adds a link to the header of the district website. 
* https://app.asana.com/0/1201388388286192/1202786558834549
*/

window.addEventListener("load", (event) => {
    let header_menu = document.querySelector("#h2 > div.header-container > div.right > div.right-menu-items");
    let header_menu_mobile = document.querySelector("#h2 > div.header-container > div.right-mobile");

    let new_link = document.createElement("div");
    let new_link_mobile = document.createElement("div");

    let link_name = "Food Service Payments";
    let link_url = "https://www.montevideoschools.org/page/payment-information";
    let link_html = '<a class="header-link" href="' + link_url + '"><h2>' + link_name + '</h2></a>';
    
    new_link.innerHTML = link_html;
    new_link_mobile.innerHTML = link_html;

    header_menu.insertBefore(new_link, header_menu.firstChild);
    header_menu_mobile.insertBefore(new_link_mobile, header_menu_mobile.firstChild);
});

