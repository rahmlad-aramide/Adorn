import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import FilledCartCard from "./FilledCartCard";

export const formatter = new Intl.NumberFormat("ng-NG", {
  minimumFractionDigits: 2,
});

const FilledCart = ({ cartItems }) => {
  const { cartCount, totalCount } = useContext(CartContext);

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-0 py-4 font-workSans md:gap-8">
      <div className="col-span-12 bg-white shadow md:col-span-9">
        <div className="m-4 mb-2 text-2xl font-medium text-[#121212]">
          Cart ({cartCount})
        </div>
        {cartItems.map((item) => (
          <FilledCartCard key={item.id} item={item} />
        ))}
      </div>
      <div className="col-span-12 mb-auto mt-4 bg-white shadow md:col-span-3 md:mt-0">
        <div className="m-4 flex flex-col justify-between">
          <div>
            <div className="border-light border-b py-2 text-lg text-[#121212]">
              Cart Summary
            </div>
            <div className="my-4 flex items-center justify-between">
              <div className="font-medium">Total: </div>
              <div className="text-2xl font-medium">
                <s>N</s>
                {formatter.format(totalCount)}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mt-8 w-full bg-secondary py-2 px-6 font-bold uppercase text-white transition duration-300 hover:scale-90 active:scale-100">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
