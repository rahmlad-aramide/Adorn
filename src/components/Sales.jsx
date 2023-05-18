import React from 'react';
import { sale, discountBox, heartColor } from "../data/sale.js"
import { Link } from 'react-router-dom'
import SingleProductCard from './SingleProductCard.jsx'

const Sales = () => {
  return (
    <div className='min-h-screen bg-white shadow mt-[3.5rem] py-[4.625rem] px-8 md:px-[4.25rem] lg:px-[6.25rem]' id='catalogue'>
      <div className='flex justify-between mb-[1.125rem]'>
        <div className='font-lancelot uppercase pb-6'>
          On Sale
        </div>
        <Link to="/" className='font-workSans'>
          See more
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-[3.5rem]'>
        {sale.map((product) => (
          <SingleProductCard
            key={product.id}
            product={product}
            discountBox={discountBox}
            heartColor={heartColor}
          />
        ))}
      </div>
    </div>
  )
}

export default Sales
