import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext({
  products: [],
  toggleFavorite: () => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const toggleFavorite = (productToToggle) => {
    const updatedProducts = products.map((product) =>
      product.id === productToToggle.id
        ? { ...product, favorite: !product.favorite }
        : product
    );
    setProducts(updatedProducts);
  };
  const value = { products, toggleFavorite };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export default ProductProvider;
