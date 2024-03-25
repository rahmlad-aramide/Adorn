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
    <div className="bg-white px-4 py-[4.625rem] shadow sm:px-8">
      <ToastContainer />
      <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-8 md:grid-cols-3">
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
