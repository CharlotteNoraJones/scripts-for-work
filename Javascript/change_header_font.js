/*
* Changes the font of the name of the school and tag line. 
* https://app.asana.com/0/1201388388286192/1202708241617974
*/

window.addEventListener("load", (event) => {
    $('head').append("<link rel='preconnect' href='https://fonts.googleapis.com'>" +
        "<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>" +
        "<link href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap' rel='stylesheet'>");

    school_name = document.querySelector(".school-info .name");
    school_name.style.fontFamily = "'Roboto Slab', serif";
})

