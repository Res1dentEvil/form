const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__close');
const section__map = document.querySelector('.section__map');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        popup.classList.add('open-popup');
    }, 1000);
})

btnClose.addEventListener('click', () => {
    popup.classList.remove('open-popup');
})

