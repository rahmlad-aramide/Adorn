import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { TopSellingCard } from "../components";

const TopSelling = () => {
  const { products } = useContext(ProductContext);
  const { newArrival } = products[0];
  const { heartColor, discountBox, productsDetails } = newArrival;

  return (
    <div
      className="my-[3.5rem] bg-white py-[4.625rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]"
      id="catalogue"
    >
      <div className="mb-[1.125rem] flex justify-between">
        <div className="pb-6 font-lancelot uppercase">Top Selling Items</div>
        <Link to="/" className="font-workSans">
          See more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 gap-y-[3.5rem] md:grid-cols-3">
        {productsDetails.slice(0, 3).map((product) => (
          <TopSellingCard
            key={product.id}
            product={product}
            discountBox={discountBox}
            heartColor={heartColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
