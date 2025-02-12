import { isMobile } from '../utils/isMobile.js';
import { gsap } from 'gsap'

const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener("mousemove", function (e) {
    if (!isMobile.any() && cursor) {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        setTimeout(() => {
            // cursor2.style.left = `${x}px`;
            // cursor2.style.top = `${y}px`;

            gsap.to(cursor2, {
                left: `${x}px`,
                top: `${y}px`,
                ease: 'ease',
            });
        }, 150);
    }
});