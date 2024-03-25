import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Star from "./Star";

import heart from "./../assets/icons/heart.svg";
import heartFilled from "./../assets/icons/heart-filled.svg";
import redHeart from "./../assets/icons/red-heart.svg";
import redHeartFilled from "./../assets/icons/red-heart-filled.svg";
import { notify } from "../App";
import { Link } from "react-router-dom";

export const discountCalc = (realPrice, discountedPrice) => {
  if (discountedPrice) return realPrice - (discountedPrice / 100) * realPrice;
  return realPrice;
};

const SingleProductCard = ({
  product,
  discountBox,
  heartColor,
  toggleFavorite,
}) => {
  const [loading, setLoading] = useState(true);
  const { addItemToCart } = useContext(CartContext);
  // const {toggleFavorite} = useContext(ProductContext);
  const { images, name, discount, favorite, price, ratings, stars } = product;

  const handleAddItemToCart = () => {
    addItemToCart(product);
    notify("Item added to cart");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="relative flex animate-pulse flex-col justify-between border border-tertiary p-5 font-workSans text-lg font-medium text-primary">
        <div className="absolute -top-8 -right-[0.3125rem] z-50 h-16 w-16 rounded-full bg-gray-300"></div>{" "}
        {/* Placeholder for discount */}
        <div className="group relative flex min-h-[280px] justify-center">
          <div className="h-full w-full bg-gray-300"></div>{" "}
          {/* Placeholder for product image */}
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex w-1/2 flex-col">
            <div className="mb-2 h-6 w-3/4 rounded bg-gray-300"></div>{" "}
            {/* Placeholder for product name */}
            <div className="flex">
              <div className="mr-5 h-6 w-1/4 rounded bg-gray-300"></div>{" "}
              {/* Placeholder for price */}
              <div className="h-6 w-1/4 rounded bg-gray-300"></div>{" "}
              {/* Placeholder for discounted price */}
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-6 w-10 rounded bg-gray-300"></div>{" "}
            {/* Placeholder for ratings */}
            <div className="h-6 w-24 rounded bg-gray-300"></div>{" "}
            {/* Placeholder for stars */}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-3 flex items-center justify-center">
            <div className="h-12 w-32 rounded bg-gray-300"></div>{" "}
            {/* Placeholder for button */}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex flex-col justify-between border border-tertiary p-5 font-workSans text-lg font-medium text-primary">
      <div className="flex">
        {heartColor === "black" ? (
          <img
            onClick={() => toggleFavorite(product)}
            src={favorite ? heartFilled : heart}
            alt="Favorite"
            className="cursor-pointer transition duration-200 active:scale-90"
          />
        ) : null}
        {heartColor === "red" ? (
          <img
            onClick={() => toggleFavorite(product)}
            src={favorite ? redHeartFilled : redHeart}
            alt="Favorite"
            className="cursor-pointer transition duration-200 active:scale-90"
          />
        ) : null}
      </div>
      {discount ? (
        <div
          style={{ backgroundColor: discountBox }}
          className={`absolute -top-8 -right-[0.3125rem] z-50 flex aspect-square w-fit max-w-[84px] items-center justify-center rounded-full p-6 font-workSans text-2xl font-medium text-white`}
        >
          {discount}%
        </div>
      ) : null}
      <div className="group relative flex min-h-[250px] justify-center">
        <Link
          to={`/products/${product.id}`}
          className="flex items-center justify-center"
        >
          <img src={images[0]} alt={name} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 backdrop-blur transition-opacity duration-300 ease-in group-hover:opacity-100">
            <svg
              fill="#fff"
              height="64px"
              width="64px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488.85 488.85"
              xmlSpace="preserve"
            >
              <path d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col">
          <div className="font-workSans text-lg font-medium">{name}</div>
          <div className="flex">
            <s className="mr-5">${price.toFixed(2)}</s>
            <div className="text-secondary">
              ${discountCalc(price, discount).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="pr-1">{ratings}K</div>
          <div className="flex">
            <Star stars={stars} />
          </div>
        </div>
      </div>
      <div className={`flex justify-center`}>
        <div className={`mt-3 flex items-center justify-center`}>
          <button
            onClick={handleAddItemToCart}
            className="flex items-center justify-center border border-primary px-5 py-3 transition duration-200 hover:bg-primary hover:text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
