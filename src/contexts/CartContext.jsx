import { createContext, useState, useEffect } from "react";
import { discountCalc } from "../components/SingleProductCard";

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  totalCount: 0,
  addItemToCart: () => {},
  reduceItemQuantity: () => {},
  removeItemFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const currentCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(currentCount);
  }, [cartItems]);

  useEffect(() => {
    const currentTotal = cartItems.reduce(
      (total, cartItem) =>
        total +
        discountCalc(cartItem.price, cartItem.discount) * cartItem.quantity,
      0
    );
    setTotalCount(currentTotal);
  }, [cartItems]);

  const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  };
  const removeItemFromCart = (ProductToRemove) => {
    setCartItems(removeCartItem(cartItems, ProductToRemove));
  };

  const reduceItem = (cartItems, productToReduce) => {
    const existingItem = cartItems.find(
      (item) => item.id === productToReduce.id
    );

    if (existingItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToReduce.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
  };
  const reduceItemQuantity = (productToReduce) => {
    setCartItems(reduceItem(cartItems, productToReduce));
  };

  const value = {
    cartItems,
    cartCount,
    totalCount,
    addItemToCart,
    reduceItemQuantity,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
