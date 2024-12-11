// import { maskInputs } from "./static/inputmask.js";
// import { accorden } from "./static/accordeon.js";
// import { runTicker } from "./static/ticker.js";
// import { replaceDomElements } from "./static/replace.js";
// import { stickyHeader } from "./parts/header.js";
// import { playVideoAction } from "./parts/video.js";
// import { range } from "./parts/range.js";

// import "./parts/forms.js";
// import "./parts/sliders.js";
// import "./parts/popup.js";
import "./parts/menu.js";
// import "./parts/tabs.js";
// import "./parts/service-image-hover.js";
import "./parts/filters.js";
// import "./parts/cart.js";
// import "./parts/single-product.js";

// range();
// accorden();
// replaceDomElements();
// runTicker();
// stickyHeader(); 
// maskInputs('+7 (999) 999-99-99', '[name="phone"]')
// playVideoAction();

// import { Fancybox } from "@fancyapps/ui";
// Fancybox.bind("[data-fancybox]", {
// });


document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})




// let ticking = false;
// let last_known_scroll_position = 0;
// let updatePath = false;

// const element = document.querySelector('svg');
// const path = element.querySelector('path')
// let totalLength = 0;

// initPath(path)

// function initPath(path) {
//     totalLength = path.getTotalLength();
//     path.style.strokeDasharray = `${totalLength}`;
//     path.style.strokeDashoffset = totalLength;
// }


// function handleEntries(entries) {
//     console.log(entries)
//     entries.forEach(entry => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             console.log(entry.target)
//         }

//     })
// }

// let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log(entry);
//             updatePath = true;
//         } else {
//             updatePath = false;
//         }
//     });
// }, { rootMargin: "0px 0px 0px 0px" });


// observer.observe(element);

// function doSomething(scroll_pos) {
//     if (!updatePath) {
//         return;
//     }
//     window.requestAnimationFrame(() => {
//         const center = window.innerHeight / 2;
//         const boundaries = path.getBoundingClientRect();
//         const top = boundaries.top;
//         const height = boundaries.height;
//         const percentage = (center - top) / height;
//         const drawLength = percentage > 0 ? totalLength * percentage : 0;
//         path.style.strokeDashoffset = drawLength < totalLength ? totalLength - drawLength : 0;

//     })

// }

// window.addEventListener('scroll', function (e) {
//     last_known_scroll_position = window.scrollY;

//     if (!ticking) {
//         window.requestAnimationFrame(function () {
//             doSomething(last_known_scroll_position);
//             ticking = false;
//         });

//         ticking = true;
//     }
// });
