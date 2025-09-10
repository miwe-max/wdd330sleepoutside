import ProductData from "./ProductData.mjs";
import ProductList from "./PoductList.mjs";

const dataSource = new ProductData("tents");
const list = new ProductList("tents", dataSource);