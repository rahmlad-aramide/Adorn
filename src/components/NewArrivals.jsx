import React from 'react'
import PropTypes from 'prop-types'
import { newArrival, discountBox, heartColor } from "../data/newArrival.js"
import { Link } from 'react-router-dom'
import ShopCard from './SingleProductCard.jsx'

const NewArrivals = props => {
  return (
    <div className='min-h-screen pt-[4.3125rem] pb-[3.125rem] px-[6.25rem]' id='catalogue'>
      <div className='flex justify-between mb-[1.125rem]'>
        <div className='font-lancelot uppercase pb-6'>
          New Arrivals
        </div>
        <Link to="/" className='font-workSans'>
          See more
        </Link>
      </div>
      <div className='grid grid-cols-3 gap-5 gap-y-[3.5rem]'>
        {newArrival.map((product, index) => (
          <ShopCard
            imgUrl={product.imgUrl}
            name={product.name}
            url={product.url}
            index={index}
            mt={`mt-3`}
            discount={product.discount}
            price={product.price}
            favorite={product.favorite}
            ratings={product.ratings}
            stars={product.stars}
            discountBox={discountBox}
            heartColor={heartColor}
          />
        ))}
      </div>
    </div>
  )
}

NewArrivals.propTypes = {

}

export default NewArrivals
