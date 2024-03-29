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
          <div className="ml-4 flex cursor-pointer flex-row items-center justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.5187rem] md:flex-col">
            <img
              className="mr-3 w-[20px] opacity-75 md:mr-0 md:w-[24px]"
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
          <img
            className="w-[20px] opacity-75 md:w-[24px]"
            src={logout}
            alt="Login"
          />
          <div className="text-lg md:text-sm">Sign Out</div>
        </div>
      )}
    </>
  );
};
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="fixed z-[9999] flex h-[4.3125rem] w-full items-center bg-white px-4 shadow-md sm:px-4">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
              className="mr-3 block active:scale-90 md:hidden"
            >
              <div className="mb-[3px] h-[3px] w-5 rounded bg-tertiary"></div>
              <div className="mb-[3px] h-[3px] w-5 rounded bg-tertiary"></div>
              <div className="mb-[3px] h-[3px] w-5 rounded bg-tertiary"></div>
            </button>
            <div className="font-lancelot text-3xl md:text-5xl">
              <Link to="/" className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dh4rm7b7b/image/upload/w_64,r_max/v1710249074/Adorn/Adorn_logo_xric3y.webp"
                  alt="Adorn"
                  className="mr-2 -mt-2 aspect-square w-10"
                />
                Adorn
              </Link>
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
            <Link to="/favorites">
              <div className="ml-4 hidden cursor-pointer flex-col justify-center transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.9375rem] md:flex">
                <img src={heart} alt="Favorites" className="h-6" />
                <div className="text-sm">Favorites</div>
              </div>
            </Link>
            <Link to="/cart">
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
        <div
          className={`absolute top-0 left-0 block h-screen w-[70%] bg-white md:hidden ${
            !isNavOpen && `-translate-x-full`
          } transition duration-300`}
        >
          <button
            className="ml-4 mt-1 text-4xl font-medium active:scale-90"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            &times;
          </button>
          <div className="pt-3">
            <div className="mb-3 text-center font-lancelot text-3xl md:text-5xl">
              <Link to="/">Adorn</Link>
            </div>
            <Search />
            <Link to="/favorites">
              <div className="mt-3 ml-4 flex cursor-pointer flex-row items-center justify-start transition duration-200 hover:scale-125 active:scale-100 md:ml-[3.9375rem] md:flex-col">
                <img
                  src={heart}
                  alt="Favorites"
                  className="my-auto mr-3 h-5 md:h-6"
                />
                <div className="text-lg md:text-sm">Favorites</div>
              </div>
            </Link>
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
