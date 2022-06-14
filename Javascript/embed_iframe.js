/*
* Embeds the client's view tracker iframe in the footer. 
* https://app.asana.com/0/1201388388286192/1202318789444733
*/

window.addEventListener('load', (event) => {
    let client_embed_html = '<iframe src="https://www.seethestats.com/stats/19355/Pageviews_b99c598f5_ifr.html"' +
                            'style="width:180px;height:171px;border:none;" scrolling="no" frameborder="0">' +
                            '</iframe>';
    let iframe_div_name = 'view-tracker'
    let iframe_element = createElementFromHTML(client_embed_html, iframe_div_name)

    document.querySelector("#footer-f1 div.row div.footer-column-main").appendChild(iframe_element, iframe_div_name);

})

function createElementFromHTML(html_string, div_class_name) {
    let div = document.createElement('div');
    div.setAttribute('class', 'div_class_name')
    div.innerHTML = html_string.trim();
    return div;
}