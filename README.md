# TechHub - Online Shopping Platform

A fully functional e-commerce shopping platform built with HTML5, CSS3, and JavaScript. This project demonstrates core web development skills including product filtering, shopping cart management, and form validation.

## Features

✅ **Product Catalog**
- 8 sample tech products with categories
- Product filtering (All, Electronics, Accessories, Software)
- Responsive product grid layout

✅ **Shopping Cart**
- Add/remove items from cart
- Adjust quantities
- Real-time cart total calculation
- Tax calculation (10%)
- Cart persistence (LocalStorage)
- Cart counter in navigation

✅ **Checkout System**
- Customer information form (name, address, email)
- Payment details (card number, expiry, CVV)
- Client-side form validation
- Success confirmation message

✅ **User Experience**
- Fully responsive design (mobile to desktop)
- Smooth scrolling navigation
- Form error messages
- Empty cart messaging
- Professional dark/accent color scheme

## Technical Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Responsive design with media queries
- **JavaScript** - Dynamic functionality and validation
- **LocalStorage** - Cart persistence across sessions

## Project Structure

```
shopping-platform/
├── index.html      # Main HTML file with all sections
├── style.css       # Complete styling and responsive design
├── script.js       # Product data, cart logic, form validation
└── README.md       # This file
```

## How to Run

1. **Locally**: Open `index.html` in your web browser
2. **Live Demo**: Deploy to GitHub Pages or Vercel (see deployment below)

## Key Functionality

### Product Filtering
```javascript
// Users can filter products by category
- All Products
- Electronics
- Accessories
- Software
```

### Shopping Cart Operations
- Add products with custom quantities
- Update item quantities (+ / -)
- Remove items from cart
- Auto-save to browser storage

### Checkout Validation
- Required fields validation
- Email format verification
- Card number (16 digits) verification
- Expiry date format (MM/YY)
- CVV validation (3 digits)

## Sample Products

1. 🎧 **Wireless Earbuds** - KSh 4,999
2. 🔌 **USB-C Cable** - KSh 899
3. 🖥️ **Laptop Stand** - KSh 2,499
4. 🖱️ **Wireless Mouse** - KSh 1,999
5. ⌨️ **Mechanical Keyboard** - KSh 5,999
6. 🛡️ **Screen Protector** - KSh 599
7. 🔒 **Antivirus Software** - KSh 1,499
8. 🔐 **VPN Service** - KSh 2,999

## Deployment

### GitHub Pages
1. Create a GitHub repository named `shopping-platform`
2. Push these files to the repo
3. Go to Settings → Pages
4. Set source to `main` branch
5. Your site will be live at `https://username.github.io/shopping-platform`

### Vercel
1. Connect your GitHub repo to Vercel
2. Deploy automatically
3. Get a live URL instantly

## Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## CSS Variables

```css
--primary-color: #1a1a2e;      /* Dark navy */
--secondary-color: #0f3460;    /* Navy blue */
--accent-color: #e94560;       /* Red/Pink */
--success-color: #27ae60;      /* Green */
--error-color: #e74c3c;        /* Red */
```

## Responsive Breakpoints

- **Desktop**: 1000px+ (full layout)
- **Tablet**: 768px-999px (optimized grid)
- **Mobile**: 480px-767px (single column)
- **Small Mobile**: <480px (touch-friendly buttons)

## Future Enhancements

- Backend integration for real payment processing
- User accounts and order history
- Product search functionality
- Customer reviews and ratings
- Email notifications
- Inventory management
- Multiple payment methods

## Assignment Requirements Met

✅ E-commerce platform with shopping functionality
✅ Product catalog with filtering
✅ Fully functional shopping cart
✅ Checkout form with validation
✅ Responsive design
✅ Form validation (client-side)
✅ Dynamic product management
✅ Professional UI/UX

## Notes

- All data is stored locally (no backend server required)
- Cart data persists using browser LocalStorage
- Checkout is simulated (no actual payment processing)
- This is a demonstration project for learning purposes

---

**Built for Web Technologies Assignment (CSN 1101)**  
KCA University, 2026
