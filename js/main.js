$(document).ready(function () {
    $('#navbar-dropdown').prettyDropdown({
        selectedMarker: "<img class='arrow-town' src='./img/arrow-up.png'>"
    });
    const menu = document.getElementById("mobilemnu"),
        open = document.getElementById("open"),
        close = document.getElementById("close");
    document.getElementById("open").onclick = function () {
        menu.className += ' open';
        open.className += ' open';
        close.className += ' open';
    }
    document.getElementById("close").onclick = function () {
        menu.className = 'mobilemenu';
        open.className = 'navbar-bars';
        close.className = 'navbar-bars-close';
    }
});