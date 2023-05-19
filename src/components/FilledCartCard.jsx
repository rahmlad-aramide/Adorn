import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { inform, notify } from "../App";
import bin from "../assets/icons/trash-can.svg";
import {discountCalc} from "./SingleProductCard"
import {formatter} from "./FilledCart";
// import {discountCount} from "./SingleProductCard";

const FilledCartCard = ({ item }) => {
    const { removeItemFromCart, addItemToCart, reduceItemQuantity } = useContext(CartContext);
    
    const handleRemoveItem = () => {
        removeItemFromCart(item);
        inform("A product was removed from the cart!")
    }
    const handleIncreaseQuantity = () => {
        addItemToCart(item);
        notify("A quantity was added!");
    }
    const handleReduceQuantity = () => {
        reduceItemQuantity(item);
        inform("A quantity was reduced!")
    }
    
    return (
        <div className='flex justify-between m-4 border-t border-light'>
            <div className='flex flex-col justify-between mt-5'>
                <div className='grid grid-cols-12 gap-4 mb-3'>
                    <div className='col-span-2 border rounded-lg p-3'>
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className='col-span-10 flex flex-col justify-center'>
                        <div className='font-medium text-xl'>{item.name} </div>
                        <div>Category: Chair </div>
                    </div>
                </div>
                <button onClick={handleRemoveItem} className='flex items-center font-semibold text-secondary text-lg active:scale-100 hover:bg-secondary/20 px-2 py-1.5 rounded-lg'>
                   <img src={bin} alt="Remove" className='h-5 mr-2 text-secondary' /> 
                   <span>Remove</span>
                </button>
            </div>
            <div className='flex flex-col justify-between text-right'>
                <div className='my-3'>
                    <div className='text-2xl font-medium mb-1'> <s>N</s>{item.discount !== null? discountCalc(item.price, item.discount) : item.price}</div>
                    {item.discount && <div className='flex justify-end text-xl'><s>N{item.price}</s><span className='ml-3 py-0.5 px-1.5 text-center rounded bg-secondary/20 text-secondary text-sm'>-{item.discount}%</span></div>}
                </div>
                <div className="my-2 w-full">
                    <div className="flex">Subtotal: <s className="ml-2">N</s>{formatter.format(discountCalc(item.price, item.discount) * item.quantity)}</div>
                </div>
                <div className='flex justify-end'>
                    <button onClick={handleReduceQuantity} disabled={item.quantity === 1} className="font-bold text-lg bg-secondary disabled:bg-secondary/40 shadow-lg disabled:shadow-none disabled:cursor-not-allowed text-white px-3 rounded-md active:scale-100 hover:scale-90 transition duration">
                        &minus;
                    </button>
                    <span className="px-2 py-1 text-primary font-medium text-xl mx-2">
                        {item.quantity}
                    </span>
                    <button onClick={handleIncreaseQuantity} className="font-bold text-lg bg-secondary shadow-lg text-white px-3 rounded-md active:scale-100 hover:scale-90 transition duration">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilledCartCard
