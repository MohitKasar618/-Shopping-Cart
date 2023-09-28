const jsonData = {
    "data": [
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Name: Oil",
                    "price": 20
                },
                {
                    "name": "Name: Oil",
                    "price": 20
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Name: Oil",
                    "price": 20
                },
                {
                    "name": "Name: Oil",
                    "price": 20
                }
            ]
        }
    ]
};

const cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    console.log(`Product added to the cart: ${productName}`);
    displayCart();
}

function removeFromCart(productName) {
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`Product removed from the cart: ${productName}`);
        displayCart();
    }
}

function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `${item.name} - $${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove from Cart';
        removeButton.addEventListener('click', () => {
            removeFromCart(item.name);
        });

        cartItem.appendChild(removeButton);
        cartList.appendChild(cartItem);
    });
}

function createProductBoxes(data) {
    const categoriesDiv = document.querySelector('.categories');
    data.forEach(category => {
        const categoryBox = document.createElement('div');
        categoryBox.className = 'category-box';

        const categoryName = document.createElement('h2');
        categoryName.innerText = category.name;
        categoryBox.appendChild(categoryName);

        category.productList.forEach(product => {
            const productName = document.createElement('p');
            productName.innerText = `${product.name} - $${product.price}`;
            categoryBox.appendChild(productName);

            const addButton = document.createElement('button');
            addButton.innerText = 'Add to Cart';
            addButton.addEventListener('click', () => {
                addToCart(product.name, product.price);
            });
            categoryBox.appendChild(addButton);
        });

        categoriesDiv.appendChild(categoryBox);
    });
}

createProductBoxes(jsonData.data);
