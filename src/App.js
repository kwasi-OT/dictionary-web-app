import './App.css';
import Display from './components/Display';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className='appWrapper d-flex flex-column'>
      <Navigation/>
      <SearchForm/>
      <Display/>
    </div>
  );
}

export default App;
