export const stickyHeader = () => {
    const header = document.querySelector('header');

    // if (!header || animatedLogo) return

    // потом убрать это
    if (!header) return

    if (document.querySelector('.basket')) return;
    if (document.querySelector('.basket-empty')) return;

    const headerheigth = 100;

    const sticky = () => {
        if (window.scrollY > headerheigth) {
            header.classList.add('_sticky')
        }
        else {
            header.classList.remove('_sticky')
        }
    }

    sticky();
    window.addEventListener('scroll', sticky);
}