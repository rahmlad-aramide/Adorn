import { useContext } from 'react'
import GroupedProductCard from './GroupedProductCard'
import { ProductContext } from '../contexts/ProductContext'

const Categories = props => {
  const { products } = useContext(ProductContext);
  const { category } = products[0];

  return (
    <div className='bg-white shadow mt-[3.5rem] py-[4.625rem] px-8 md:px-[4.25rem] lg:px-[6.25rem]' id='catalogue'>
      <div className='font-lancelot uppercase pb-6'>
        Shop by category
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {category.map((product) => (
          <GroupedProductCard
            imgUrl={product.imgUrl}
            name={product.name}
            url={product.url}
            key={product.id}
            others={`justify-start`}
            mt={`mt-5`}
          />
        ))}
      </div>
    </div>
  )
}


export default Categories
