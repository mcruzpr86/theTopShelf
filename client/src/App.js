import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/logoandimage/logoandimage';
import './App.css';
import Slider from './components/carousel/Slider'
import * as ReactBootStrap from "react-bootstrap";


function App() {
  return (


    <div className="App">
      <div>

        <Logo />
        <Navbar />
        <Slider />


      </div>
    </div>
  );
}

export default App;
