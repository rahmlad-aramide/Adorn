import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

import lens from "./../assets/icons/lens.svg";
import mic from "./../assets/icons/mic.svg";

const Search = () => {
  const { updateSearchString } = useContext(SearchContext);
  return (
    <>
      <div className="flex border-[#555] bg-white px-2 md:border-b">
        <div className="flex w-[20%] justify-center">
          <img className="max-w-[18px] md:max-w-[20px]" src={lens} alt="Lens" />
        </div>
        <div className="flex w-[60%] border-b md:border-none">
          <input
            onChange={updateSearchString}
            type="search"
            className="mx-1 mb-[1px] w-full bg-transparent pt-0.5 pb-0 outline-none md:mx-2 md:pb-1"
            placeholder="Search Adorn"
          />
        </div>
        <div className="flex w-[20%] justify-center">
          <img className="max-w-[15px]" src={mic} alt="Mic" />
        </div>
      </div>
    </>
  );
};
export default Search;
