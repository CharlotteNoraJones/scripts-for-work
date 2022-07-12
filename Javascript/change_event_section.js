window.addEventListener("load", (event) => {
    changeEventSections();
});

window.addEventListener("scroll", (event) => {
    changeEventSections();
});

function changeEventSections() {
    let upper_section_link = document.querySelectorAll("#events-e1 > div.see-all-container.see-all-top.light > a")[0];
    let district_events_path = "/events?section_ids=186996";

    let lower_section_header = document.querySelectorAll("#events-e1 > div.see-all-container.see-all-top.light > div.header-slot-container > h2")[1];
    let lower_section_link = document.querySelectorAll("#events-e1 > div.see-all-container.see-all-top.light > a")[1];
    let mcusd_athletics_path = "/events?section_ids=212756";

    upper_section_link.setAttribute("href", district_events_path);
    lower_section_header.innerHTML = "MCUSD Athletics";
    lower_section_link.setAttribute("href", mcusd_athletics_path);
}