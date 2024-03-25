import { useContext } from "react";
import { EmptyCart, FilledCart, TopSelling } from "../components";
import { CartContext } from "../contexts/CartContext";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  return (
    <div className="flex min-h-screen flex-col justify-center bg-white px-4 pt-20 sm:px-8">
      <ToastContainer />
      <div className="mt-4 flex justify-center">
        <div className="my-auto mx-auto flex w-full max-w-7xl items-center justify-center">
          {cartCount === 0 ? (
            <EmptyCart />
          ) : (
            <FilledCart cartItems={cartItems} />
          )}
        </div>
      </div>
      <TopSelling />
    </div>
  );
};

export default Cart;
