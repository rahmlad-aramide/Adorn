import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { useParams } from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard.jsx";
import { ToastContainer } from "react-toastify";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { capitalizeFirstLetter } from "../lib/helper.js";

const CatalogPage = () => {
  const { name } = useParams();
  console.log(name);
  const { products } = useContext(ProductContext);

  const breadcrumbs = [
    { label: "Catalog", href: "/#catalog", active: false },
    {
      label: capitalizeFirstLetter(name),
      href: `/catalog/${name}`,
      active: true,
    },
  ];

  return (
    <div className=" bg-white py-[4.625rem] px-4 sm:px-8 shadow">
      <ToastContainer />
      <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="mx-auto md:mt-8 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {products
          .filter((product) => product.catalog.toLowerCase() === name)
          .map((product) => (
            <SingleProductCard
              key={product.id}
              product={product}
              heartColor="red"
              discountBox="#121212"
            />
          ))}
      </div>
    </div>
  );
};

export default CatalogPage;
