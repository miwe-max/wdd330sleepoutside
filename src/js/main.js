import ProductData from "./ProductData.mjs";
import ProductList from "./PoductList.mjs";
import { renderNumberOfItemsBackpack } from "./utils.mjs";

const listElement = document.querySelector(".product-list");

const dataSource = new ProductData("tents");

const productList = new ProductList("tents", dataSource, listElement);
productList.init();

// function to render tne superscript number of items in backpack
renderNumberOfItemsBackpack(document.querySelector("#cart-numbers"), "so-cart");
