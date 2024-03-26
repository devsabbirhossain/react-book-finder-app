import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductList = ({ products, onFav }) => {
  const allProducts = products.map((product) => {
    var reviews = [];
    for (var i = 0; i < product.reviews; i++) {
      reviews.push(i);
    }
    return (
      <div className="space-y-3" key={product.id}>
        <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
          <img className="max-w-[144px]" src={product.img} alt="book name" />
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-bold lg:text-xl">{product.name}</h4>
          <p className="text-xs lg:text-sm">
            <strong>By : </strong>
            <span>{product.author}</span>
          </p>
          <p className="text-xs lg:text-sm">
            <strong>Publication Year : </strong>
            <span>{product.publicationYear}</span>
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold lg:text-xl">${product.price}</h4>
            <div className="flex items-center space-x-1">
              {reviews.map((review) => {
                return (
                  <div className="text-yellow-400" key={review}>
                    <AiFillStar />
                  </div>
                );
              })}
              <span className="text-xs lg:text-sm">
                ({product.reviews} Star)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-sm justify-between">
            <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
              <AiOutlineShoppingCart />
              Add to Cart
            </button>
            <button
              className={
                product.isFavorite
                  ? "flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                  : "flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5"
              }
              onClick={() => onFav(product.id)}>
              {product.isFavorite ? <AiOutlineHeart /> : <AiFillHeart />}
              Favourite
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allProducts}
    </div>
  );
};

export default ProductList;
