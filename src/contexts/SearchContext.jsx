import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [searchStr, setSearchStr] = useState('');
    
    const updateSearchString =(e)=> {
        setSearchStr(e.target.value.toLowerCase())
    }
    return (
        <SearchContext.Provider value={{searchStr, updateSearchString}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;
