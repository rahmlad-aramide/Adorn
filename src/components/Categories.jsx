import { useContext } from "react";
import GroupedProductCard from "./GroupedProductCard";
import { ProductContext } from "../contexts/ProductContext";

const Categories = (props) => {
  const { products } = useContext(ProductContext);
  const { category } = products[0];

  return (
    <div
      className="mt-[3.5rem] bg-white py-[4.625rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]"
      id="catalogue"
    >
      <div className="pb-6 font-lancelot uppercase">Shop by category</div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {category.map((product) => (
          <GroupedProductCard
            imgUrl={product.imgUrl}
            name={product.name}
            url={product.url}
            key={product.id}
            others={`justify-start`}
            mt={`mt-5`}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
