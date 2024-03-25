import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SingleProductCard from "./SingleProductCard.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";

const NewArrivals = () => {
  const { products, toggleFavorite } = useContext(ProductContext);
  // const { newArrival } = products[0];
  // const { heartColor = 'red', discountBox="#121212", productsDetails } = newArrival;
  // console.log(productsDetails)
  return (
    <div
      className="mt-[3.5rem] min-h-screen bg-white py-[4.625rem] px-4 sm:px-8"
      id="new-arrivals"
    >
      <div className="mb-[1.125rem] flex justify-between w-full max-w-7xl mx-auto">
        <div className="pb-6 font-lancelot uppercase">New Arrivals</div>
        <Link to="/new-arrivals" className="font-workSans">
          See more
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 gap-y-[3.5rem] md:grid-cols-3 w-full max-w-7xl mx-auto">
        {products
          .filter((product) => product.type === "New Arrivals")
          .slice(0, 6)
          .map((product) => (
            <SingleProductCard
              key={product.id}
              product={product}
              heartColor="red"
              discountBox="#121212"
              toggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default NewArrivals;
