/*
* Rearranges the items in the language menu. 
* https://app.asana.com/0/1201388388286192/1202503706931469
*/

window.addEventListener("load", (event) => {

    document.querySelector("#languagebutton").addEventListener("click", (event) => {
        let language_menu = document.querySelector("#languagesmenu > ul");
        let arabic = document.querySelector("#languagesmenu > ul > li:nth-child(2)");
        let portuguese = document.querySelector("#languagesmenu > ul > li:nth-child(4)");
        let spanish = document.querySelector("#languagesmenu > ul > li:nth-child(5)");

        language_menu.insertBefore(spanish, arabic);
        language_menu.insertBefore(portuguese, arabic);

    });

});


