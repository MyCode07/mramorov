const stones = document.querySelectorAll('.catalog ul a');
if (stones) {
    const images = document.querySelectorAll('.catalog-images img');

    stones.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            stones.forEach(el => {
                el.classList.remove('_active')
            })
            images.forEach(el => {
                el.classList.remove('_active')
            })

            item.classList.add('_active')
            images[i].classList.add('_active')
        })

        item.addEventListener('mouseleave', () => {
            item.classList.remove('_active')
            images[i].classList.remove('_active')

            if ((i == 0 || i == stones.length - 1) && !document.querySelector('.catalog ._active')) {
                item.classList.add('_active')
                images[i].classList.add('_active')
            }
        })
    })
}
