const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', e => {
    menu.classList.toggle('active');
});