import React from 'react';
import { createContext, useState } from 'react';
import axios  from 'axios';

export const WordContext = createContext();
export const SearchContext = ({ children }) => {
    const [word, setWord] = useState('');
    const [phonetic, setPhonetic] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [definition, setDefinition] = useState('');
    const [audio, setAudio] = useState(null);
    const [sourceUrl, setSourceUrl] = useState(null);

    const GetWord = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            const data = await response.data

            console.log('data: ', data);
            console.log('word: ', data[0].word);
            console.log('meanings: ', data[0].meanings[0].definitions);

            setWord(data[0].word);
            setDefinition(data[0].meanings[0].definitions);
            setError(null);
            setPhonetic(data[0].phonetic);
            setAudio(data[0].phonetics);
            setSourceUrl(data[0].sourceUrls);

        
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
        <WordContext.Provider value={{audio, sourceUrl, searchTerm, phonetic, setSearchTerm, loading, error, GetWord, definition, word}}>
            {children}
        </WordContext.Provider>
    )
}
