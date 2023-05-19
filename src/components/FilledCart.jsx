import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import FilledCartCard from './FilledCartCard';

export const formatter = new Intl.NumberFormat('ng-NG', {
    minimumFractionDigits: 2
})

const FilledCart = ({ cartItems }) => {
    const { cartCount, totalCount } = useContext(CartContext);

    return (
        <div className='grid grid-cols-12 gap-8 font-workSans items-center w-full max-w-[1140px] mx-auto py-4'>
            <div className='col-span-9 rounded bg-white shadow'>
                <div className='text-2xl text-[#121212] font-medium m-4 mb-2'>Cart ({cartCount})</div>
                {cartItems.map((item) =>
                    <FilledCartCard key={item.id} item={item} />
                )}
            </div>
            <div className='col-span-3 rounded bg-white shadow mb-auto'>
                <div className='flex flex-col justify-between m-4'>
                    <div>
                        <div className='text-lg text-[#121212] border-b border-light py-2'>Cart Summary</div>
                        <div className='flex justify-between items-center my-4'>
                            <div className='font-medium'>Total: </div> 
                            <div className='text-2xl font-medium'><s>N</s>{formatter.format(totalCount)}</div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className="w-full mt-8 rounded-lg bg-secondary py-2 px-6 font-bold text-white hover:scale-90 active:scale-100 uppercase transition duration-300">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilledCart
