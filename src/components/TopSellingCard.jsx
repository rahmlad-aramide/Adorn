import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { notify } from "../App";
import { Link } from "react-router-dom";

const ShopCard = ({ product, index }) => {
  const { addItemToCart } = useContext(CartContext);
  const { images, name, price } = product;

  const handleAddItemToCart = () => {
    addItemToCart(product);
    notify("Item added to cart");
  };
  return (
    <div
      key={index}
      className="relative flex flex-col justify-between border border-tertiary p-5 font-workSans text-lg font-medium text-primary"
    >
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
        <div className="flex w-full justify-between">
          <div className="font-workSans text-lg font-medium">{name}</div>
          <div className="flex">
            <div className="text-secondary">${price}</div>
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

export default ShopCard;
