const stones = document.querySelectorAll('.catalog ul a');
if (stones && window.innerWidth > 1024) {
    const images = document.querySelectorAll('.catalog-images img');
    const middle = (stones.length - 1) / 2;

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

            console.log('mouseleave');

            if (!document.querySelector('.catalog a._active')) {
                if (i < middle) {
                    stones[0].classList.add('_active')
                    images[0].classList.add('_active')
                }
                if (i >= middle) {
                    stones[stones.length - 1].classList.add('_active')
                    images[stones.length - 1].classList.add('_active')
                }
            }
        })
    })
}
