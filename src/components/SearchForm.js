import React, { useContext } from 'react';
import {CiSearch} from 'react-icons/ci';
import { ThemeContext } from './ContextTheme';
import { WordContext } from './SearchContext';

const SearchForm = () => {
    const {darkTheme} = useContext(ThemeContext);
    const {searchTerm, setSearchTerm, GetWord} = useContext(WordContext);

    const HandleSubmit = (e) => {
        e.preventDefault()
        if(!searchTerm) {
            document.getElementById('emptyError').innerText = "Whoops, can't be empty...";
            document.getElementById('formWrapper').style.border = '1px solid #ff0000'
        } else {
            GetWord();
        }
    };

    return (
        <div id='formWrapper' className={`d-flex flex-column px-3 py-2 formWrapper ${darkTheme ? 'dark' : ''}`}>
            <div className='d-flex justify-content-between align-items-center mb-4  w-100'>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search for any word…' className={`formInput form-control border border-0 ${darkTheme ? 'dark' : ''}`}/>
                <CiSearch color='#A445ED' size='0.97rem' onClick={HandleSubmit}/>
            </div>
            <div id='emptyError' className='text-danger'></div>
        </div>
    )
}

export default SearchForm;
