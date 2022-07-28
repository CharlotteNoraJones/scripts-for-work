/*
* Adds an image as a gallery overlay. 
* https://app.asana.com/0/1201388388286192/1202676573106971
*/

window.addEventListener("load", (event) => {
    let image = document.createElement("figure");
    image.setAttribute("class", "gallery-icon");
    image.innerHTML = "<img class='best-school-img' src='https://5il.co/1ezsu' alt='Best High Schools U.S. News & World Report National 2022'>";

    let gallery = document.querySelector("#g3 > div.slide")

    gallery.append(image);
});

// Ends Gallery Overlay Code. 