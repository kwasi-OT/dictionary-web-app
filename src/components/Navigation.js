import React from 'react';
import {RiBook2Line} from 'react-icons/ri';
import {HiOutlineMoon} from 'react-icons/hi2';
import {LiaCircle} from 'react-icons/lia';
import {IoIosArrowDown} from 'react-icons/io';

const Navigation = () => {
    return (
        <div className='d-flex'>
            <div>
                <RiBook2Line/>
            </div>
            <div>
                <div>
                    <p>Serif</p>
                    <IoIosArrowDown/>
                </div>
                <div>
                    <span>
                        <LiaCircle/>
                    </span>
                    <HiOutlineMoon/>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
