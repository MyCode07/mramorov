import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";
import { stickyHeader } from "./parts/header.js";
import { playVideoAction } from "./parts/video.js";
import SmoothScroll from "smoothscroll-for-websites";

import "./parts/forms.js";
import "./parts/qty.js";
import "./parts/sliders.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/tabs.js";
import "./parts/filters.js";
import "./parts/audio.js";
import "./parts/stones.js";
import "./parts/gallery-scroll.js";
import { animateAction, animateImagesAction, animateStaggerAction, animateHiddenTextAction, animateTextAction, lineAnimationAction } from "./parts/animations.js";
import { runPrelaoder } from "./parts/loader.js";

SmoothScroll();

replaceDomElements();
stickyHeader();
maskInputs('+7 (999) 999-99-99', '[name="phone"]')
playVideoAction();
animateStaggerAction();
animateAction();
animateImagesAction();
animateTextAction();
runPrelaoder();
animateHiddenTextAction();
lineAnimationAction();


import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
});





document.addEventListener('click', function (e) {

    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})