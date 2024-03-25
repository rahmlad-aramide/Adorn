import { useContext } from "react";
import GroupedProductCard from "./GroupedProductCard.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";

const Catalog = () => {
  const { products } = useContext(ProductContext);
  const uniqueCatalogItems = Object.values(
    products.reduce((acc, item) => {
      // If the catalog has not been added to the accumulator, add it
      if (!acc[item.catalog]) {
        acc[item.catalog] = item;
      }
      return acc;
    }, {})
  );

  return (
    <div
      className="mt-[3.5rem] bg-white py-[4.625rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]"
      id="catalog"
    >
      <div className="mx-auto w-full max-w-7xl pb-6 font-lancelot uppercase">
        Catalog
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {uniqueCatalogItems.map((product) => (
          <GroupedProductCard
            imgUrl={product.images[0]}
            name={product.catalog}
            url={`/catalog/${product.catalog.toLowerCase()}`}
            key={product.id}
            others={`justify-center`}
            mt={`mt-3`}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
