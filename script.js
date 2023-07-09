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

const productList = document.getElementById("product-list");

renderProducts();
renderCart();

// DOM elements

// Render product list
function renderProducts() {
  console.log('fdjs')
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

let add=document.getElementsByClassName('add-to-cart-btn');
Array.from(add).forEach((element)=>{element.addEventListener("click",addToCart);})

// Render cart list
function renderCart() {
	
}

// Add item to cart
function addToCart(event) {
	let id=parseInt(event.target.getAttribute('data-id'));
	let products1=products[id-1];
  // console.log(products,id,event.target)
	let cartlist=document.getElementById('cart-list');
	const li1 = document.createElement("li");
    li1.innerHTML = `${products1.name} - $${products1.price} <button class="remove-from-cart-btn" data-id="${id}">Remove from Cart</button>`;
	cartlist.append(li1);
  let remove=document.getElementsByClassName('remove-from-cart-btn');
  let removebtn=remove[remove.length-1];
  removebtn.addEventListener("click",removeFromCart)
}

// let remove=document.getElementsByClassName('remove-from-cart-btn');
// Array.from(remove).forEach((element)=>{element.addEventListener("click",removeFromCart);})


// Remove item from cart
function removeFromCart(event) {
	let parentNode=event.target.parentNode;
  parentNode.remove();
}

// Clear cart
document.getElementById('clear-cart-btn').addEventListener('click',clearCart)
function clearCart(event) {
	let cartlist=document.getElementById('cart-list');
  cartlist.innerHTML='';
}

// Initial render
