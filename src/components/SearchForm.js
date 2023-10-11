import React, { useContext } from 'react';
import {CiSearch} from 'react-icons/ci';
import { ThemeContext } from './ContextTheme';

const SearchForm = () => {
    const {darkTheme} = useContext(ThemeContext);

    return (
        <div className={`d-flex justify-content-between align-items-center w-90 px-3 py-2 formWrapper ${darkTheme ? 'dark' : ''}`}>
            <div className='d-flex justify-content-between align-items-center  w-100'>
                <input type='text' placeholder='Search for any word…' className={`formInput form-control border border-0 ${darkTheme ? 'dark' : ''}`}/>
                <CiSearch color='#A445ED' size='0.97rem'/>
            </div>
        </div>
    )
}

export default SearchForm
