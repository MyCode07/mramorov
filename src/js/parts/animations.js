
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { TextPlugin } from 'gsap/TextPlugin.js';

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
                        start: 'top 85%',
                        end: 'top 50%',
                        scrub: true,
                        // markers:true,
                        toggleActions: 'play play reverse reverse',
                    }
                })
        })
    }
}


// animate logo
const logo = document.querySelector('.animated-logo');
const logoBlur = document.querySelector('.animated-logo .blur');
const logoUnBlur = document.querySelector('.animated-logo .unblur');
const logoBgc = document.querySelector('.animated-logo__back');

if (logo) {
    function getData() {
        let width = 353.83
        let top = 22
        let height = 30
        let scale = 0.41627
        let ease = 'power4.inOut'

        if (window.innerWidth > 1024 && window.innerWidth <= 1200) {
            scale = 0.50547
            top = 22
        }

        if (window.innerWidth > 768 && window.innerWidth <= 1024) {
            scale = 0.433
            top = 15
        }

        if (window.innerWidth > 600 && window.innerWidth <= 768) {
            scale = 0.421
            top = 15
        }

        if (window.innerWidth <= 600) {
            scale = 0.6322
            top = 13
        }


        return {
            width: width,
            top: top,
            height: height,
            width: width,
            scale: scale,
            ease: ease,
        }
    }

    let data = getData();

    gsap.to(logoBlur, {
        delay: 0.3,
        opacity: 0,
        duration: 2.5,
        ease: 'linear',
        filter: 'blur(0px)',
    })

    gsap.to(logoUnBlur, {
        delay: 0.3,
        opacity: 1,
        duration: 2.5,
        ease: 'linear'
    })

    gsap.to(logoUnBlur, {
        delay: 3,
        ease: data.ease,
        scale: data.scale,
        duration: 0.9,
    });

    gsap.to(logoBlur, {
        delay: 3,
        ease: data.ease,
        scale: data.scale,
        duration: 0.9,
    });

    gsap.to(logo, {
        delay: 3,
        // ease: "easeOut",
        ease: data.ease,
        top: data.top,
        y: 0,
        // height: height,
        // width: width,
        duration: 0.9,

        onComplete: () => {
            logo.classList.add('_active')

            setTimeout(() => {
                logoBgc.classList.add('_remove')
            }, 300);

            setTimeout(() => {
                logoBgc.remove()
            }, 1000);

            window.addEventListener('resize', () => {
                data = getData();

                logoUnBlur.style.transform = `scale(${data.scale})`;
                logo.style.top = data.top + 'px';
            })
        }
    });
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
let duration = 360
const tl = gsap.timeline();

function change(duration) {
    const currentProgress = tl.progress()

    tl
        .clear()
        .fromTo(line,
            {
                height: line.style.height,
            },
            {
                height: '100%',
                duration: duration,
                ease: 'ease',
            })
    // .progress(currentProgress);
}

export const lineAnimationAction = () => {
    if (!line) return;

    tl
        .fromTo(line,
            {
                height: 0,
            },
            {
                height: '100%',
                duration: duration,
                ease: 'ease',
            })


    window.addEventListener('scroll', function () {
        bodyScroll();
    })
}

let scrollTimer = -1;
function bodyScroll() {
    duration = 180
    change(duration)

    if (scrollTimer != -1) {
        clearTimeout(scrollTimer);

    }
    scrollTimer = window.setTimeout(scrollFinished, 500);

}

function scrollFinished() {
    duration = 360
    change(duration)
}