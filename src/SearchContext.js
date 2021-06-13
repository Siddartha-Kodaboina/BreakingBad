import React, { useState, createContext } from 'react'

export const SearchContext = createContext();

export const SearchProvider = ( props ) => {
    const [text, setText] = useState('');
    return (
        <SearchContext.Provider value={[text,setText]}>
            {props.children}
        </SearchContext.Provider>
    )
}
