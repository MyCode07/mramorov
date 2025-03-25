import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';
import { gsap } from 'gsap'


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

if (burger) {
    const tl = gsap.timeline()
    let container = document.querySelector('header ._container');
    let left = container.getBoundingClientRect().left;

    if (left < 10) {
        left = 10
    }

    burger.style.left = left + 'px'


    window.addEventListener('resize', () => {
        left = container.getBoundingClientRect().left;


        if (left < 10) {
            left = 10
        }

        burger.style.left = left + 'px'
    })

    burger.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
        lockPadding();

        if (menu.classList.contains('_open')) {

            gsap.to('.menu',
                {
                    height: '100%',
                    duration: 0.3,
                    ease: 'ease',
                    onComplete: () => {
                        menu.style.overflowY = 'auto'
                    }
                })

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
        }
        else {
            unLockPadding();
            menu.style.overflowY = 'unset'

            gsap.to('.menu', {
                height: 0,
                duration: 0.3,
                ease: 'ease',
            })

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
        }
    })

    menuClose.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        unLockPadding();
        menu.style.overflowY = 'unset'

        gsap.to('.menu', {
            height: 0,
            duration: 0.3,
            ease: 'ease',
        })

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
