

const doc_buttons = document.querySelectorAll(".hidden-button-section .doc-button");

let defualt_visibility = "inline-block";

doc_buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let parent_id = button.parentElement.id;
        

        let lang_links_sel = "#" + parent_id + " .language-link";
        let lang_links = document.querySelectorAll(lang_links_sel);

        lang_links.forEach(link => {
            toggle_visibility(link, defualt_visibility);
        });
    });
});

function toggle_visibility(element, defualt_visibility) {
    let current_visibility = element.style.display;
    if (current_visibility == defualt_visibility) {
        element.style.display = "none";
    } else {
        element.style.display = defualt_visibility;
    }
}