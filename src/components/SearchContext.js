import React from 'react';
import { createContext, useState } from 'react';
import axios  from 'axios';

export const WordContext = createContext();
export const SearchContext = ({ children }) => {
    const [word, setWord] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [definition, setDefinition] = useState('');

    const GetWord = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            const data = await response.data
            console.log(data);

            // setWord(data);
            setDefinition(data)
            setError(null);

            // if (Array.isArray(data) && data.length > 0) {
            //     // Assuming the first definition is the primary one
            //     // const primaryDefinition = data[0].meanings[0].definitions[0].definition;
            //     // setDefinition(primaryDefinition);
            //     setWord(data);
            //     setError(null);
            // } else {
            //     // setDefinition(null);
            //     setError('No definition found for the word: ' + searchTerm);
            // }
        
        } catch (error) {
            console.error('Error fetching data:', error);
            setWord(null);
            setDefinition(null)
            setError('An error occurred while fetching data.');

        } finally {
            setLoading(false);
        }
    }
    return (
        <WordContext.Provider value={{searchTerm, setSearchTerm, loading, error, GetWord, word, definition}}>
            {children}
        </WordContext.Provider>
    )
}
