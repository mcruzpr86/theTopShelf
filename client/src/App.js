import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import ImgLogo from './components/imgLogo/imgLogo';
import Home from './components/pages/home';
import ContactUs from './components/pages/contactUs';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div>
            <ImgLogo />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/account" component={ContactUs} />
            </Switch>
           </div>
          </div>
      </Router>
    </div>


  );
}

export default App;
