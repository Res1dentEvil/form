const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.popup__close');
const section__map = document.querySelector('.section__map');
const count = document.querySelector('.count');
const message = document.querySelector('.message');



document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        popup.classList.add('open-popup');
    }, 1000);
})

btnClose.addEventListener('click', () => {
    popup.classList.remove('open-popup');
});



message.addEventListener('input', () => {
    count.textContent = message.value.length;
    if (message.value.length >= 30) {
        count.classList.add('invalid-message');
    } else {
        count.classList.remove('invalid-message');
    }
});