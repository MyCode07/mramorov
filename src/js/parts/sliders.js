import Swiper from 'swiper';
import { Autoplay, Thumbs, FreeMode } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (slider.closest('.stones')) {
            const thumbs = new Swiper('.swiper[thumbsSlider]', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
            });

            new Swiper('.swiper.stones-slider', {
                modules: [
                    Thumbs, Autoplay
                ],
                autoplay: {
                    delay: 5000,
                    pauseOnMouseEnter: true,
                },
                spaceBetween: 0,
                slidesPerView: 1,
                thumbs: {
                    swiper: thumbs,
                },
            });
        }

    })
}


