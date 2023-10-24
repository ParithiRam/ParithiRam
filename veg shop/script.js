const products = 
 
    'fresh-fruits': [
        { name: 'Apple', price: 100, shelflife:'5 days' },
        { name: 'Banana', price: 150, shelflife:'7 days' },
        { name: 'Orange', price: 300, shelflife: '10 days'}
    ],
    'dry-fruits': [
        { name: 'Almonds', price: 100, shelflife:'10 months' },
        { name: 'Cashews', price: 80, shelflife:'5months' },
        { name: 'Pistachios', price: 120, shelflife:'8 months' }
    ],
    'seasonal-items': [
        { name: 'Pumpkin', price: 50, shelflife:'3 days' },
        { name: 'Cranberries', price: 60, shelflife:'7 days' },
        { name: 'Pomegranate', price: 40, shelflife:'10 days' }
    ],
    'vegetables': [
        { name: 'Carrot', price: 20, shelflife:'4 days' },
        { name: 'Broccoli', price: 30, shelflife:'6 days' },
        { name: 'Spinach', price: 250, shelflife: '8 days'}
    ],
    'meat': [
        { name: 'Chicken', price: 70, shelflife:'4 days' },
        { name: 'Beef', price: 90, shelflife:'3 days' },
        { name: 'Pork', price: 80, shelflife:'2 days' }
    ]
};
]
let shelflife[
{key:"1day",displaytext:"1 day"}
{key:"2days",displaytext:"2 days"}
]

function getProducts(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.placeholder = 'Filter by shelf life...';
    filterInput.addEventListener('input', function (event) {
        const searchText = event.target.value.toLowerCase();
        const filteredProducts = products[category].filter(product =>
            product.shelfLife.toLowerCase().includes(searchText)
        );
        displayProducts(filteredProducts);
    });
    productsContainer.appendChild(filterInput);

    displayProducts(products[category]);
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `<p><strong>${product.name}</strong> - $${product.price}</p>
                                    <p>Shelf Life: ${product.shelfLife}</p>
                                    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>`;
        productsContainer.appendChild(productElement);
    });
}

let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    totalPrice += price;
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${name} - rs/-${price}`;
    cartItems.appendChild(cartItem);
    document.getElementById('total-price').textContent = `Total Price: rs/-${totalPrice}`;
}

function confirmOrder() {
    alert(`Your total price is rs/-${totalPrice}. Thank you for your order!`);
}
