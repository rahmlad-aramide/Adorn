import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
})

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [quantityCount, setQuantityCount] = useState(1);

    useEffect(()=> {
        const currentCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
        setCartCount(currentCount);
    }, [cartItems]);
    
    const increaseItemFunction = (cartItems, productToIncrease) => {
        return cartItems.map(cartItem=> cartItem.id === productToIncrease.id ? productToIncrease.quantity += 1 : "");
    }
    const increaseItemQuantity = (productToIncrease) => {
        setQuantityCount(increaseItemFunction(cartItems, productToIncrease))
    }

    const reduceItemFunction = (cartItems, productToReduce) => {
        return cartItems.map(cartItem=> cartItem.id === productToReduce.id ? productToReduce.quantity -= 1 : "");
    }
    const reduceItemQuantity = (productToReduce) => {
        setQuantityCount(reduceItemFunction(cartItems, productToReduce))
    }

    
    const addCartItem = (cartItems, productToAdd) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
        
        if (existingItem) {
            return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
        }
        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeCartItem = (cartItems, productToRemove) => {
        return cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id)
    }
    const removeItemFromCart = (ProductToRemove) => {
        setCartItems(removeCartItem(cartItems, ProductToRemove))
    }
    const value = { cartItems, quantityCount, cartCount, addItemToCart, removeItemFromCart, increaseItemQuantity, reduceItemQuantity }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider;