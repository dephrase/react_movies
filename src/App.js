import logo from './logo.svg';
import './App.css';
import MovieContainer from './containers/MovieContainer';
import { directive } from '@babel/types';

function App() {
  return (
    <div className="App">
      <MovieContainer/>
    </div>
  );
}

export default App;
