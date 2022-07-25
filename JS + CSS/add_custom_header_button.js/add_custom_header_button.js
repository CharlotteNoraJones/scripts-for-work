window.addEventListener("load", (event) => {
    let donate_container = document.createElement("div");

    let donate_button = "<a href='https://secure.givelively.org/donate/distinctive-schools' target='_blank'>" +
        "<span class='donate-button'>Donate</span>" +
        "</a>";

    let right_menu = document.querySelector("#h1 > div > div.right > div.right-left-menu");

    donate_container.setAttribute("class", "donate");
    donate_container.innerHTML = donate_button;

    right_menu.prepend(donate_container);
});