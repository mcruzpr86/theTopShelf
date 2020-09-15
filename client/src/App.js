import React from 'react';
import Navbar from './components/Navbar/navbar';
import Logo from './components/logoandimage/logoandimage';
import MainContent from './components/MainContent/maincontent';
import './App.css';
import Slider from './components/carousel/Slider.js';
import * as ReactBootStrap from "react-bootstrap";
import ImgLogo from './components/imgLogo/imgLogo';
import Home from './components/pages/home';
import Account from './components/pages/userAccount';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div>
            <ImgLogo />
            <Logo />
            <Link to="/" style={{ textDecoration: 'none', color: 'maroon', margin: '10px', flexDirection: 'row', marginLeft: '90%' }}> Home</Link>

            <Link to="/account" style={{ textDecoration: 'none', color: 'maroon', margin: '10px', flexDirection: 'row', marginLeft: '0%' }}> Account</Link>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/account" component={Account} />
            </Switch>

            <Navbar />
            <Slider />
            <MainContent />

          </div>
        </div>
      </Router>
    </div>


  );
}

export default App;
