import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import SingleProductCard from "../components/SingleProductCard.jsx";
import { ToastContainer } from "react-toastify";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import EmptyFavorites from "../components/EmptyFavorites.jsx";
import TopSelling from "../components/TopSelling.jsx";

const Favorites = () => {
  const { products, toggleFavorite } = useContext(ProductContext);

  const favoriteItems = products.filter((product) => product.favorite);

  const breadcrumbs = [
    { label: "Favorites", href: "/favorites", active: true },
  ];

  return (
    <div className=" bg-white py-[4.625rem] px-4 sm:px-8">
      <ToastContainer />
      <div className="w-full max-w-7xl md:mx-auto">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      {!favoriteItems || favoriteItems.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 bg-white sm:grid-cols-2 md:grid-cols-3">
          {favoriteItems.map((product) => (
            <SingleProductCard
              key={product.id}
              product={product}
              heartColor="red"
              discountBox="#121212"
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
      <TopSelling />
    </div>
  );
};

export default Favorites;
