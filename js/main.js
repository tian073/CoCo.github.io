// Menu dropdown
let trans = document.querySelector('.transparent');
let menu = document.querySelector('.menu');
var menuDropdown = document.querySelector('.menu-dropdown');
let menuDropdownItem = document.querySelector('.menu-dropdown ul');
// Nav mobile
let navMobile = document.querySelector('.nav-mobile');
let overlay = document.querySelector('.overlay');
let iconClose = document.querySelector('.close-icon');
// Owl selection
let box = document.querySelector('.product-details-content .details-left');
let btnPre = document.querySelector('.selection .round-left');
let btnNext = document.querySelector('.selection .round-right');
let owl = document.querySelector('.owl');

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

// Own selection
let elmBody = document.body;
if(elmBody.contains(btnPre) && elmBody.contains(btnNext) && elmBody.contains(owl)) {
    btnPre.onclick = () => {
        // remove all text nodes
        owl.childNodes.forEach(elm => {
            elm.nodeType != 1 && elm.parentNode.removeChild(elm);
        })
    
        owl.appendChild(owl.firstChild);
    }
    
    btnNext.onclick = () => {
        // remove all text nodes
        owl.childNodes.forEach(elm => {
            elm.nodeType != 1 && elm.parentNode.removeChild(elm);
        })
    
        owl.insertBefore(owl.lastChild, owl.firstChild)
    }
    
    for(x of owl.children) {
        x.onmouseover = (e) => {
            var coppy = e.target.cloneNode(true);
            // coppy.style.transform = 'scale(1.2)'
            console.log(box.firstChild.nextSibling);
            box.replaceChild(coppy, box.firstChild.nextSibling)
        }
    
        x.onmouseleave = (e) => {
            var coppy = e.target.cloneNode(true);
            // coppy.style.transform = 'scale(1)';
            box.replaceChild(coppy, box.firstChild.nextSibling)
        }
    }
}

// See more
$("#btn-slide-down-1").click(function(){
    $("#btn-slide-down-1").css("display","none");
    $("#slide-down-1").slideDown("slow");
});

$("#btn-slide-down-2").click(function(){
    $("#btn-slide-down-2").css("display","none");
    $("#slide-down-2").slideDown("slow");
});

$("#btn-slide-down-3").click(function(){
    $("#btn-slide-down-3").css("display","none");
    $("#slide-down-3").slideDown("slow");
});












