import { isMobile } from "../utils/isMobile.js";

const gallery = document.querySelector('.gallery-scroll');
const galleryBody = document.querySelector('.gallery-scroll__body');


if (gallery) {
    if (!isMobile.any()) {

        let speed = gallery.dataset.speed;
        let positionX = 0;
        let coordXprocent = 0;

        function wheel() {
            const galleryWidth = gallery.offsetWidth;
            const galleryBodyWidth = galleryBody.getBoundingClientRect().width

            const galleryDifferent = galleryBodyWidth - galleryWidth;
            const distX = Math.floor(coordXprocent - positionX);

            positionX = positionX + (distX * speed);
            let position = galleryDifferent / 200 * positionX;

            galleryBody.style.transform = `translate3d(${-position}px,0,0)`;

            if (Math.abs(distX) > 0) {
                requestAnimationFrame(wheel);
            }
            else {
                gallery.classList.remove('_init');
            }
        }

        gallery.addEventListener('mousemove', function (e) {
            const galleryWidth = gallery.offsetWidth;
            const coordX = e.pageX - galleryWidth / 2;
            coordXprocent = coordX / galleryWidth * 200;


            if (!gallery.classList.contains('_init')) {
                requestAnimationFrame(wheel);
                gallery.classList.add('_init');
            }
        })
    }
}

// надо чтобы галерея была отцентрирована относительно экрана и все будет работать