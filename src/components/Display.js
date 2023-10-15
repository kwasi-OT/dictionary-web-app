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
                    <span className={`playButton ${darkTheme ? 'dark' : ''}`}>
                        <MdPlayArrow className={`playButtonCenter ${darkTheme ? 'dark' : ''}`}/>
                    </span>
                </div>
            </div>
            <div className={`d-flex flex-row `}>
                <span>
                    <h4>noun</h4>
                </span>
                <span>
                    <hr color='#fff' />
                </span>
            </div>
            <div>
                <p>Meaning</p>
                <ul>
                    <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                    <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                    <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
                </ul>
            </div>
            <div className={`d-flex`}>
                <p>Synonyms</p>
                <p>electronic keyboard</p>
            </div>
            <div>
                <h4>verb</h4>
            </div>
            <div>
                <div>
                    <p>Meaning</p>
                </div>
                <div>
                    <ul>
                        <li>To type on a computer keyboard.</li>
                    </ul>
                    <p>“Keyboarding is the part of this job I hate the most.”</p>
                </div>
            </div>
            <div className={`source d-flex gap-4 align-items-center ${darkTheme ? 'dark' : ''}`}>
                <p>Source</p>
                <div className={`bottomLink d-flex gap-2 align-items-center ${darkTheme ? 'dark' : ''}`}>
                    <p>https://en.wiktionary.org/wiki/keyboard</p>
                    <FaArrowUpRightFromSquare size='0.75rem' className='mb-3'/>
                </div>
            </div>
        </div>
    )
}

export default Display;
