import { useContext } from "react";
import { EmptyCart, FilledCart, TopSelling } from "../components";
import { CartContext } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  return (
    <div className="flex min-h-screen flex-col justify-center bg-tertiary/10 pt-20">
      <ToastContainer />
      <div className="mt-4 flex justify-center">
        <div className="my-auto flex w-[90%] max-w-[1140px] items-center justify-center">
          {cartCount === 0 ? (
            <EmptyCart />
          ) : (
            <FilledCart cartItems={cartItems} />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-[90%] max-w-[1140px]">
          <TopSelling />
        </div>
      </div>
    </div>
  );
};

export default Cart;
