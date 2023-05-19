import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Star from "./Star";

import heart from "./../assets/icons/heart.svg";
import heartFilled from "./../assets/icons/heart-filled.svg";
import redHeart from "./../assets/icons/red-heart.svg";
import redHeartFilled from "./../assets/icons/red-heart-filled.svg";
import { notify } from "../App";

export const discountCalc = (realPrice, discountedPrice) => {
  if (discountedPrice) return realPrice - (discountedPrice / 100) * realPrice;
  return realPrice;
};

const SingleProductCard = ({ product, discountBox, heartColor }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imgUrl, name, discount, favorite, price, ratings, stars } = product;

  const handleAddItemToCart = () => {
    addItemToCart(product);
    notify("Item added to cart");
  };
  return (
    <div className="relative flex flex-col justify-between border border-tertiary p-5 font-workSans text-lg font-medium text-primary">
      <div className="flex">
        {heartColor === "black" ? (
          <img src={favorite ? heartFilled : heart} alt="Favorite" />
        ) : (
          <img src={favorite ? redHeartFilled : redHeart} alt="Favorite" />
        )}
      </div>
      <div
        style={{ backgroundColor: discountBox }}
        className={`absolute -top-8 -right-[0.3125rem] flex aspect-square items-center justify-center rounded-full py-8 px-7 font-workSans text-2xl font-medium text-white`}
      >
        {discount}%
      </div>
      <div className="flex min-h-[250px] justify-center">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col">
          <div className="font-workSans text-lg font-medium">{name}</div>
          <div className="flex">
            <s className="mr-5">${price}</s>
            <div className="text-secondary">
              ${discountCalc(price, discount)}
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
            className="flex items-center justify-center border border-primary px-5 py-3"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
