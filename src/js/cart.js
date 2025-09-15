import { getLocalStorage, renderNumberOfItemsBackpack } from "./utils.mjs";

function renderCartContents() {
  // adding a check to see if the cart is empty
  const cartItems = getLocalStorage("so-cart");
  if (cartItems === null) {
    document.querySelector(".product-list").textContent = "Your cart is empty!";
  } else {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
      onerror="this.onerror=null; this.src='../images/tents/tent.webp'";
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

// function to render tne superscript number of items in backpack
renderNumberOfItemsBackpack(document.querySelector("#cart-numbers"), "so-cart");
