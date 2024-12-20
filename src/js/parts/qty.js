document.addEventListener('click', function (e) {
    const targetEl = e.target;

    if (targetEl.classList.contains('minus') && targetEl.closest('.quantity')) {
        e.preventDefault();
        const input = targetEl.closest('.quantity').querySelector('input')
        let value = +input.value;

        value--;
        if (value <= 1) {
            value = 1
        }
        input.value = value;

        addQuanititiyToProductForm(targetEl, value)
    }

    if (targetEl.classList.contains('plus') && targetEl.closest('.quantity')) {
        e.preventDefault();
        const input = targetEl.closest('.quantity').querySelector('input')
        let value = +input.value;

        value++;
        if (value >= +input.max) {
            value = input.max
        }
        input.value = value;

        addQuanititiyToProductForm(targetEl, value)
    }
})


document.addEventListener('input', function (e) {
    const targetEl = e.target;
    if (targetEl.closest('.quantity')) {
        let value = +targetEl.value;

        if (value <= 1) {
            value = 1
        }
        if (value >= +targetEl.max) {
            value = targetEl.max
        }

        targetEl.value = value;

        addQuanititiyToProductForm(targetEl, value)
    }
})

function addQuanititiyToProductForm(targetEl, quantity) {
    const quantityInput = targetEl.closest('[data-product]').querySelector('input[name="quantity"]');

    if (!quantityInput) return;

    quantityInput.value = quantity
    console.log(quantityInput.value);

}