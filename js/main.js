const ham = document.querySelector('.navbar__btn');
const enlaces = document.querySelector('.navbar__menu');
const enlaces2 = document.querySelector('.navbar');
const barras = document.querySelectorAll('.navbar__btn span');
const cierre = document.querySelectorAll('.navbar__link');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    enlaces2.classList.toggle('activado');
    barras.forEach(child => child.classList.toggle('animado'));
});



