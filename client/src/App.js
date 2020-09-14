import React from 'react';
import Navbar from './componentsv2/Navbar/navbar';
import Logo from './componentsv2/logoandimage/logoandimage';
import MainContent from './componentsv2/MainContent/maincontent';
import './App.css';
import Slider from './componentsv2/carousel/Slider.js.js';
import * as ReactBootStrap from "react-bootstrap";
import ImgLogo from './componentsv2/imgLogo/imgLogo';
import Home from './componentsv2/pages/home';
import Account from './componentsv2/pages/userAccount';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <div>
          <ImgLogo />
          <Logo />
          <Link to= "/" style={{ textDecoration: 'none', color: 'maroon', margin: '10px', flexDirection: 'row', marginLeft: '90%'}}> Home</Link>
              
              <Link to= "/account" style={{ textDecoration: 'none', color: 'maroon', margin: '10px',flexDirection: 'row', marginLeft: '0%' }}> Account</Link> 
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
