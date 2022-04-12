const menuBars = document.getElementById("menu-bars");
const overLay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleAnimation(directionAdd, directionRemove) {
    navItems.forEach((nav, i) => {
        console.log(nav, i)
        nav.classList.remove(`slide-${directionRemove}-${i + 1}`)
        nav.classList.add(`slide-${directionAdd}-${i + 1}`)
    })
}


function toggleNav() {
    //Toggle: Menu bars open closed
    menuBars.classList.toggle('change')

    //Toggle: Menu active
    overLay.classList.toggle('overlay-active')
    if (overLay.classList.contains('overlay-active')) {
        overLay.classList.remove('overlay-slide-left')
        overLay.classList.add('overlay-slide-right');

        // adding slide in class to nav elements
        toggleAnimation("in", "out")
    } else {
        overLay.classList.remove('overlay-slide-right')
        overLay.classList.add('overlay-slide-left')

        // adding slide out class
        toggleAnimation("out", "in")
    }
}


menuBars.addEventListener("click", toggleNav)