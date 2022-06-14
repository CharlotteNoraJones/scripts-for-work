/* 
* Adds a Printable Calendar button to the Events section. 
* https://app.asana.com/0/1201388388286192/1202440345956272
*/
window.addEventListener("load", (event) => {
    $('#events-e4 > div > div.see-all-container.see-all-top.light').append(
        "<a href='https://core-docs.s3.amazonaws.com/documents/asset/uploaded_file/1852704/2022-2023_School_Calendar.pdf' target='_blank' class='calendar-button'>" +
        "<p> Printable Calendar </p>" +
        "</a>"
    )
});
/* End button code. */