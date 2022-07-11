// START Document Ready
function docReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
// END of Document Ready

docReady(function () {
    var currentLocation = window.location.href;
    var currentPathName = window.location.pathname.split('/')[2];

    var parts = currentLocation.split('/');
    var lastSegment = parts.pop() || parts.pop();
    //var body = document.body;
    //body.classList.add(lastSegment);

    var pgUrl = currentLocation.split('/').reverse()[1];
    //body.classList.add(pgUrl);   

    var root = document.documentElement;
    root.className += currentPathName;
    root.className += ' ' + lastSegment;
    root.className += ' ' + pgUrl;


    setTimeout(function () {

        var schoolName = document.querySelector('#view-header .school-info h1').innerHTML.trim();
        schoolNameWords = schoolName.split(" ");
        schoolNameLength = schoolNameWords.length; 


        const schoolsFirstName = ['Spalding STEM Academy', 'Heritage Middle School', 'Meridian Middle School', 'Sawtooth Middle School', 'Star Middle School', 'Victory Middle School', 'Virtual School House', 'Meridian High School', 'Renaissance High School', 'Rebound School of Opportunity', 'Summerwind STEM Academy', 'Crossroads Middle School', 'Pathways Middle School', 'Galileo STEM Academy', 'Owyhee High School', 'Hillsdale Elementary School', 'McMillan Elementary School', 'Pioneer School of the Arts'];

        const result = schoolsFirstName.map(e => e.toLocaleLowerCase()).includes(schoolName.toLocaleLowerCase());


        $('.custom-footer .top-logo .school-name').html(function (i, t) {
            if (schoolNameLength == 2) {
                var hhNumber = 1;
            }
             
            else if (result) {
                var hhNumber = 1; 
            }
            else if (schoolName == 'Lewis and Clark Middle School') {
                var hhNumber = 3; 
            }
            else {
                var hhNumber = 2;
            }
             
            var words = schoolName.split(/\s+/);
            return "<span>" + words.slice(0, hhNumber).join(" ") + "</span> " + words.slice(hhNumber).join(" ");
        });



        $('.custom-footer .footer-links').html('<a href="https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa" target="_blank">COPPA Compliance</a><a href="https://survey.k12insight.com/survey.aspx?k=RRsVYRRsQUWYsPsPsP&amp;lang=0&amp;data=" target="_blank">Public Records Request</a><a href="https://idahoschools.org/" target="_blank">State Report Card</a><a href="/o/wasd/page/title-ix" target="_blank">Title IX</a><a href="/o/wasd/page/web-accessibility-statement" target="_blank">Web Accessibility Statement</a>');


        /*
        * The client has requested that the footer logo be the district logo at each org. Since
        * it is set to that by default, I am commenting out this code.
        * https://app.asana.com/0/1201388388286192/1202563905855344
        */

        //var schoolLogoSrc = document.querySelector('#view-header .logo img').src;
        //document.querySelector('.custom-footer .top-logo .image img').src = schoolLogoSrc;




        // add school name color variable to body
        let schoolInfo = document.querySelector('#view-header .left a');
        var rules = schoolInfo.getAttribute("style");
        document.querySelector("body").setAttribute("style", rules);

    }, 500);

});