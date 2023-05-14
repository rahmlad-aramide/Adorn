import React from 'react'
import PropTypes from 'prop-types'
import { catalog } from "../data/catalog.js"
import GroupedProductCard from './GroupedProductCard.jsx'

const Catalog = props => {
  return (
    <div className='min-h-screen pt-[4.3125rem] pb-[3.125rem] px-[6.25rem]' id='catalogue'>
      <div className='font-lancelot uppercase pb-6'>
        Catalog
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {catalog.map((product, index) => (
          <GroupedProductCard
            imgUrl={product.imgUrl}
            name={product.name}
            url={product.url}
            index={index}
            others={`justify-center`}
            mt={`mt-3`}
          />
        ))}
      </div>
    </div>
  )
}

Catalog.propTypes = {

}

export default Catalog
