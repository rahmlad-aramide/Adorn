import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { inform, notify } from "../App";
import bin from "../assets/icons/trash-can.svg";
import { discountCalc } from "./SingleProductCard";
import { formatter } from "./FilledCart";
// import {discountCount} from "./SingleProductCard";

const FilledCartCard = ({ item }) => {
  const { removeItemFromCart, addItemToCart, reduceItemQuantity } =
    useContext(CartContext);

  const handleRemoveItem = () => {
    removeItemFromCart(item);
    inform("A product was removed from the cart!");
  };
  const handleIncreaseQuantity = () => {
    addItemToCart(item);
    notify("A quantity was added!");
  };
  const handleReduceQuantity = () => {
    reduceItemQuantity(item);
    inform("A quantity was reduced!");
  };

  return (
    <div className="border-light m-4 flex justify-between border-t">
      <div className="mt-5 flex flex-col justify-between">
        <div className="mb-3 grid grid-cols-12 gap-4">
          <div className="col-span-2 rounded-lg border p-3">
            <img src={item.imgUrl} alt="" />
          </div>
          <div className="col-span-10 flex flex-col justify-center">
            <div className="text-xl font-medium">{item.name} </div>
            <div>Category: Chair </div>
          </div>
        </div>
        <button
          onClick={handleRemoveItem}
          className="flex items-center rounded-lg px-2 py-1.5 text-lg font-semibold text-secondary hover:bg-secondary/20 active:scale-100"
        >
          <img src={bin} alt="Remove" className="mr-2 h-5 text-secondary" />
          <span>Remove</span>
        </button>
      </div>
      <div className="flex flex-col justify-between text-right">
        <div className="my-3">
          <div className="mb-1 text-2xl font-medium">
            {" "}
            <s>N</s>
            {item.discount !== null
              ? discountCalc(item.price, item.discount)
              : item.price}
          </div>
          {item.discount && (
            <div className="flex justify-end text-xl">
              <s>N{item.price}</s>
              <span className="ml-3 rounded bg-secondary/20 py-0.5 px-1.5 text-center text-sm text-secondary">
                -{item.discount}%
              </span>
            </div>
          )}
        </div>
        <div className="my-2 w-full">
          <div className="flex">
            Subtotal: <s className="ml-2">N</s>
            {formatter.format(
              discountCalc(item.price, item.discount) * item.quantity
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleReduceQuantity}
            disabled={item.quantity === 1}
            className="duration rounded-md bg-secondary px-3 text-lg font-bold text-white shadow-lg transition hover:scale-90 active:scale-100 disabled:cursor-not-allowed disabled:bg-secondary/40 disabled:shadow-none"
          >
            &minus;
          </button>
          <span className="mx-2 px-2 py-1 text-xl font-medium text-primary">
            {item.quantity}
          </span>
          <button
            onClick={handleIncreaseQuantity}
            className="duration rounded-md bg-secondary px-3 text-lg font-bold text-white shadow-lg transition hover:scale-90 active:scale-100"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilledCartCard;
