let showElements = document.querySelectorAll('.none');

function btnShow() {
    showElements.forEach(show => {
        if (show.style.display === 'none') {
            show.style.display = 'flex';
        } else {
            show.style.display = 'none';
        }
    });
}
let showSidebar = document.querySelectorAll('.sidebar');

function sideBar() {
    showSidebar.forEach(show1 => {
        if (show1.style.display === 'none') {
            show1.style.display = 'flex';
        } else {
            show1.style.display = 'none';
        }
    });
}