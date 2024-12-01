let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

const products = [
    {
      id: 1,
      title: "Blue eye",
      price: 20,
      category: "Rings",
      image: "../img/items/blueeye.jpg"
    },
    {
      id: 2,
      title: "Gold Earrings",
      price: 80,
      category: "Earrings",
      image: "../img/cards/01.jpg"
    },
    {
      id: 3,
      title: "Branches",
      price: 260,
      category: "Necklaces",
      image: "../img/items/branches.jpg"
    },
    {
      id: 4,
      title: "Platinum",
      price: 150,
      category: "Rings",
      image: "../img/items/blueeye.jpg"
    },
    {
        id: 5,
        title: "Heart",
        price: 200,
        category: "Necklaces",
        image: "../img/items/heart.jpg"
    },
    {
      id: 6,
      title: "White Flower",
      price: 150,
       category: "Bracelets",
      image: "../img/items/whiteflower.jpg"
    },
    {
      id: 7,
      title: "Red Flower",
      price: 150,
       category: "Bracelets",
      image: "../img/items/redflower.jpg"
    },
    {
      id: 8,
      title: "Flowers",
      price: 600,
      category: "Bracelets",
      image: "../img/items/flowers.jpg"
    }
  ];
  
  

  let cart = [];

  function generateCards(category = "All") {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; 
  

    const filteredProducts = category === "All" ? products : products.filter((p) => p.category === category);
  

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("shop-card");
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-price">$${product.price}</p>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      container.appendChild(card);
    });
  }
  

  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
  
   
    const existingProduct = cart.find((p) => p.id === productId);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCartUI();
  }
  

  function removeFromCart(productId) {
    cart = cart.filter((product) => product.id !== productId);
    updateCartUI();
  }
  

  function updateCartUI() {
    const cartContainer = document.getElementById("cart-details");
    const cartCount = document.getElementById("cart-count");
  

    cartContainer.innerHTML = "";
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      let total = 0;
  
      cart.forEach((product) => {
        total += product.price * product.quantity;
  
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
  
        cartItem.innerHTML = `
          <span>${product.title} (x${product.quantity}) - $${product.price * product.quantity}</span>
          <button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button>
        `;
  
        cartContainer.appendChild(cartItem);
      });
  
      const totalPrice = document.createElement("p");
      totalPrice.classList.add("cart-total");
      totalPrice.innerText = `Total: $${total}`;
      cartContainer.appendChild(totalPrice);
    }
  
    
    const itemCount = cart.reduce((sum, product) => sum + product.quantity, 0);
    cartCount.innerText = itemCount;
  }
  function navigateToCategory(category) {
	generateCards(category);
	const productsContainer = document.getElementById("products-container");
	productsContainer.scrollIntoView({ behavior: "smooth" }); 
  }
 
  window.onload = () => generateCards();
  