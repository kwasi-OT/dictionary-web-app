import axios from 'axios';
import React, { useState } from 'react';
import { createContext, useContext } from 'react';

// declare the context provider
export const GitHubContext = createContext();
// declare states
const UserContext = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // function to get api and data
    const api = axios.create({
        baseURL:process.env.REACT_APP_VARIABLE_NAME
    });
    const GetWord = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/${searchTerm}`);
            const data = await response.data;
            console.log(data);
        } catch (e) {

        }
    }
    return (
        <GitHubContext.Provider value={{searchTerm, loading, word, error, GetWord}} >
            {children}
        </GitHubContext.Provider>
    )
}

export default UserContext;
