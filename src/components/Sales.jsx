import React from "react";
import { sale, discountBox, heartColor } from "../data/sale.js";
import { Link } from "react-router-dom";
import SingleProductCard from "./SingleProductCard.jsx";

const Sales = () => {
  return (
    <div
      className="mt-[3.5rem] min-h-screen bg-white py-[4.625rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]"
      id="catalogue"
    >
      <div className="mb-[1.125rem] flex justify-between">
        <div className="pb-6 font-lancelot uppercase">On Sale</div>
        <Link to="/" className="font-workSans">
          See more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 gap-y-[3.5rem] md:grid-cols-3">
        {sale.map((product, index) => (
          <SingleProductCard
            key={index}
            product={product}
            discountBox={discountBox}
            heartColor={heartColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Sales;
