import React from 'react';
import {RiBook2Line} from 'react-icons/ri';
import {HiOutlineMoon} from 'react-icons/hi2';
import {LiaCircle} from 'react-icons/lia';
import {IoIosArrowDown} from 'react-icons/io';

const Navigation = () => {
    return (
        <div className='navWrapper d-flex justify-content-between align-items-center'>
            <div className='bookIcon'>
                <RiBook2Line/>
            </div>
            <div className='rightNav d-flex justify-content-center align-items-center'>
                <div className='fontSelect d-flex justify-content-between align-items-center'>
                    <p>Serif</p>
                    <IoIosArrowDown/>
                </div>
                <div className='toggleContainer'>
                    <span className='toggleButton'>
                        <LiaCircle/>
                    </span>
                    <HiOutlineMoon/>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
