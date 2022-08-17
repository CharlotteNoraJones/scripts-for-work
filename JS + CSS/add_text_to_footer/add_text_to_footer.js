/*
* Addes text to the last column of the footer. 
* https://app.asana.com/0/1201388388286192/1202780473298081
*/


window.addEventListener("load", (event) => {
    let text = document.createElement("div");
    text.innerHTML = '<div><p><span>Title IX Notice of Nondiscrimination:</span></p><p>The Siuslaw School District does not discriminate on the basis of race, color, sex, marital status, religion, national origin, age, sexual orientation, or disability in its programs and activities and provides equal access to the Boy Scouts and other designated youth groups. For inquiries regarding the non-discrimination policies:</p><p>Lisa Utz<br>Special Programs Director,<br>Siuslaw School District 97J<br>541-997-5456</p><p><a href="mailto:lutz@siuslaw.k12.or.us" target="_blank" type="link" rel="noopener noreferrer nofollow"><span><span>lutz@siuslaw.k12.or.us</span></span></a></p><p><a href="https://www.siuslaw.k12.or.us/o/siuslaw-school-district/page/title-ix" target="_blank" type="url" rel="noopener noreferrer nofollow">Siuslaw Title IX page</a></p><p><a href="https://www.ed.gov/about/offices/list/ocr/docs/nondisc.html" target="_blank" type="url" rel="noopener noreferrer nofollow">Click here for further information on notice of non-discrimination</a></p><p>for the address and phone number of the office that serves your area, or call 1-800-421-3481</p></div>';
    let last_column = document.querySelector("#footer-f1 > div.row > div.footer-column-last");

    last_column.appendChild(text);

});
