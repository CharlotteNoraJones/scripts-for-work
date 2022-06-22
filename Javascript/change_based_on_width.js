/*
* Changes the name of the menu to Calendar when not in mobile view
* https://app.asana.com/0/1201388388286192/1202482587040129
*/

$(document).ready(check_and_rename);

$(window).resize(check_and_rename);

// Changes the text of the main menu t Calendars if the window width < maxWidth
function check_and_rename() {
    let windowWidth = $(window).width();
    let maxWidth = 1024; // In pixels. 

    if (windowWidth < maxWidth) {
        $('#menubutton .menu-field').text('  Menu');
        $('.m4-menu--mobile-wrapper .m4--drawer-element:first-child #menu-button-explore-header span').text('Calendar');

    }

}

// End menu name change code. 