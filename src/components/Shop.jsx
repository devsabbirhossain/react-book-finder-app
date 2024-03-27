import { useState } from "react";
import { allProducts } from "../data/products.js";
import ProductList from "./Shop/ProductList";
import ShopHeader from "./Shop/ShopHeader";

const Shop = () => {
  const [products, setProducts] = useState(allProducts);

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

  function handleSorting(sortingType) {
    if (sortingType === "name_desc") {
      const sortingProduct = products.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });

      setProducts([...sortingProduct]);
    } else if (sortingType === "name_asc") {
      const sortingProduct = products.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      setProducts([...sortingProduct]);
    } else if (sortingType === "year_asc") {
      const sortingProduct = products.sort((a, b) => {
        if (a.publicationYear < b.publicationYear) {
          return -1;
        }
        if (a.publicationYear > b.publicationYear) {
          return 1;
        }
        return 0;
      });
      setProducts([...sortingProduct]);
    } else if (sortingType === "year_desc") {
      const sortingProduct = products.sort((a, b) => {
        if (a.publicationYear > b.publicationYear) {
          return -1;
        }
        if (a.publicationYear < b.publicationYear) {
          return 1;
        }
        return 0;
      });
      setProducts([...sortingProduct]);
    } else {
      const sortingProduct = products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.publicationYear > b.publicationYear) {
          return 1;
        }
        return 0;
      });
      setProducts([...sortingProduct]);
    }
  }
  return (
    <main className="my-10 lg:my-14">
      <ShopHeader onSearch={handleSearch} onSort={handleSorting} />
      <ProductList products={products} onFav={handleOnFav} />
    </main>
  );
};

export default Shop;
