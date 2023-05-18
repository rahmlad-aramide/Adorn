import { useContext } from 'react';
import {CartContext} from "../contexts/CartContext";
import Star from './Star';

import heart from './../assets/icons/heart.svg';
import heartFilled from './../assets/icons/heart-filled.svg';
import redHeart from './../assets/icons/red-heart.svg';
import redHeartFilled from './../assets/icons/red-heart-filled.svg';
import {notify} from "../App";
const SingleProductCard = ({ product, discountBox, heartColor }) => { 
    
    const {addItemToCart} = useContext(CartContext);
    const { imgUrl, name, discount, favorite, price, ratings, stars } = product;
    const discountCalc = (realPrice, discountedPrice) => {
        return realPrice - ((discountedPrice / 100) * realPrice)
    }

    const handleAddItemToCart = () => {
        addItemToCart(product)
        notify("Item added to cart");
    }
    return (
        <div className='flex justify-between flex-col border border-tertiary p-5 relative font-workSans font-medium text-lg text-primary'>
            <div className='flex'>
                {heartColor === "black"
                    ? <img src={favorite ? heartFilled : heart} alt="Favorite" />
                    : <img src={favorite ? redHeartFilled : redHeart} alt="Favorite" />
                }
            </div>
            <div style={{ backgroundColor: discountBox }} className={`flex justify-center items-center font-workSans font-medium text-white text-2xl py-8 px-7 absolute rounded-full -top-8 -right-[0.3125rem] aspect-square`}>
                {discount}%
            </div>
            <div className='flex justify-center min-h-[250px]'>
                <img src={imgUrl} alt={name} />
            </div>
            <div className='flex justify-between mt-4'>
                <div className='flex flex-col'>
                    <div className='font-workSans font-medium text-lg'>
                        {name}
                    </div>
                    <div className='flex'>
                        <s className='mr-5'>${price}</s>
                        <div className='text-secondary'>${discountCalc(price, discount)}</div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='pr-1'>{ratings}K</div>
                    <div className='flex'>
                        <Star stars={stars} />
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

export default SingleProductCard;
