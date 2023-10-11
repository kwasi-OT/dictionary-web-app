import './App.css';
import Display from './components/Display';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className='appContainer d-flex flex-column justify-content-center align-items-center'>
      <div className='appWrapper d-flex flex-column'>
        <Navigation/>
        <SearchForm/>
        <Display/>
      </div>
    </div>
  );
}

export default App;
