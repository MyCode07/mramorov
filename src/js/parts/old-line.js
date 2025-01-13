
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