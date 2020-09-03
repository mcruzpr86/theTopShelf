import React from 'react';
import Navbar from './components/Navbar/navbar'
import Logo from './components/logoandimage/logoandimage';
import './App.css';
import Dmenu from './components/DropMenu';
import Slider from './components/carousel/Slider'

function App() {
  return (

    
    <div className="App">
      
      <div>
      <Navbar />
      <Logo />
      <Dmenu />
      <Slider />
      </div>
      
     </div>
  );
}

export default App;
