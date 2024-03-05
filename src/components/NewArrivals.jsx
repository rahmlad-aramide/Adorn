import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SingleProductCard from "./SingleProductCard.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";

const NewArrivals = (props) => {
  const { products } = useContext(ProductContext);
  const { newArrival } = products[0];
  const { heartColor, discountBox, productsDetails } = newArrival;
  // console.log(productsDetails)
  return (
    <div
      className="mt-[3.5rem] min-h-screen bg-white py-[4.625rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]"
      id="catalogue"
    >
      <div className="mb-[1.125rem] flex justify-between">
        <div className="pb-6 font-lancelot uppercase">New Arrivals</div>
        <Link to="/" className="font-workSans">
          See more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 gap-y-[3.5rem] md:grid-cols-3">
        {productsDetails.map((product) => (
          <SingleProductCard
            key={product.id}
            product={product}
            heartColor={heartColor}
            discountBox={discountBox}
          />
        ))}
      </div>
    </div>
  );
};

NewArrivals.propTypes = {};

export default NewArrivals;
