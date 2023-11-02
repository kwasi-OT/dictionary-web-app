import React, { useContext } from 'react';
import {RiBook2Line} from 'react-icons/ri';
import {HiOutlineMoon} from 'react-icons/hi2';
import {MdCircle} from 'react-icons/md';
import { ThemeContext } from './ContextTheme';


const Navigation = () => {
    const {darkTheme, handleStateChange} = useContext(ThemeContext);

    const select = document.querySelector('select');
    if(select) {
        select.addEventListener('change', (event) => {
            document.body.style.fontFamily = event.target.value;
        });
    }

    return (
        <div className='navWrapper d-flex justify-content-between align-items-center'>
            <div className='iconContainer'>
                <RiBook2Line color='#757575' className='bookIcon'/>
            </div>
            <div className='rightNav d-flex'>
                <div className={`fontSelect ${darkTheme ? 'dark' : ''}`}>
                    <select className={`select border border-0 ${darkTheme ? 'dark' : ''}`}>
                        <option>Sans Serif</option>
                        <option>Serif</option>
                        <option>Space Mono</option>
                    </select>
                </div>
                <span className={`vLine vr ${darkTheme ? 'dark' : ''}`}></span>
                <div onClick={handleStateChange} className='toggleContainer d-flex gap-2 justify-content-end align-items-center'>
                    <span className={`toggleButton d-flex align-items-center ${darkTheme ? 'dark' : ''}`}>
                        <MdCircle size='0.88rem' color='#ffffff'/>
                    </span>
                    <div>
                        <HiOutlineMoon size='18' className={`mb-1 moon ${darkTheme ? 'dark' : ''}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
