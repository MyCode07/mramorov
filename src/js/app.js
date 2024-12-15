import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";
import { stickyHeader } from "./parts/header.js";
import { playVideoAction } from "./parts/video.js";

import "./parts/sliders.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/tabs.js";
import "./parts/filters.js";
import "./parts/canvas.js";
import { animateAction, animateImagesAction, animateStaggerAction, animateTextAction } from "./parts/animations.js";

replaceDomElements();
stickyHeader();
maskInputs('+7 (999) 999-99-99', '[name="phone"]')
playVideoAction();
animateStaggerAction();
animateAction();
animateImagesAction();
animateTextAction();


import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
});

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})


// https://codepen.io/glivera/pen/zoMMGO?css-preprocessor=none
// https://frontend.horse/articles/amazing-animation-techniques-with-gsap/