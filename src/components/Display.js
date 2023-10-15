import React, { useContext } from 'react';
import {MdPlayArrow} from 'react-icons/md'
import { ThemeContext } from './ContextTheme';
import {FaArrowUpRightFromSquare} from 'react-icons/fa6'

const Display = () => {
    const {darkTheme} = useContext(ThemeContext);

    return (
        <div>
            <div className={`d-flex justify-content-between align-items-center`}>
                <div>
                    <h1 className={`title ${darkTheme ? 'dark' : ''}`}>Keyboard</h1>
                    <p className={`lexi ${darkTheme ? 'dark' : ''}`}>/'ki:bɔ:d/</p>
                </div>
                <div>
                    <span className={`playButton d-flex mb-4 justify-content-center align-items-center ${darkTheme ? 'dark' : ''}`}>
                        <MdPlayArrow size='2.5rem' className={`playButtonCenter ${darkTheme ? 'dark' : ''}`}/>
                    </span>
                </div>
            </div>
            <div className={`d-flex flex-row `}>
                <span>
                    <h4 className={`subTitle ${darkTheme ? 'dark' : ''}`}>noun</h4>
                </span>
                <span className='line'>
                    <hr color='#757575'/>
                </span>
            </div>
            <div>
                <p className='source'>Meaning</p>
                <ul className={`list ${darkTheme ? 'dark' : ''}`}>
                    <li><span className={`listList ${darkTheme ? 'dark' : ''}`}>(etc.) A set of keys used to operate a typewriter, computer etc.</span></li>
                    <li><span className={`listList ${darkTheme ? 'dark' : ''}`}>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</span></li>
                    <li><span className={`listList ${darkTheme ? 'dark' : ''}`}>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</span></li>
                </ul>
            </div>
            <div className={`d-flex gap-4 align-items-center`}>
                <p className='source'>Synonyms</p>
                <p className='syno'>electronic keyboard</p>
            </div>
            <div className='d-flex'>
                <span>
                    <h4 className={`subTitle ${darkTheme ? 'dark' : ''}`}>verb</h4>
                </span>
                <span className='line'>
                    <hr color='#757575'/>
                </span>
            </div>
            <div>
                <div>
                    <p className='source'>Meaning</p>
                </div>
                <div>
                    <ul className={`list ${darkTheme ? 'dark' : ''}`}>
                        <li><span className={`listList ${darkTheme ? 'dark' : ''}`}>To type on a computer keyboard.</span></li>
                    </ul>
                    <p className={`verbKeyboarding ${darkTheme ? 'dark' : ''}`}>“Keyboarding is the part of this job I hate the most.”</p>
                </div>
            </div>
            <hr color='#757575'/>
            <div className={`d-flex gap-4 align-items-center ${darkTheme ? 'dark' : ''}`}>
                <p className='source'>Source</p>
                <div className={`bottomLink d-flex gap-2 align-items-center ${darkTheme ? 'dark' : ''}`}>
                    <p>https://en.wiktionary.org/wiki/keyboard</p>
                    <FaArrowUpRightFromSquare size='0.75rem' className='mb-3'/>
                </div>
            </div>
        </div>
    )
}

export default Display;
