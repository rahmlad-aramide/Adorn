import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

import lens from "./../assets/icons/lens.svg";
import mic from "./../assets/icons/mic.svg";

const Search = () => {
  const { updateSearchString } = useContext(SearchContext);
  return (
    <>
      <div className="flex border-[#555] bg-white px-2 md:border-b">
        <div className="flex justify-center">
          <img src={lens} alt="Lens" />
        </div>
        <div className="hidden md:flex">
          <input
            onChange={updateSearchString}
            type="search"
            className="mx-2 mb-[1px] pt-0.5 pb-1 outline-none"
            placeholder="Search Adorn"
          />
        </div>
        <div className="hidden justify-center md:flex">
          <img src={mic} alt="Mic" />
        </div>
      </div>
      {/* <div className=''>
            <div>
                <Search />
            </div>
        </div> */}
    </>
  );
};
export default Search;
