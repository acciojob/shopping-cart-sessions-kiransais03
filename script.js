// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

let add=document.getElementsByClassName('add-to-cart-btn');
add.addEventListener("click",addToCart);

// Render cart list
function renderCart() {
	
}

// Add item to cart
function addToCart(event) {
	let id=event.target.getAttribute('date-id');
	let products1=products[id-1];
	let body=document.getElementsByTagName('body');
	const li1 = document.createElement("li");
    li1.innerHTML = `${products1.name} - $${products1.price} 
	body.append(li1);
}

// Remove item from cart
function removeFromCart(productId) {
	
}

// Clear cart
function clearCart() {
	
}

// Initial render
renderProducts();
renderCart();
