import { useState } from "react";
import { Products } from "../data/products.js";
import ProductList from "./Shop/ProductList.jsx";
import ShopHeader from "./Shop/ShopHeader.jsx";

const Shop = () => {
  const [products, setProducts] = useState(Products);

  function handleOnFav(productId) {
    const productsIndex = products.findIndex(
      (product) => product.id === productId
    );

    const newProducts = [...products];
    newProducts[productsIndex].isFavorite =
      !newProducts[productsIndex].isFavorite;
    setProducts(newProducts);
  }

  function handleSearch(searchTerm) {
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts([...filterProducts]);
  }
  return (
    <main className="my-10 lg:my-14">
      <ShopHeader onSearch={handleSearch} />
      <ProductList products={products} onFav={handleOnFav} />
    </main>
  );
};

export default Shop;
