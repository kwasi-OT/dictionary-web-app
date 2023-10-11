import React, { useContext } from 'react';
import {CiSearch} from 'react-icons/ci';
import { ThemeContext } from './ContextTheme';

const SearchForm = () => {
    const {darkTheme} = useContext(ThemeContext);

    return (
        <div className={`d-flex justify-content-between align-items-center w-90 px-3 py-2 form-wrapper ${darkTheme ? 'dark' : ''}`}>
            <div className='d-flex justify-content-between align-items-center  w-100'>
                <input type='text' placeholder='Search GitHub username…' className={`form-input form-control border border-0 ${darkTheme ? 'dark' : ''}`}/>
                <CiSearch color='#0079FF' size='1.5rem'/>
            </div>
        </div>
    )
}

export default SearchForm
