import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext.jsx'
import { TopSellingCard } from '../components';

const TopSelling = () => {
    const {products} = useContext(ProductContext);
    const {newArrival} = products[0];
    const {heartColor, discountBox, productsDetails } = newArrival
    
  return (
    <div className='bg-white shadow my-[3.5rem] py-[4.625rem] px-8 md:px-[4.25rem] lg:px-[6.25rem]' id='catalogue'>
      <div className='flex justify-between mb-[1.125rem]'>
        <div className='font-lancelot uppercase pb-6'>
          Top Selling Items
        </div>
        <Link to="/" className='font-workSans'>
          See more
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-[3.5rem]'>
        {productsDetails.slice(0,3).map((product) => (
          <TopSellingCard
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


export default TopSelling
