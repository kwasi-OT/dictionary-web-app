import React, { useState } from 'react';
import { createContext, useContext } from 'react';


export const GitHubContext = createContext();
const UserContext = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [word, setWord] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    return (
        <div>
        
        </div>
    )
}

export default UserContext;
