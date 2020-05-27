let quantityList = document.querySelectorAll('.product__quantity-control');
let productsList = document.querySelector('.cart__products');
let productAdd = document.querySelectorAll('.product__add');

//увеличиваем и уменьшаем количество товара
[...quantityList].forEach((quantity) => {
    quantity.addEventListener('click', (evt) => {
        let quantityParent = evt.currentTarget.closest('.product__quantity-controls');
        let quantityValue = quantityParent.querySelector('.product__quantity-value');

        if (quantity.classList.contains('product__quantity-control_dec') && quantityValue.textContent > 1) {
            (quantityValue.textContent)--;
        }
        if (quantity.classList.contains('product__quantity-control_inc') && quantityValue.textContent >= 1) {
            (quantityValue.textContent)++;
        }
    });
});

//для каждой кнопки "добавить в корзину"
[...productAdd].forEach((productAddBtn) => productAddBtn.addEventListener('click', addToCart));

function addToCart(evt) {
    let btnParent = evt.currentTarget.closest('.product');//родитель кликнутой кнопки добавить
    let productId = btnParent.dataset.id;//id товара
    let productImg = btnParent.querySelector('img').src;//картинка товара
    let quantityValue = btnParent.querySelector('.product__quantity-value').textContent;//количество товара

    //проверяем корзину, есть ли там товар с таким же id
    let cartProduct = [...productsList.children].find( cartItem => cartItem.dataset.id === productId);

   //если такой товар есть то он становится cartProduct
    if (cartProduct) {
        //меняем количество товара (суммируем то что было с тем что пришло)
        let quantity = cartProduct.querySelector('.cart__product-count').textContent;
        cartProduct.querySelector('.cart__product-count').textContent = Number(quantityValue) + Number(quantity);
    } else {  //если товар новый(его нет в корзине)
        //клонируем карточку товара и добавляем в нее данные из кликнутого товара
        cartProduct = (document.querySelector('template').content).cloneNode(true);
        cartProduct.querySelector('.cart__product').dataset.id = productId;
        cartProduct.querySelector('img').src = productImg;
        cartProduct.querySelector('.cart__product-count').textContent = quantityValue;
        productsList.appendChild(cartProduct); //добавляем товар в корзину
    }
}

