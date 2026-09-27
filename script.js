// ============================================
// PRODUCTS DATA
// ============================================

const products = [
    {
        id: 1,
        name: "Wireless Earbuds",
        category: "electronics",
        price: 4999,
        image: "images/earbuds.jpg",
        description: "High-quality sound with noise cancellation"
    },
    {
        id: 2,
        name: "USB-C Cable",
        category: "accessories",
        price: 899,
        image: "images/cable.jpg",
        description: "Fast charging and data transfer cable"
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "accessories",
        price: 2499,
        image: "images/stand.jpg",
        description: "Ergonomic aluminum stand for better posture"
    },
    {
        id: 4,
        name: "Wireless Mouse",
        category: "electronics",
        price: 1999,
        image: "images/mouse.jpg",
        description: "Precision tracking with long battery life"
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        category: "electronics",
        price: 5999,
        image: "images/keyboard.jpg",
        description: "RGB backlit with customizable switches"
    },
    {
        id: 6,
        name: "Screen Protector",
        category: "accessories",
        price: 599,
        image: "images/protector.jpg",
        description: "Tempered glass protection for your screen"
    },
    {
        id: 7,
        name: "Antivirus Software",
        category: "software",
        price: 1499,
        image: "images/antivirus.jpg",
        description: "Advanced protection against malware and threats"
    },
    {
        id: 8,
        name: "VPN Service",
        category: "software",
        price: 2999,
        image: "images/vpn.jpg",
        description: "Secure browsing with encrypted connection"
    }
];

// ============================================
// CART MANAGEMENT
// ============================================

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    
    // Show success message
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item && newQuantity > 0) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
    }
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return {
        subtotal: (subtotal / 100).toFixed(2),
        tax: (tax / 100).toFixed(2),
        total: (total / 100).toFixed(2)
    };
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    let filtered = products;
    if (filter !== 'all') {
        filtered = products.filter(p => p.category === filter);
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.category;

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">KSh ${(product.price / 100).toFixed(2)}</div>
                <div class="product-actions">
                    <input type="number" class="quantity-input" value="1" min="1" max="10">
                    <button class="add-to-cart-btn" onclick="addToCartHandler(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function addToCartHandler(productId) {
    const card = event.target.closest('.product-card');
    const quantity = parseInt(card.querySelector('.quantity-input').value);
    addToCart(productId, quantity);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const emptyMsg = document.getElementById('emptyCartMsg');

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        emptyMsg.style.display = 'block';
    } else {
        emptyMsg.style.display = 'none';
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">KSh ${(item.price / 100).toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }

    updateCartTotals();
}

function updateCartTotals() {
    const totals = calculateTotals();
    document.getElementById('subtotal').textContent = `KSh ${totals.subtotal}`;
    document.getElementById('tax').textContent = `KSh ${totals.tax}`;
    document.getElementById('total').textContent = `KSh ${totals.total}`;

    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.disabled = cart.length === 0;
}

// ============================================
// PRODUCT FILTERING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderProducts('all');
    updateCartCount();
    updateCartDisplay();

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            renderProducts(filter);
        });
    });

    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', showCheckout);

    // Checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    // Back button
    document.getElementById('backBtn').addEventListener('click', hideCheckout);

    // Cart button
    document.getElementById('cartBtn').addEventListener('click', function() {
        document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================================
// CHECKOUT FUNCTIONS
// ============================================

function showCheckout() {
    if (cart.length === 0) return;
    document.getElementById('checkout-section').classList.remove('hidden');
    document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' });
}

function hideCheckout() {
    document.getElementById('checkout-section').classList.add('hidden');
    document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' });
}

function validateCheckoutForm() {
    clearCheckoutErrors();
    let isValid = true;

    // First Name
    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        showCheckoutError('firstName', 'First name is required');
        isValid = false;
    }

    // Last Name
    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        showCheckoutError('lastName', 'Last name is required');
        isValid = false;
    }

    // Email
    const email = document.getElementById('email').value.trim();
    if (!email || !isValidEmail(email)) {
        showCheckoutError('email', 'Valid email is required');
        isValid = false;
    }

    // Address
    const address = document.getElementById('address').value.trim();
    if (!address) {
        showCheckoutError('address', 'Address is required');
        isValid = false;
    }

    // City
    const city = document.getElementById('city').value.trim();
    if (!city) {
        showCheckoutError('city', 'City is required');
        isValid = false;
    }

    // Zip Code
    const zipcode = document.getElementById('zipcode').value.trim();
    if (!zipcode) {
        showCheckoutError('zipcode', 'Zip code is required');
        isValid = false;
    }

    // Card Number
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    if (!cardNumber || cardNumber.length !== 16 || isNaN(cardNumber)) {
        showCheckoutError('cardNumber', 'Valid 16-digit card number required');
        isValid = false;
    }

    // Expiry
    const expiry = document.getElementById('expiry').value.trim();
    if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry)) {
        showCheckoutError('expiry', 'Expiry must be MM/YY format');
        isValid = false;
    }

    // CVV
    const cvv = document.getElementById('cvv').value.trim();
    if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
        showCheckoutError('cvv', 'Valid 3-digit CVV required');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showCheckoutError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    input.classList.add('error');
    errorElement.textContent = message;
}

function clearCheckoutErrors() {
    const inputs = document.querySelectorAll('.checkout-form input');
    inputs.forEach(input => input.classList.remove('error'));
    
    const errors = document.querySelectorAll('.checkout-form .error-message');
    errors.forEach(error => error.textContent = '');
}

function handleCheckout(e) {
    e.preventDefault();

    if (!validateCheckoutForm()) return;

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const totals = calculateTotals();

    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = `✅ Order placed successfully, ${firstName}! Total: KSh ${totals.total}. You will receive a confirmation email shortly.`;

    // Clear cart
    setTimeout(() => {
        cart = [];
        localStorage.removeItem('cart');
        updateCartCount();
        updateCartDisplay();
        document.getElementById('checkoutForm').reset();
        hideCheckout();
        successMessage.textContent = '';
    }, 3000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showNotification(message) {
    // Simple notification (you can enhance this)
    console.log(message);
}
