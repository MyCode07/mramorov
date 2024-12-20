import { gsap } from "gsap";

const preloader = document.querySelector('.loader');
export const runPrelaoder = () => {
    if (!preloader) {
        return;
    }
    const timeline = gsap.timeline();

    timeline.to(preloader.querySelectorAll('span'), {
        delay: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
    }).to(preloader, {
        delay: 1,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            document.body.classList.remove('_noscrollbar')
            setTimeout(() => {
                preloader.remove();
            }, 1000);
        }
    })
}