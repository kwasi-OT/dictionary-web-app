import React, { useContext } from 'react';
import {CiSearch} from 'react-icons/ci';
import { ThemeContext } from './ContextTheme';
import { WordContext } from './UserContext';

const SearchForm = () => {
    const {darkTheme} = useContext(ThemeContext);
    const {searchTerm, setSearchTerm, GetWord} = useContext(WordContext);

    const HandleSubmit = () => {
        if(!searchTerm) {
            document.getElementById('emptyError').innerText = "Whoops, can't be empty...";
        } else {
            GetWord();
        }
    };

    return (
        <div className={`d-flex justify-content-between align-items-center px-3 py-2 formWrapper ${darkTheme ? 'dark' : ''}`}>
            <div className='d-flex justify-content-between align-items-center  w-100'>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onSubmit={HandleSubmit} placeholder='Search for any word…' className={`formInput form-control border border-0 ${darkTheme ? 'dark' : ''}`}/>
                <CiSearch color='#A445ED' size='0.97rem'/>
            </div>
            <div id='emptyError' className='text-danger'></div>
        </div>
    )
}

export default SearchForm;
