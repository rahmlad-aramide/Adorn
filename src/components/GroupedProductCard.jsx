import React from 'react';
import { Link } from 'react-router-dom';
import arrowRight from './../assets/icons/arrow-right.svg'

const GroupedProductCard = ({ imgUrl, name, url, id, ...others }) => {
    return (
        <div className='flex justify-between flex-col border border-tertiary p-5 relative'>
            <div className='flex justify-center min-h-[250px]'>
                <img src={imgUrl} alt={name} />
            </div>
            <div className={`flex ${others.others}`}>
                <Link to={url} className={`flex justify-center items-center group ${others.mt}`}>
                    <div className='flex justify-center items-center mr-2 group-hover:mr-4 text-primary'>
                        {name}
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={arrowRight} alt="Arrow right" className='h-5' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default GroupedProductCard
