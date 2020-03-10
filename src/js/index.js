import '../css/styles.scss';
import html from '../index.html';

const header = document.querySelector('header');
const burgerMenu = document.querySelector('.burger__menu');
const headerNav = document.querySelector('.header__nav');


window.addEventListener('scroll', addFixed);
headerNav.addEventListener('click', hideOnClickMenu);
burgerMenu.addEventListener('click', activeButtons);


function addFixed() {

    if (window.pageYOffset > 100 && !headerNav.classList.contains('header__nav--active')) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}

function activeButtons() {
    burgerMenu.classList.toggle('burger__menu--active');
    headerNav.classList.toggle('header__nav--active');

    if (headerNav.classList.contains('header__nav--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
}

function hideOnClickMenu(e) {
    const target = e.target;

    if (target.tagName == 'A') {
        activeButtons();
    }
}




