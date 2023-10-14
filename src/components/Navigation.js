import React from 'react';
import {RiBook2Line} from 'react-icons/ri';
import {HiOutlineMoon} from 'react-icons/hi2';
import {LiaCircle} from 'react-icons/lia';
// import {IoIosArrowDown} from 'react-icons/io';

const Navigation = () => {
    return (
        <div className='navWrapper d-flex justify-content-between align-items-center'>
            <div className='iconContainer'>
                <RiBook2Line color='#757575' className='bookIcon'/>
            </div>
            <div className='rightNav d-flex'>
                <div className='fontSelect'>
                    <select className='border border-0'>
                        <option>Sans Serif</option>
                        <option>Serif</option>
                        <option>Mono</option>
                    </select>
                </div>
                <span className='vr '></span>
                <div className='toggleContainer d-flex justify-content-end align-items-center'>
                    <span className='toggleButton'>
                        <LiaCircle/>
                    </span>
                    <div>
                        <HiOutlineMoon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
