import { createContext, useState } from "react";
import { productsData } from "../data/data";

export const ProductContext = createContext({
    products: []
})

const ProductProvider = ({children}) => {
    const [products] = useState(productsData)
    const value = {products}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
export default ProductProvider