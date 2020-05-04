const nav = document.querySelector('nav');
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', function () {
    nav.classList.toggle('active')
    burger.classList.toggle('active');

})