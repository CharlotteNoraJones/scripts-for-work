/*
* Swaps the position of the gallery and ticker. 
* https://app.asana.com/0/1201388388286192/1202690682415888
*/

window.addEventListener("load", (event) => {
    let gallery = document.querySelector("#cms-gallery");
    let tickerNode = document.querySelector("#home > div:nth-child(2)");

    swap(gallery, tickerNode);
    
});

function swap(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
}
