import { gsap } from "gsap";



const preloader = document.querySelector('.loader');
export const runPrelaoder = () => {
    if (!preloader) {
        return;
    }
    const timeline = gsap.timeline();
    const label = preloader.querySelector('label');


    timeline.to(preloader.querySelector('img'), {
        delay: 1,
        width: 100 + '%',
        duration: 2.5,
        onUpdate: () => {
            let prog = (timeline.progress() * 100 * 1.45).toFixed(1);
            if (prog >= 100) {
                prog = 100
            }
            label.textContent = prog + '%'
        }
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