import React from 'react';
import {createContext, useState} from 'react';

// define context provider
export const ThemeContext = createContext()

export const ContextTheme = ({children}) => {
    // set state with darkTheme being false
    const[darkTheme, setDarkTheme] = useState(true);

    // declare function to handle state change
    const handleStateChange = () => {
        setDarkTheme((prev) => !prev)
    };

    return (
        <ThemeContext.Provider value={{darkTheme, handleStateChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextTheme;
