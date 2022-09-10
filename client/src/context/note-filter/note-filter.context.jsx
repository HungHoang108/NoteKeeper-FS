import {React, useState, createContext} from 'react'


export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [noteFilterArray, setNoteFilterArray] = useState([]);
    const [searchStatus, setSearchStatus] = useState(false)
    
    const value = {
        searchQuery,
        setSearchQuery,
        searchStatus,
        setSearchStatus,
        noteFilterArray,
        setNoteFilterArray
    };


  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  
}
