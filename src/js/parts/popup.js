import { isMobile } from "../utils/isMobile.js";
import { lockPadding, unLockPadding } from "../utils/lockPadding.js";

// const wrapper = document.querySelector('.wrapper');
const partnershipPopup = document.querySelector('.popup#main');

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.hasAttribute('data-open-popup')) {
        e.preventDefault();
        const id = targetEl.getAttribute('data-id');
        const popup = document.querySelector(`.popup#${id}`);

        if (popup) {
            popup.classList.add('_open')
            lockPadding();
        }
    }

    if (targetEl.classList.contains('popup')) {
        targetEl.classList.remove('_open')
        closePopup(targetEl)
    }

    if (targetEl.classList.contains('gallery-scroll__item')) {
        const img = targetEl.querySelector('img').src
        document.querySelector('.popup-gallery img').src = img;
    }

    if (targetEl.classList.contains('popup__close') || targetEl.hasAttribute('data-close-popup') || (targetEl.classList.contains('_container') && targetEl.closest('.popup-msg'))) {
        const popup = targetEl.closest('.popup');
        closePopup(popup)

        if (popup.classList.contains('popup-gallery')) {
            setTimeout(() => {
                popup.querySelector('img').src = '';
            }, 300);
        }
    }
})


function closePopup(popup) {
    popup.classList.remove('_open')
    unLockPadding();
}