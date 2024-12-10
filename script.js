document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const topbar = document.querySelector('.top-bar');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        topbar.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});
