import React from 'react'
import PropTypes from 'prop-types'
import GroupedProductCard from './GroupedProductCard'
import { category } from '../data/category'

const Categories = props => {
  return (
    <div className='min-h-screen pt-[2.625rem] px-[100px]' id='catalogue'>
      <div className='font-lancelot uppercase pb-6'>
        Shop by category
      </div>
      <div className='grid grid-cols-2 gap-10'>
        {category.map((product, index) => (
          <GroupedProductCard
            imgUrl={product.imgUrl}
            name={product.name}
            url={product.url}
            index={index}
            others={`justify-start`}
            mt={`mt-5`}
          />
        ))}
      </div>
    </div>
  )
}

Categories.propTypes = {

}

export default Categories
