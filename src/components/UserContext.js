import axios from 'axios';
import React from 'react';
import { createContext, useState } from 'react';


// declare the context provider
export const WordContext = createContext();
// declare states
const UserContext = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // axios method to get api from .env variable
    // const api = axios.create({
    //     baseURL: process.env.REACT_APP_BASE_URL
    // });
    const GetWord = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            const data = await response.data;
            console.log(data);
            setLoading(false);
            setWord(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <WordContext.Provider value={{setSearchTerm, searchTerm, loading, word, error, GetWord}} >
            {children}
        </WordContext.Provider>
    )
}

export default UserContext;
