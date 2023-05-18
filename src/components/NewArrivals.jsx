import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SingleProductCard from './SingleProductCard.jsx'
import { ProductContext } from '../contexts/ProductContext.jsx'

const NewArrivals = props => {
  const {products} = useContext(ProductContext);
    const {newArrival} = products[0];
    const {heartColor, discountBox, productsDetails } = newArrival;
    // console.log(productsDetails)
  return (
    <div className='min-h-screen bg-white shadow mt-[3.5rem] py-[4.625rem] px-8 md:px-[4.25rem] lg:px-[6.25rem]' id='catalogue'>
      <div className='flex justify-between mb-[1.125rem]'>
        <div className='font-lancelot uppercase pb-6'>
          New Arrivals
        </div>
        <Link to="/" className='font-workSans'>
          See more
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-[3.5rem]'>
        {productsDetails.map((product) => (
          <SingleProductCard
            key={product.id}
            product={product}
            heartColor={heartColor}
            discountBox={discountBox}
          />
        ))}
      </div>
    </div>
  )
}

NewArrivals.propTypes = {

}

export default NewArrivals
