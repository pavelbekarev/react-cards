import './App.css';
import {Header} from './components/Header';
import {Set} from './components/Set';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='cards__content'>
        <Set />
        <Set />
        <Set />
      </div>
    </div>
  );
}

export default App;
