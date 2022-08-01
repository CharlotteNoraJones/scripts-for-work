/*
* Adds text to the parallax section. 
* https://app.asana.com/0/1201388388286192/1202675494874888
*/

window.addEventListener("load", (event) => {
    let text = "In partnership with the community, the lowa-Grant School District will empower all students to reach their full potential as responsible individuals who strive for life-long learning to successfully compete in an ever-changing global society.";
    let text_node = document.createElement('h2');
    let parallax_container = document.querySelector("#view-container > div > div > div.parallax-container")
    let parralax_container_parent = parallax_container.parentNode;

    text_node.setAttribute("class", "parallax-text");
    text_node.innerHTML = text;
    parralax_container_parent.append(text_node);

});

// End parallax code