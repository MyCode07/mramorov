const stones = document.querySelectorAll('.catalog ul a');
if (stones) {
    stones.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('_active')
        })

        item.addEventListener('mouseleave', () => {
            item.classList.remove('_active')
        })
    })
}
