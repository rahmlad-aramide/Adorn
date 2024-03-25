import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SingleProductCard from "./SingleProductCard.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";

const Sales = () => {
  const { products, toggleFavorite } = useContext(ProductContext);
  return (
    <div
      className="mt-[3.5rem] min-h-screen bg-white py-[4.625rem] px-4 sm:px-8"
      id="on-sale"
    >
      <div className="mx-auto mb-[1.125rem] flex w-full max-w-7xl justify-between">
        <div className="pb-6 font-lancelot uppercase">On Sale</div>
        <Link to="/on-sale" className="font-workSans">
          See more
        </Link>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 gap-y-[3.5rem] md:grid-cols-3">
        {products
          .filter((product) => product.type === "On Sale")
          .slice(0, 6)
          .map((product) => (
            <SingleProductCard
              key={product.id}
              product={product}
              heartColor="black"
              discountBox="#F87979"
              toggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default Sales;
