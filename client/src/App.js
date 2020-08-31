import React from 'react';
import Navbar from './Components/navbar'

import Logo from './Components/logoandimage/logoandimage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>NAVIGATION BAR</p>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default App;
