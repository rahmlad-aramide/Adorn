import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { useParams } from "react-router-dom";
import SingleProductCard from "../components/SingleProductCard.jsx";
import { ToastContainer } from "react-toastify";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { linkToLabel } from "../lib/helper.js";

const CategoriesPage = () => {
  const { name } = useParams();
  console.log(name);
  const { products } = useContext(ProductContext);

  const categoriesItem = products.filter((product) =>
    product.categories.some(
      (category) => category.toLowerCase().replace(" ", "-") === name
    )
  );

  const breadcrumbs = [
    { label: "Categories", href: "/#categories", active: false },
    {
      label: linkToLabel(name),
      href: `/categories/${name}`,
      active: true,
    },
  ];

  return (
    <div className=" bg-white py-[4.625rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]">
      <ToastContainer />
      <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {categoriesItem.map((product) => (
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

export default CategoriesPage;
