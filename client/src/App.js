import React from 'react';
import Navbar from './components/Navbar/navbar';
import Logo from './components/logoandimage/logoandimage';
import MainContent from './components/MainContent/maincontent';
import './App.css';
import Slider from './components/carousel/Slider.js';
import * as ReactBootStrap from "react-bootstrap";
import ImgLogo from './components/imgLogo/imgLogo';
import Home from './components/pages/home';
import Favorites from './components/pages/favorites';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <div>
          <ImgLogo />
          <Logo />
          <Navbar />
          <ul>
            <li>
              <Link to= "/"> Home</Link>
            </li>
            <li>
            <Link to= "/favorites"> Favorites</Link>

            </li>
          </ul>
          <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
          <Slider />
          <MainContent />
       
      
      </div>
      </div>
    </Router>
    
  );
}

export default App;
