let trans = document.querySelector('.transparent');
let menu = document.querySelector('.menu');
var menuDropdown = document.querySelector('.menu-dropdown');
let menuDropdownItem = document.querySelector('.menu-dropdown ul');
let navMobile = document.querySelector('.nav-mobile');
let overlay = document.querySelector('.overlay');
let iconClose = document.querySelector('.close-icon');



// Menu dropdown
menu.onclick = () => {
    menuDropdown.classList.toggle('d-none');
    trans.style.zIndex = '3';
    if(menuDropdown.classList.contains('d-none') === true) {
        trans.style.zIndex = '0'
    }
}

trans.onclick = () => {
    menuDropdown.classList.add('d-none');

    if(menuDropdown.classList.contains('d-none') === true) {
        trans.style.zIndex = '0'
    }
}

// Sub menu hover dropdown menu
// menuDropdown.onmouseover = () => {
//     subMenu.classList.remove('d-none');
// }

// menuDropdown.onmouseout = () => {
//     subMenu.classList.add('d-none')
// }

// Menu dropdown hover
for(x of menuDropdownItem.children) {
    x.onmouseover  = (e) => {
        for(y of e.target.children) {
            if(y.classList.contains('sub-menu') === true) {
                y.classList.remove('d-none')
            }
        }
    }

    x.onmouseleave = (e) => {
        for(y of e.target.children) {
            if(y.classList.contains('sub-menu') === true) {
                y.classList.add('d-none')
            }
        }
    }
}

// Nav mobile
navMobile.onclick = () => {
    overlay.style.zIndex = '5';
    overlay.style.width = '100%';
}

iconClose.onclick = () => {
    overlay.style.width = '0%';
}












