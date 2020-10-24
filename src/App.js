
import React from 'react';
import './App.css';
import Cards from './card.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Resume from './resume.js';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
function App()
{
    return(
        <div className="App">
          <BrowserRouter>
          <Route exact path="/reactjs" component={Cards}/>
          <Route exact path="/resume" component={Resume}/>
          </BrowserRouter>
        </div>
    );
}
export default App;
