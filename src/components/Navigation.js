import React from 'react';
import {RiBook2Line} from 'react-icons/ri';
import {HiOutlineMoon} from 'react-icons/hi2';
import {MdCircle} from 'react-icons/md';


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
                <span className='vLine vr'></span>
                <div className='toggleContainer d-flex gap-2 justify-content-end align-items-center'>
                    <span className='toggleButton d-flex align-items-center'>
                        <MdCircle size='0.88rem' color='#ffffff'/>
                    </span>
                    <div>
                        <HiOutlineMoon size='18' className='mb-1'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
