import cartIcon from "../assets/icons/colored-cart.svg";
import { HashLink } from "react-router-hash-link";

const EmptyCart = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center rounded bg-white py-10 font-workSans">
      <div className="mb-6">
        <img src={cartIcon} alt="Cart" />
      </div>
      <div className="mb-4 font-medium text-tertiary">Your cart is empty!</div>
      <div className="mb-6 px-4 text-center text-sm">
        Browse our categories and catalog to discover our best deals!
      </div>
      <div>
        <HashLink to="/#catalogue">
          <button className="rounded-lg bg-secondary py-3 px-6 font-bold uppercase text-white transition duration-300 hover:scale-90 active:scale-100">
            Start Shopping
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default EmptyCart;
