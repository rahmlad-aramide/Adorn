import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

import lens from './../assets/icons/lens.svg';
import mic from './../assets/icons/mic.svg';

const Search = () => {
    const { updateSearchString } = useContext(SearchContext);
    return (
        <div className='flex bg-white px-2 border-b border-[#555]'>
            <div className='flex justify-center'>
                <img src={lens} alt="Lens" />
            </div>
            <div>
                <input onChange={updateSearchString} type="search" className='outline-none mx-2 pt-0.5 pb-1' placeholder="Search Adorn" />
            </div>
            <div className='flex justify-center'>
                <img src={mic} alt="Mic" />
            </div>
        </div>
    )
}
export default Search;