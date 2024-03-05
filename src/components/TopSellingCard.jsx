import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { notify } from "../App";

const ShopCard = ({ product, index }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imgUrl, name, price } = product;

  const handleAddItemToCart = () => {
    addItemToCart(product);
    notify("Item added to cart");
  };
  return (
    <div
      key={index}
      className="relative flex flex-col justify-between border border-tertiary p-5 font-workSans text-lg font-medium text-primary"
    >
      <div className="flex min-h-[250px] justify-center">
        <img src={imgUrl} alt={name} />
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
            className="flex items-center justify-center border border-primary px-5 py-3"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
