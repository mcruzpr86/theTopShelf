import React from 'react';
import Navbar from './components/Navbar/navbar';
import Logo from './components/logoandimage/logoandimage';
import './App.css';
import Slider from './components/carousel/Slider'
import * as ReactBootStrap from "react-bootstrap";
import ImgLogo from './components/imgLogo/imgLogo'


function App() {
  return (


    <div className="App">
      <div>
        <ImgLogo />
        <Logo />
        <Navbar />
        <Slider />


      </div>
    </div>
  );
}

export default App;
