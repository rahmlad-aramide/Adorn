import cartIcon from '../assets/icons/colored-cart.svg'
import { HashLink } from 'react-router-hash-link'

const EmptyCart = () => {
  return (
    <div className='rounded bg-white shadow font-workSans flex flex-col items-center w-full max-w-[1140px] mx-auto py-10'>
        <div className='mb-6'>
          <img src={cartIcon} alt="Cart" />
        </div>
        <div className='text-tertiary font-medium mb-4'>
          Your cart is empty!
        </div>
        <div className='text-center px-4 text-sm mb-6'>
          Browse our categories and catalog to discover our best deals!
        </div>
        <div>
          <HashLink to="/#catalogue">
            <button className="rounded-lg bg-secondary py-3 px-6 font-bold text-white hover:scale-90 active:scale-100 uppercase transition duration-300">
              Start Shopping
            </button>
          </HashLink>
        </div>
      </div>
  )
}

export default EmptyCart
