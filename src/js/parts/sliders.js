import Swiper from 'swiper';
import { Autoplay, Thumbs, FreeMode } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        let section = slider.closest('section');
        if (!section) {
            section = slider.closest('.popup');
        }
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

        if (slider.closest('.popup')) {

            const gallery = new Swiper(slider, {
                modules: [
                ],
                spaceBetween: 20,
                slidesPerView: 1,
                grabCursor: true,
            });

            const galleryImages = document.querySelectorAll('.gallery-scroll__item');
            if (galleryImages) {
                galleryImages.forEach((item, i) => {
                    item.addEventListener('click', () => {
                        gallery.slideTo(i)
                    })
                })
            }
        }
    })
}


