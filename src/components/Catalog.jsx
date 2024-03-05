import { useContext } from "react";
import GroupedProductCard from "./GroupedProductCard.jsx";
import { ProductContext } from "../contexts/ProductContext.jsx";
import PropTypes from "prop-types";

const Catalog = (props) => {
  const { products } = useContext(ProductContext);
  const { catalog } = products[0];
  return (
    <div
      className="mt-[3.5rem] bg-white py-[4.625rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]"
      id="catalogue"
    >
      <div className="pb-6 font-lancelot uppercase">Catalog</div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {catalog.map((product) => (
          <GroupedProductCard
            imgUrl={product.imgUrl}
            name={product.name}
            url={product.url}
            key={product.id}
            others={`justify-center`}
            mt={`mt-3`}
          />
        ))}
      </div>
    </div>
  );
};

Catalog.propTypes = {};

export default Catalog;
