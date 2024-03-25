import heartIcon from "../assets/icons/red-heart-filled.svg";
import { HashLink } from "react-router-hash-link";

const EmptyFavorites = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center rounded bg-white py-10 font-workSans">
      <div className="mb-6 rounded-full bg-tertiary/10 p-4">
        <img src={heartIcon} alt="Favorite" className="h-24" />
      </div>
      <div className="mb-4 font-medium text-tertiary text-center">
        You haven't marked any product as favorite.
      </div>
      <div className="mb-6 px-4 text-center text-sm">
        Browse our categories and catalog to discover our best deals where you
        can mark any as favorite!
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

export default EmptyFavorites;
