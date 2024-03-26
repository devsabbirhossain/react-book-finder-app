import ProductList from "./Shop/ProductList";
import ShopHeader from "./Shop/ShopHeader";

const Shop = () => {
  return (
    <main className="my-10 lg:my-14">
      <ShopHeader />
      <ProductList />
    </main>
  );
};

export default Shop;
