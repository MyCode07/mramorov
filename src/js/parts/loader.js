import { gsap } from "gsap";

const preloader = document.querySelector('.loader');
const heroImage = document.querySelector('.hero__bgi');

// let interval = setInterval(() => {
//     const isLoaded = heroImage.complete && heroImage.naturalHeight !== 0;
//     if (isLoaded == true) {
//         runPrelaoder()
//         clearInterval(interval)
//     }
// }, 16);



export const runPrelaoder = () => {
    if (!preloader) {
        return;
    }


    const perc = preloader.querySelector('.loader-percentage label');
    const timeline = gsap.timeline();

    timeline.to(perc, {
        duration: 1,
        onUpdate: function () {
            perc.textContent = Math.round(this.progress() * 100)
        },
        onComplete: () => {
        }
    }).to(preloader, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: 'none',
        delay: 1,
        onComplete: () => {
            document.body.classList.remove('_noscrollbar')

            setTimeout(() => {
                preloader.remove();
            }, 1000);
        }
    })
}