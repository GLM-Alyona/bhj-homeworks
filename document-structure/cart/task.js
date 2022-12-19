const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');
const products = Array.from(document.querySelectorAll('.product'));

products.forEach((product) => {
    const decrease = product.querySelector('.product__quantity-control_dec');
    const increase = product.querySelector('.product__quantity-control_inc');
    const quantity = product.querySelector('.product__quantity-value');
    const productAdd = product.querySelector('.product__add');
    let currentProduct;
    
    decrease.onclick = () => {
        Number(quantity.textContent) === 1 ? quantity.textContent = 1 : quantity.textContent = Number(quantity.textContent) - 1;
    };

    increase.onclick = () => {
        quantity.textContent = Number(quantity.textContent) + 1;
    };

    productAdd.onclick = () => {
        
        if (Array.from(cartProducts.children).some((item) => item.dataset.id === product.dataset.id)) {
            currentProduct = Array.from(cartProducts.children).find((item) => item.dataset.id === product.dataset.id);
            currentProduct.querySelector('.cart__product-count').textContent = Number(currentProduct.querySelector('.cart__product-count').textContent) + Number(quantity.textContent);
        } else {
            cart.classList.add('cart__active');
            cartProducts.insertAdjacentHTML('beforeEnd', `
                <div class="cart__product" data-id=${product.dataset.id}>
                    <img class="cart__product-image" src=${product.querySelector('.product__image').src}>
                    <div class="cart__product-count">${quantity.textContent}</div>
                    <a href="#" class="cart__product-remove">&times;</a>
                </div>
            `);

            const productRemove = cartProducts.lastElementChild.querySelector('.cart__product-remove');
            productRemove.onclick = () => {
                productRemove.closest('.cart__product').remove();
                if (cartProducts.innerText === "") {
                    cart.classList.remove('cart__active');
                }
            };
        }
    };
});