class CartComponent {
    constructor() {
        let self = this;
        self.cartData = [];
        self.cart = document.querySelector('.cart');
        self.cartProducts = document.querySelector('.cart__products');
        self.listProducts = [...document.querySelectorAll('.product')];

        self.listProducts.forEach((element) => {
            element.querySelector('.product__add').addEventListener('click', (e) => {
                self.handleProductAdd(e);
            });

            element.querySelector('.product__quantity-control_dec').addEventListener('click', (e) => {
                self.handleProductQuantityControlDecrement(e);
            });

            element.querySelector('.product__quantity-control_inc').addEventListener('click', (e) => {
                self.handleProductQuantityControlIncrement(e);
            });
        });
    }

    // добавление продукта в корзину
    handleProductAdd(event) {
        let self = this;
        const product = event.target.closest('.product');
        const cartProduct = {
            id: product.dataset.id,
            quantity: Number.parseInt(product.querySelector('.product__quantity-value').innerText),
            title: product.querySelector('.product__title').innerText,
            imgUrl: product.querySelector('.product__image').src,
        }

        const addedProduct = self.cartData.find((product) => product.id === cartProduct.id);

        if (addedProduct) {
            addedProduct.quantity += cartProduct.quantity;
        } else {
            self.cartData.push(cartProduct);
        }
        self.drawCart();
    }

    // увеличение кол-ва продуктов
    handleProductQuantityControlIncrement(event) {
        const product = event.target.closest('.product');
        const quantity = product.querySelector('.product__quantity-value');
        let value = Number.parseInt(quantity.innerText);
        if (!Number.isNaN(value)) {
            quantity.innerText = value + 1;
        }
    }

    // уменьшение кол-ва продуктов
    handleProductQuantityControlDecrement(event) {
        const product = event.target.closest('.product');
        const quantity = product.querySelector('.product__quantity-value');
        let value = Number.parseInt(quantity.innerText);
        if (!Number.isNaN(value) && value > 1) {
            quantity.innerText = value - 1;
        }
    }

    // отрисовка продуктов в корзине
    drawCart() {
        let self = this;
        self.cartProducts.innerHTML = '';

        if (self.cartData.length > 0) {
            self.cartData.forEach((product) => {
                self.cartProducts.appendChild(self.createCartProduct(product));
            });
            self.cart.classList.add('show-cart');
        } else {
            if (self.cart.classList.contains('show-cart')) {
                self.cart.classList.remove('show-cart');
            }
        }
    }

    // создание продукта для корзины
    createCartProduct(cartProduct) {
        const img = document.createElement('img');
        img.classList.add('cart__product-image');
        img.src = cartProduct.imgUrl;

        const count = document.createElement('div');
        count.classList.add('cart__product-count');
        count.innerText = cartProduct.quantity;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('cart__product-dell');
        deleteButton.innerText = 'x';
        deleteButton.dataset.id = cartProduct.id;

        const result = document.createElement('div');
        result.classList.add('cart__product');
        result.dataset.id = cartProduct.id;
        result.appendChild(img);
        result.appendChild(count);
        result.appendChild(deleteButton);
        return result;
    }

}
    
function removeFromCart(id) {
    let item = cart.find(it => it.id === parseInt(id));
    let index = cart.indexOf(item);
    cart.splice(index, 1);
    renderCart();
    console.log(cart);
  };

// только когда вся страница загрузилась добавляем обработчики событий
window.onload = function ready(handler) {
    new CartComponent();
};