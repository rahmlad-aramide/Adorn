import { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";
import {notify} from "../App";

const ShopCard = ({ product, index }) => {
    const { addItemToCart } = useContext(CartContext);
    const { imgUrl, name, price } = product;

    const handleAddItemToCart = () => {
        addItemToCart(product);
        notify("Item added to cart");
    }
    return (
        <div key={index} className='flex justify-between flex-col border border-tertiary p-5 relative font-workSans font-medium text-lg text-primary'>
            <div className='flex justify-center min-h-[250px]'>
                <img src={imgUrl} alt={name} />
            </div>
            <div className='flex justify-between mt-4'>
                <div className='flex w-full justify-between'>
                    <div className='font-workSans font-medium text-lg'>
                        {name}
                    </div>
                    <div className='flex'>
                        <div className='text-secondary'>${price}</div>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center`}>
                <div className={`flex justify-center items-center mt-3`}>
                    <button onClick={handleAddItemToCart} className='flex justify-center items-center border px-5 py-3 border-primary'>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShopCard;
