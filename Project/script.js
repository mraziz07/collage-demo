const navlinks = document.querySelector('#navlinks');
const hidebutton = document.querySelector('#hide-btn');
const showbutton = document.querySelector('#show-btn');


const showMenu = () => {
navlinks.style.right = '0px';
}

const hideMenu = () => {
    navlinks.style.right = '-220px';
    }              