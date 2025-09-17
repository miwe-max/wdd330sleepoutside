<<<<<<< HEAD
// imports (don’t import the same name twice)
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
=======
import { getParam } from "./utils.mjs";
>>>>>>> 7d48710c51b720cdb650a9e7bee97c41bf54ab7d
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

<<<<<<< HEAD
// ALWAYS treat the cart as an array
function addProductToCart(product) {
  let cart = getLocalStorage("so-cart");

  // Normalize: if nothing there, or something wrong (object/string), start fresh as []
  if (!Array.isArray(cart)) cart = [];
=======
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }
>>>>>>> 7d48710c51b720cdb650a9e7bee97c41bf54ab7d

  cart.push(product);
  setLocalStorage("so-cart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  // Use currentTarget to avoid issues if inner elements are clicked
  const id = e.currentTarget?.dataset?.id || e.target?.dataset?.id;
  if (!id) return; // optionally show a user message

  const product = await dataSource.findProductById(id);
  addProductToCart(product);
}

// Make sure the element exists on this page before adding the listener
const btn = document.getElementById("addToCart");
if (btn) {
  btn.addEventListener("click", addToCartHandler);
}
