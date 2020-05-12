$(document).ready(function () {
    $('#navbar-dropdown').prettyDropdown({
        selectedMarker: "<img style='transform: rotate(180deg); margin-bottom: -2px'  class='arrow-town' src='./img/arrow-down.svg'>",
        // customClass: "cclass",
        // hoverIntent: -1
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
