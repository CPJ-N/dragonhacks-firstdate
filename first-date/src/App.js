import React from 'react';
import logo from './logo.svg';

import Gender from './components/gender';
import Time from './components/time';
import Counter from './components/counter';
import './App.css';



//handdleClick  = () => { this.count +=1;}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><i>First Date</i></h1>
        <img src="https://cdn.pixabay.com/photo/2017/04/03/15/52/love-you-2198772__340.png" className="App-logo" alt="logo" /> 
        <p>
          Plan Your date!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        < Counter />
      </header>
    </div>
  );
}

export default App;
