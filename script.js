const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});
