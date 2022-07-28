/*
* Embeds google maps in the right side of the footer. 
* https://app.asana.com/0/1201388388286192/1202661744292967
*/

window.addEventListener("load", (event) => {
    let embed = document.createElement("div");
    embed.setAttribute("class", "google-map-embed");
    
    let map_html = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7665.9244889140045!2d-83.14818567861346!3d41.23613011855624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883bc4d2e578876d%3A0x5310a268b7a9c72a!2sOld%20Fort%20High%20School!5e0!3m2!1sen!2sus!4v1658784055333!5m2!1sen!2sus" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    
    embed.innerHTML = map_html;
    embed.style.order = "4"; 
    embed.style.marginLeft = "20px";
    
    let footer = document.querySelector("#footer-f1 > div");
    footer.appendChild(embed);
});

