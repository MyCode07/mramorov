
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { TextPlugin } from 'gsap/TextPlugin.js';
import { get_scroll_percentage } from '../static/scroll-percentage.js';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);
            animateLogo(entry.target)
        }
    })
});


function animate(elem) {
    const delay = elem.dataset.delay ? elem.dataset.delay * 1000 : 0

    if (elem.hasAttribute('data-animate-left')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-left');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-right')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-right');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-top')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-top');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-bottom')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-bottom');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-opacity')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-opacity');
        }, delay);
    }
    if (elem.hasAttribute('data-animate-svg')) {
        setTimeout(() => {
            elem.removeAttribute('data-animate-svg');
        }, delay);
    }
}

const animateElems = document.querySelectorAll('[data-animate]');
export const animateAction = () => {
    if (!animateElems.length) return;

    animateElems.forEach(elem => {
        observer.observe(elem);
    })
}

// stagger animations
const observerStagger = new IntersectionObserver((entries, self) => {
    let targets = entries
        .map(entry => {
            if (entry.isIntersecting) {
                self.unobserve(entry.target)
                return entry.target;
            }
        })
        .filter(item => item != undefined);

    animateStagger(targets)
});

function animateStagger(elem) {
    gsap.to(elem, {
        opacity: 1,
        duration: 0.5,
        x: 0,
        y: 0,
        y: 0,
        ease: 'easeInOut',
        stagger: 0.2,
    });
}


const animateElemsStagger = document.querySelectorAll('[data-animate-stagger]');
export const animateStaggerAction = () => {
    if (!animateElemsStagger.length) return
    animateElemsStagger.forEach(elem => {
        observerStagger.observe(elem);
    })
}


// stagger svg animations
const observerSVGStagger = new IntersectionObserver((entries, self) => {
    let targets = entries
        .map(entry => {
            if (entry.isIntersecting) {
                self.unobserve(entry.target)
                return entry.target;
            }
        })
        .filter(item => item != undefined);

    animateSVG(targets)
});

function animateSVG(elem, i) {
    gsap.to(elem,
        {
            duration: 5,
            delay: 0.3,
            strokeDashoffset: 0,
            ease: 'ease',
            stagger: 0.3,
        });
}


const animateSVGElems = document.querySelectorAll('[data-animate-svg]');
export const animateSVGStaggerAction = () => {
    if (!animateSVGElems.length) return
    animateSVGElems.forEach(elem => {
        observerSVGStagger.observe(elem);
    })
}


// animate images hidden
const observerImagesHidden = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateImages(entry.target);
        }
    })
}, { threshold: 0.3 });


function animateImages(elem) {
    elem.classList.add('_remove');
}

const animatedImages = document.querySelectorAll('[data-hidden]');
export const animateImagesAction = () => {
    if (animatedImages.length) {
        animatedImages.forEach(elem => {
            observerImagesHidden.observe(elem);
        })
    }
}


// text fill animations
const aniamtedTexts = document.querySelectorAll('._text-animated');
export const animateTextAction = () => {
    if (aniamtedTexts.length) {
        aniamtedTexts.forEach((char, i) => {

            const bg = char.dataset.bgColor
            const fg = char.dataset.fgColor

            const text = new SplitType(char, { types: 'chars' })

            gsap.fromTo(text.chars,
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.3,
                    ease: 'ease',
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        toggleActions: 'play play reverse reverse',
                    }
                })
        })
    }
}


// animate headerlogo
const headerLogo = document.querySelector('header .animated-logo');
// потом убрать .hero
if (headerLogo && document.querySelector('.hero')) {
    const header = document.querySelector('header');
    const eye = headerLogo.querySelector('.eye')
    const mv = headerLogo.querySelector('.mv')
    const st = headerLogo.querySelector('.st')

    headerLogo.style.top = (window.innerHeight / 2 - (headerLogo.getBoundingClientRect().height * 1.15) / 2) + 'px'

    const tl = gsap.timeline()
    let width = 325
    let top = 72

    if (window.innerWidth <= 1024) {
        top = 75
        width = 312
    }

    if (window.innerWidth <= 768) {
        top = 42
        width = 173
    }


    tl.fromTo(headerLogo,
        {
            width: '1200px',
        },
        {
            width: width,
            duration: 0.3,
            top: -top,
            ease: 'linear',
            gap: 25,
            scrollTrigger: {
                trigger: '.hero',
                start: 'top',
                end: 'center',
                scrub: true,
                toggleActions: 'play play reverse reverse',
                onLeaveBack: () => {
                    header.classList.remove('_active')
                }
            },
            onComplete: () => {
                header.classList.add('_active')
            },
        })
}

// data-hidden-text aniamtion
const aniamtedHiddenText = document.querySelectorAll('[data-hidden-text]');
export const animateHiddenTextAction = () => {
    if (aniamtedHiddenText.length) {
        aniamtedHiddenText.forEach(item => {
            gsap.fromTo(item,
                {
                    opacity: 0,
                    top: 50,
                },
                {
                    opacity: 1,
                    top: 0,
                    duration: 0.3,
                    stagger: 0.3,
                    ease: 'ease',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        toggleActions: 'play play reverse reverse',
                    }
                })
        })
    }
}


// scroll line aniamtion
const line = document.querySelector('.line');
let percentage = get_scroll_percentage();

export const lineAnimationAction = () => {
    if (!line) return;


    window.addEventListener('scroll', function () {
        percentage = get_scroll_percentage();

        bodyScroll();
    })
}



gsap.to(line,
    {
        height: '100%',
        duration: 100,
        ease: 'linear'
    }
)

let scrollTimer = -1;
function bodyScroll() {
    if (scrollTimer != -1) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = window.setTimeout(scrollFinished, 500);
}

function scrollFinished() {
    gsap.to(line,
        {
            height: percentage + '%',
            duration: 1,
            delay: 0.5,
            ease: 'linear',
            onComplete: () => {
                gsap.fromTo(line,
                    {
                        height: line.style.height,
                    },
                    {
                        height: '100%',
                        duration: 100,
                        ease: 'linear'
                    }
                )
            }
        }
    )
}