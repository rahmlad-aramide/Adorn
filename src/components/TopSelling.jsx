import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { TopSellingCard } from "../components";

const TopSelling = () => {
  const { products } = useContext(ProductContext);
  // const { newArrival } = products[0];
  // const { heartColor, discountBox, productsDetails } = newArrival;

  return (
    <div className="bg-white py-8" id="catalogue">
      <div className="mt-[1.125rem] mb-2.5 mx-auto flex w-full max-w-7xl justify-between">
        <div className="pb-6 font-lancelot uppercase">Top Selling Items</div>
        <Link to="/" className="font-workSans">
          See more
        </Link>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 gap-y-[3.5rem] md:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <TopSellingCard
            key={product.id}
            product={product}
            discountBox={"#121212"}
            heartColor={"red"}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
