function openTab(evt, cityName) {

    if (!!evt) {
        sessionStorage.removeItem('cardName');
    }
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    document.getElementsByName(cityName)[0].className += " active";
    // evt.currentTarget.className += " active";
    sessionStorage.setItem('tabName', cityName);
}

tabcontent = document.getElementsByClassName("tabcontent");

for (i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

function currentTab() {
    var current = sessionStorage.getItem('tabName');
    var currentCard = sessionStorage.getItem('cardName');
    if (!!current) {
        openTab(null, sessionStorage.getItem('tabName'));
        if (!!currentCard) {
            openCard(null, sessionStorage.getItem('cardName'));
        }
    } else {
        openTab(null, 'Main');
        sessionStorage.removeItem('tabName');
        sessionStorage.removeItem('cardName');
    }


}

currentTab();

function openCard(eventt, cityName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
    sessionStorage.setItem('cardName', cityName);
}


$(function () {
    $('.minimized').click(function (event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img alt="" src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'margin-right': '-50%',
            'transform': 'translate(-50%, -50%)'
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});


function myFunctionFrs() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunctionSec() {
    document.getElementById("checkYourSelfDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
