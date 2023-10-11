import './App.css';
import Display from './components/Display';
import Navigation from './components/Navigation';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <SearchForm/>
      <Display/>
    </div>
  );
}

export default App;
