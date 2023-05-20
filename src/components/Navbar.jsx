import { useContext, useState } from "react";
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

const SignOutHandler = ({ user }) => {
  const handleSignOut = async () => {
    await signUserOut();
    notify("Signed out successfully");
  };
  return (
    <>
      {!user ? (
        <Link to="/sign-in" className="flex">
          <div className="ml-4 flex cursor-pointer flex-row md:flex-col items-center justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.5187rem]">
            <img
              className="w-[20px] md:w-[24px] opacity-75 mr-3 md:mr-0"
              src={login}
              alt="Login"
            />
            <div className="text-lg md:text-sm">Sign In</div>
          </div>
        </Link>
      ) : (
        <div
          onClick={handleSignOut}
          className="ml-4 flex cursor-pointer flex-col items-center justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.5187rem]"
        >
          <img className="w-[20px] md:w-[24px] opacity-75" src={logout} alt="Login" />
          <div className="text-lg md:text-sm">Sign Out</div>
        </div>
      )}
    </>
  )
}
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="fixed z-[9999] flex h-[4.3125rem] w-full items-center bg-white shadow-md">
        <div className="mx-auto flex w-[90%] max-w-[1140px] items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => { setIsNavOpen(!isNavOpen) }} className="mr-3 block md:hidden active:scale-90">
              <div className="w-5 h-[3px] rounded bg-tertiary mb-[3px]"></div>
              <div className="w-5 h-[3px] rounded bg-tertiary mb-[3px]"></div>
              <div className="w-5 h-[3px] rounded bg-tertiary mb-[3px]"></div>
            </button>
            <div className="font-lancelot text-3xl md:text-5xl">
              <Link to="/">Adorn</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Search />
          </div>
          <div className="flex">
            <Link to="account">
              <div className="flex cursor-pointer flex-col justify-center transition duration-200 hover:scale-125 active:scale-100">
                <img src={userImg} alt="Avatar" className="h-6" />
                <div className="text-sm">Account</div>
              </div>
            </Link>
            <div className="ml-4 hidden md:flex cursor-pointer flex-col justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.9375rem]">
              <img src={heart} alt="Favorites" className="h-6" />
              <div className="text-sm">Favorites</div>
            </div>
            <Link to="cart">
              <div className="ml-4 flex cursor-pointer flex-col justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.5187rem]">
                <img src={cart} alt="Cart" className="h-6" />
                <div className="text-sm">Cart</div>
              </div>
            </Link>
            <div className="hidden md:block">
              <SignOutHandler user={user} />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className={`hidden md:hidden h-screen w-[70%] bg-white absolute top-0 left-0 ${isNavOpen && `-translate-x-full`} transition duration-300`}>
          <button className="text-4xl font-medium ml-4 mt-1 active:scale-90" onClick={() => setIsNavOpen(!isNavOpen)}>
            &times;
          </button>
          <div className="pt-3">
            <div className="font-lancelot text-3xl md:text-5xl text-center mb-3">
              <Link to="/">Adorn</Link>
            </div>
            <Search />
            <div className="mt-3 ml-4 flex cursor-pointer flex-row md:flex-col justify-start items-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.9375rem]">
              <img src={heart} alt="Favorites" className="h-5 md:h-6 my-auto mr-3" />
              <div className="text-lg md:text-sm">Favorites</div>
            </div>
            <div className="mt-3">
              <SignOutHandler user={user} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
