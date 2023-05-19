import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Search } from "../components";
import { UserContext } from "../contexts/UserContext";
import { signUserOut } from "../lib/firebase/firebase.utils";
import userImg from "./../assets/icons/avatar.svg";
import heart from "./../assets/icons/favorite.svg";
import cart from "./../assets/icons/cart.svg";
import login from "./../assets/icons/login.png";
import logout from "./../assets/icons/logout.png";
import { notify } from "../App";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const handleSignOut = async () => {
    await signUserOut();
    notify("Signed out successfully");
  };

  return (
    <>
      <div className="fixed z-[9999] flex h-[4.3125rem] w-full items-center bg-white shadow-md">
        <div className="mx-auto flex w-[90%] max-w-[1140px] items-center justify-between">
          <div className="font-lancelot text-3xl md:text-5xl">
            <Link to="/">Adorn</Link>
          </div>
          <div>
            <Search />
          </div>
          <div className="flex">
            <Link to="account">
              <div className="flex cursor-pointer flex-col justify-center transition duration-200 hover:scale-125 active:scale-100">
                <img src={userImg} alt="Avatar" className="h-6" />
                <div className="text-sm">Account</div>
              </div>
            </Link>
            <div className="ml-4 flex cursor-pointer flex-col justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.9375rem]">
              <img src={heart} alt="Favorites" className="h-6" />
              <div className="text-sm">Favorites</div>
            </div>
            <Link to="cart">
              <div className="ml-4 flex cursor-pointer flex-col justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.5187rem]">
                <img src={cart} alt="Cart" className="h-6" />
                <div className="text-sm">Cart</div>
              </div>
            </Link>
            {!user ? (
              <Link to="/sign-in" className="flex">
                <div className="ml-4 flex cursor-pointer flex-col items-center justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.5187rem]">
                  <img
                    className="w-[24px] opacity-75"
                    src={login}
                    alt="Login"
                  />
                  <div className="text-sm">Sign In</div>
                </div>
              </Link>
            ) : (
              <div
                onClick={handleSignOut}
                className="ml-4 flex cursor-pointer flex-col items-center justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.5187rem]"
              >
                <img className="w-[24px] opacity-75" src={logout} alt="Login" />
                <div className="text-sm">Sign Out</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
