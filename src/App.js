import { useContext } from 'react';
import './App.css';
import Display from './components/Display';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';
import { ThemeContext } from './components/ContextTheme';
import {WordContext} from './components/UserContext';

function App() {
  const {darkTheme} = useContext(ThemeContext);
  const {loading} = useContext(WordContext);

  return (
    <div className={`appContainer ${darkTheme ? 'dark' : ''} d-flex flex-column justify-content-center align-items-center`}>
      <div className='appWrapper d-flex flex-column gap-4'>
        <Navigation/>
        <SearchForm/>
        {loading && <h2>loading...</h2>}
        <Display/>
      </div>
    </div>
  );
}

export default App;
