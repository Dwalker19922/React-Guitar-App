import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home.js'
import Chords from './components/Chords.js'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header/>
     <Route exact path='/'>
    <Home/>
    </Route>

    <Route exact path='/chords'>
    <Chords/>
    </Route> 
    </div>
   
  );
}

export default App;
