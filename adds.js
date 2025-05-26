const products = [
  
  {
    name: "Classic Cappuccino",
    price: 4.5,
    image: "images/cappuccino_funcional_3077_orig.jpg",
    desc: "Espresso with steamed milk and frothy foam."
  },
  {
    name: "Vanilla Latte",
    price: 5.0,
    image: "images/coffee-8135371_960_720.jpg",
    desc: "Espresso with vanilla syrup and steamed milk."
  },
  {
    name: "Americano",
    price: 3.75,
    image: "images/Americano-coffee-recipe-1068x712.jpg",
    desc: "Brewed in strong and dark coffee."
  },
  {
    name: "Mocha Delight",
    price: 5.25,
    image: "images/Latte-Macchiato-900x600.jpg",
    desc: "Chocolate-infused espresso with steamed milk."
  },
  {
    name: "Caramel Macchiato",
    price: 5.75,
    image: "images/ec178d83e5f597b162cda1e60cb64194.jpg",
    desc: "Espresso, milk, and caramel drizzle."
  },
  {
    name: "Hot Chocolate",
    price: 6.25,
    image: "images/photos-of-hot-chocolate-in-indoor-studio-ai-generated-photo.jpg",
    desc: "Slow-steeped hot chocolate with smooth finish."
  }
];

const cart = [];

function addToCart(name, price, image) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(name) {
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartItemsDiv.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-details">
        <strong>${item.name} x${item.quantity}</strong>
        <small>$${(item.price * item.quantity).toFixed(2)}</small>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.name}')">🗑️</button>
    `;
    cartItemsDiv.appendChild(itemDiv);
    total += item.price * item.quantity;
  });

  totalElement.textContent = total.toFixed(2);
}

const productsContainer = document.getElementById('products');
products.forEach(prod => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${prod.image}" alt="${prod.name}" />
    <div class="product-details">
      <h3>${prod.name}</h3>
      <p>${prod.desc}</p>
      <div class="price">$${prod.price.toFixed(2)}</div>
      <button onclick="addToCart('${prod.name}', ${prod.price}, '${prod.image}')">Add to Cart</button>
    </div>
  `;
  productsContainer.appendChild(card);
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html"; 
});


const breads = [
  {
    name: "Artisan Sourdough",
    image: "images/simple-sourdough-bread-recipe-homestead-feature.jpeg",
    desc: "Slow-fermented sourdough with a crunchy crust.",
    price: 4.75
  },
  {
    name: "Rustic Baguette",
    image: "images/Baguette-Rustic-FHP_5701.jpg",
    desc: "Golden baguette with soft, airy interior.",
    price: 3.50
  },
  {
    name: "Whole Wheat Loaf",
    image: "images/photo-1509440159596-0249088772ff.jpg",
    desc: "Healthy and hearty whole wheat bread.",
    price: 5.25
  },
  {
    name: "Country Rye Bread",
    image: "images/Caraway-Seed-Rye-Bread_EXPS_FBMZ16_3993_A05_18_1b.jpg",
    desc: "Earthy rye flavor, great with butter or cheese.",
    price: 4.95
  },
  {
    name: "Crusty Dinner Roll",
    image: "images/b03bc5560f53ca892af7227d6a11edc1.jpg",
    desc: "Perfectly portioned, crispy outside, soft inside.",
    price: 2.25
  },
  {
    name: "Seeded Multigrain",
    image: "images/IMG_5633.jpg",
    desc: "Packed with grains and seeds for full texture.",
    price: 5.50
  }
];

const breadGrid = document.getElementById('bread-grid');

breads.forEach(bread => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${bread.image}?auto=format&fit=crop&w=400&q=80" alt="${bread.name}" />
    <div class="product-details">
      <h3>${bread.name}</h3>
      <p>${bread.desc}</p>
      <div class="price">$${bread.price.toFixed(2)}</div>
      <button onclick="addToCart('${bread.name}', ${bread.price}, '${bread.image}')">Add to Cart</button>
    </div>
  `;
  breadGrid.appendChild(card);
});

