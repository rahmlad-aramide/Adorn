import GroupedProductCard from "./GroupedProductCard";
import { categories } from "../data";

const Categories = () => {
  return (
    <div
      className="mt-[3.5rem] bg-white py-[4.625rem] px-4 sm:px-8"
      id="categories"
    >
      <div className="mx-auto w-full max-w-7xl pb-6 font-lancelot uppercase">
        Shop by category
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        {categories.map((product) => (
          <GroupedProductCard
            imgUrl={product.imgUrl}
            name={product.name}
            url={`/categories/${product.name.toLowerCase().replace(" ", "-")}`}
            key={product.name}
            others={`justify-start`}
            mt={`mt-5`}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
