import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';
import { gsap } from 'gsap'


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

if (burger) {
    const tl = gsap.timeline()



    burger.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        lockPadding();

        tl.to('.menu [data-bottom]',
            {
                delay: 0.3,
                stagger: 0.05,
                opacity: 1,
                top: 0,
                duration: 0.2,
                ease: 'ease',
            }).to('.menu [data-opacity]',
                {
                    opacity: 1,
                    duration: 0.2,
                    ease: 'ease',
                })
    })

    menuClose.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        unLockPadding();

        tl.to('.menu [data-bottom]',
            {
                opacity: 0,
                stagger: 0.05,
                top: -25,
                duration: 0.2,
                ease: 'ease',
            }).to('.menu [data-opacity]',
                {
                    opacity: 0,
                    duration: 0.2,
                    ease: 'ease',
                })
    })
}
