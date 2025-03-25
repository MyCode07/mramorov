import { isMobile } from '../utils/isMobile.js';
import { gsap } from 'gsap'

const cursor = document.querySelector("#cursor");
const cursorCircle = document.querySelector("#cursor-circle");

const cursorEffectsMaker = (
    elements,
    cursorCircle,
    enterAnimation,
    leaveAnimation,
    innerText = false
) => {
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseenter", () => {
            enterAnimation(innerText);
            if (innerText) {
                cursorCircle.innerHTML = `<span>${innerText}</span>`;
            }
        });
        elements[i].addEventListener("mouseleave", () => {
            leaveAnimation();
            if (innerText) {
                cursorCircle.innerHTML = ``;
            }
        });
    }
};


const loadCustomCursor = () => {
    if (isMobile.any()) return;
    if (!cursor) return;

    gsap.set(cursorCircle, { scale: 0.35 });

    document.addEventListener("mousemove", (e) => {
        gsap.set(cursor, { top: 0, left: 0 });
        gsap.set(cursorCircle, { top: -29, left: -29 });
        //pass mouse x and y
        movingCursorAnimation(e.clientX, e.clientY);
    });

    //animations
    const movingCursorAnimation = (x, y) => {
        gsap.to(cursor, { x: x - 15, y: y - 15, duration: 0 });
        gsap.to(cursorCircle, { x: x - 21, y: y - 21, duration: 0.3 });
    };

    const hoverLinkAnimation = (hasContent) => {
        gsap.to(cursor, { scale: 0, duration: 0 });
        gsap.to(cursorCircle, {
            scale: hasContent ? 1 : 0.65,
            borderWidth: 3,
            backgroundColor: hasContent ? "#fff" : "transparent",
            duration: 0.5,
        });
    };

    const leaveHoverLinkAnimation = () => {
        gsap.to(cursor, { scale: 1, duration: 0 });
        gsap.to(cursorCircle, {
            scale: 1,
            borderWidth: 3,
            scale: 0.35,
            backgroundColor: "transparent",
            duration: 0.5,
        });
    };

    //header link cursor animations
    const normalLinksElements = document.getElementsByClassName("w-nav-anchor");
    if (normalLinksElements) {
        cursorEffectsMaker(
            normalLinksElements,
            cursorCircle,
            hoverLinkAnimation,
            leaveHoverLinkAnimation
        );
    }

    //btn cursor animations
    const btnsElements = document.getElementsByClassName("w-btn");
    if (btnsElements) {
        cursorEffectsMaker(
            btnsElements,
            cursorCircle,
            hoverLinkAnimation,
            leaveHoverLinkAnimation
        );
    }

    //socials
    const socialsElements = document.getElementsByClassName("w-socials-item");
    if (socialsElements) {
        cursorEffectsMaker(
            socialsElements,
            cursorCircle,
            hoverLinkAnimation,
            leaveHoverLinkAnimation
        );
    }

    //carousel items cursor animations
    const carouselElements = document.getElementsByClassName("owl-item");
    if (carouselElements) {
        cursorEffectsMaker(
            carouselElements,
            cursorCircle,
            hoverLinkAnimation,
            leaveHoverLinkAnimation,
            "Scopri"
        );
    }

    //img items cursor animations
    const imagesElements = document.getElementsByClassName("super_image");
    if (imagesElements) {
        cursorEffectsMaker(
            imagesElements,
            cursorCircle,
            hoverLinkAnimation,
            leaveHoverLinkAnimation,
            "Zoom"
        );
    }

};


loadCustomCursor();