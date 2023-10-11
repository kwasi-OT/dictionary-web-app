import { useContext } from 'react';
import './App.css';
import Display from './components/Display';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';
import { ThemeContext } from './components/ContextTheme';

function App() {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <div className={`appContainer ${darkTheme ? 'dark' : ''} d-flex flex-column justify-content-center align-items-center`}>
      <div className='appWrapper d-flex flex-column gap-4'>
        <Navigation/>
        <SearchForm/>
        <Display/>
      </div>
    </div>
  );
}

export default App;
