import React, { useContext } from 'react';
import { MdPlayArrow } from 'react-icons/md'
import { ThemeContext } from './ContextTheme';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { WordContext } from './SearchContext';
import { v4 as uuidv4 } from 'uuid';
import { GiArchiveResearch } from 'react-icons/gi'

const Display = () => {
    const {darkTheme} = useContext(ThemeContext);
    const {loading, error, word, phonetic, sourceUrl, nounDefinition, verbDefinition, example, synonyms} = useContext(WordContext)


    if(word.length === 0) {
        return(
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <GiArchiveResearch size='5rem' color='#A445ED' className='loading'/>
                <h3 className={`loading ${darkTheme ? 'dark' : ''}`}>Please enter a word to begin the search!</h3>
            </div>
        )
    }

    if(loading) {
        return(
            <div className='d-flex flex-column justify-content-center align-items-center mt-10'>
                <h1 className={`loading ${darkTheme ? 'dark' : ''}`}>Loading...</h1>
            </div>
        )
    }

    
    if(!{word}) {
        return (
            <div>
                {error && 
                <div className={`${darkTheme ? 'dark' : ''} errorMessage d-flex flex-column justify-content-center align-items-center`}>
                    <div className='imoji'>😕</div>
                    <div><h2>No Definitions Found</h2></div>
                    <div>
                        <p>
                            Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.
                        </p>
                    </div>
                </div>}
            </div>
        )
    } else {
        return (
            <div>
                <div className={`d-flex justify-content-between align-items-center`}>
                    <div>
                        <h1 className={`title ${darkTheme ? 'dark' : ''}`}>{word}</h1>
                        <p className={`lexi ${darkTheme ? 'dark' : ''}`}>{phonetic}</p>
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
                    <p className='meaning'>Meaning</p>
                    {nounDefinition?
                        <ul className={`list ${darkTheme ? 'dark' : ''}`}>
                            {nounDefinition.map((meaning) => { 
                                return <li key={uuidv4()}><span className={`listList ${darkTheme ? 'dark' : ''}`}>{meaning.definition}</span></li>
                            })} 
                        </ul> : 'Sorry, we found no definition for noun.'
                    }
                </div>
                <div className={`d-flex gap-4 align-items-center`}>
                    <p className='meaning'>Synonyms</p>
                    {synonyms?
                        <div className='syno'>
                            {synonyms.map((synonym) => synonym).join(', ')}
                        </div> : <span className='syno'>No synonyms available</span>
                    }
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
                        <p className='meaning'>Meaning</p>
                    </div>
                    <div>
                        {verbDefinition?
                            <ul className={`list ${darkTheme ? 'dark' : ''}`}>
                                {verbDefinition.map((meaning) => { 
                                    return <li key={uuidv4()}><span className={`listList ${darkTheme ? 'dark' : ''}`}>{meaning.definition}</span></li>
                                })}
                            </ul> : 'Sorry, we found no definition for verb.'
                        }
                        <div>
                            {example?
                                <p className={`verbKeyboarding ${darkTheme ? 'dark' : ''}`}>“{example}”</p> : null
                            }
                        </div>
                    </div>
                </div>
                <hr color='#757575'/>
                <div className={`d-flex flex-wrap gap-2 align-items-center ${darkTheme ? 'dark' : ''}`}>
                    <p className='source'>Source</p>
                    <div className={`bottomLink d-flex gap-2 align-items-center ${darkTheme ? 'dark' : ''}`}>
                        <p>{sourceUrl}</p>
                        <FaArrowUpRightFromSquare size='0.75rem' className='mb-3'/>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Display;
