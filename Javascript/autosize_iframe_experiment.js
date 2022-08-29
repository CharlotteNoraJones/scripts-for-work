/*
function resizeIframe(obj) {
obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}
*/


var iframe_embed;

window.addEventListener("load", (event) => {

    // Hides the header and footer of a Thrillshare page. 
    iframe_embed = document.querySelector(".homepage-youtube");

    let iframe_contents = $(".homepage-youtube").contents()
    iframe_contents.find("header").attr("style", "display: none");
    iframe_contents.find("nav").attr("style", "display: none");
    iframe_contents.find("#view-footer").attr("style", "display: none");

    // Changes the height of the iframe to the height of the content body. 
    resizeIframe(iframe_embed);
    
});

window.addEventListener('resize', function (event) {
    // iframeVideo[0].style.height = iframeVideo[0].contentWindow.document.documentElement.scrollHeight + 'px';
    resizeIframe(iframe_embed);
});

function resizeIframe(frame) {
    // Sets the height of the iframe to the height of the embedded contents body. 
    frame_content = frame.contentWindow;
    frame_body = frame_content.document.querySelector("body");
    frame_body_style = window.getComputedStyle(frame_body, null);
    frame_body_height = frame_body_style.height;
    console.log("Hello" + frame_body_height);

    frame.style.height = frame_body_height;
}