import React from 'react';
import Navbar from './components/Navbar/navbar';
import Logo from './components/logoandimage/logoandimage';
import MainContent from './components/MainContent/maincontent';
import './App.css';
import Slider from './components/carousel/Slider';
import * as ReactBootStrap from "react-bootstrap";
import Footer from './components/footer/footer.js'
import ImgLogo from './components/imgLogo/imgLogo'


function App() {
  return (


    <div className="App">
      <div>
        <ImgLogo />
        <Logo />
        <Navbar />
        <Slider />
        <MainContent />
        <Footer />


      </div>
    </div>
  );
}

export default App;
