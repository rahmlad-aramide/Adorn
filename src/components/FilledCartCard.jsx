import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { inform, notify } from "../App";

const FilledCartCard = ({ item }) => {
    const { removeItemFromCart, increaseItemQuantity, reduceItemQuantity, quantityCount } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItemFromCart(item);
        inform("A product was removed from the cart!")
    }
    const handleIncreaseQuantity = () => {
        increaseItemQuantity(item);
        notify("A quantity was added!");
    }
    const handleReduceQuantity = () => {
        reduceItemQuantity(item);
        inform("A quantity was reduced!")
    }
    return (
        <div className='flex justify-between m-4 border-t border-light'>
            <div className='mt-5'>
                <div className='grid grid-cols-12 gap-4 mb-3'>
                    <div className='col-span-2 border rounded-lg p-3'>
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className='col-span-10 flex flex-col justify-center'>
                        <div className='font-medium text-xl'>{item.name} </div>
                        <div>Category: Chair </div>
                    </div>
                </div>
                <button onClick={handleRemoveItem}>
                    Remove
                </button>
            </div>
            <div className='flex flex-col justify-between text-right'>
                <div className='my-3'>
                    <div className='text-2xl font-medium mb-1'>#4,740</div>
                    <div className='flex'><s className=''>#9,000</s> <span className='ml-2 p-0.5 rounded bg-secondary/20 text-secondary text-sm'>-47%</span> </div>
                </div>
                <div className='flex'>
                    <button onClick={handleReduceQuantity} disabled={quantityCount === 1} className="font-bold text-lg bg-secondary disabled:bg-secondary/40 shadow-lg disabled:shadow-none text-white px-3 rounded-md active:scale-100 hover:scale-90 transition duration">
                        &minus;
                    </button>
                    <span className="px-2 py-1 text-primary font-medium text-xl mx-2">
                        {quantityCount}
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
