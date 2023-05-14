import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

import lens from './../assets/icons/lens.svg';
import mic from './../assets/icons/mic.svg';

const Search = () => {
    const { updateSearchString } = useContext(SearchContext);
    return (
        <>
        <div className='flex bg-white px-2 md:border-b border-[#555]'>
            <div className='flex justify-center'>
                <img src={lens} alt="Lens" />
            </div>
            <div className='hidden md:flex'>
                <input onChange={updateSearchString} type="search" className='outline-none mx-2 pt-0.5 pb-1' placeholder="Search Adorn" />
            </div>
            <div className='hidden md:flex justify-center'>
                <img src={mic} alt="Mic" />
            </div>
        </div>
        {/* <div className=''>
            <div>
                <Search />
            </div>
        </div> */}
        </>
    )
}
export default Search;