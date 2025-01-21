
// scroll line aniamtion
const line = document.querySelector('.line');
let percentage = get_scroll_percentage();
percentage = 0

export const lineAnimationAction = () => {
    if (!line) return;

    const maxSroll = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );

    window.addEventListener('scroll', function () {
        // percentage = get_scroll_percentage();
        let curScroll = window.scrollY + window.innerHeight

        if (curScroll >= maxSroll) {
            percentage = window.scrollY + window.innerHeight
        } else {
            percentage = window.scrollY + window.innerHeight / 2
        }


        bodyScroll();
    })
}



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
            // height: percentage + '%',
            height: percentage,
            duration: 1.5,
            delay: 0.5,
            ease: 'ease',
        }
    )
}



// animate headerlogo
const headerLogo = document.querySelector('header .animated-logo');
// потом убрать .hero
if (headerLogo && document.querySelector('.hero') && window.innerWidth > 1024) {
    const header = document.querySelector('header');
    const eye = headerLogo.querySelector('.eye')
    const mv = headerLogo.querySelector('.mv')
    const st = headerLogo.querySelector('.st')

    let headerLogoTop = (window.innerHeight / 2 - (headerLogo.getBoundingClientRect().height * 1.15) / 2) + 'px';
    headerLogo.style.top = headerLogoTop

    let gap = headerLogo.style.gap
    let headerLogoWidth = headerLogo.style.width

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
            // width: '1200px',
        },
        {
            // width: width,
            // ease: 'linear',
            // top: -top,
            // gap: 25,
            scrollTrigger: {
                trigger: '.hero',
                start: 'top',
                end: '15%',
                scrub: true,
                toggleActions: 'play play',
                onLeaveBack: () => {
                }
            },
            onComplete: () => {
                gsap.to(headerLogo, {
                    ease: 'ease',
                    top: -top,
                    gap: 25,
                    width: width,
                    duration: 0.5
                });

                header.classList.add('_active')
            },
        })
}
