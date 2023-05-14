import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [searchStr, setSearchStr] = useState('');
    
    const updateSearchString =(e)=> {
        setSearchStr(e.target.value.toLowerCase())
    }
    const value = {
        searchStr, updateSearchString
    }
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
