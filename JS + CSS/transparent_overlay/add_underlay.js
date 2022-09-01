let underlay_url = "https://5il.co/1hfrp";
let underlay_html = '<img src="' + underlay_url + '" alt="School logo">';
let underlay_container = document.createElement("div");
let gallery = document.querySelector("#g4");

underlay_container.setAttribute("class", "underlay-container");
underlay_container.innerHTML = underlay_html;

gallery.appendChild(underlay_container);