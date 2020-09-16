import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import ImgLogo from './components/imgLogo/imgLogo';
import Home from './components/pages/home';
import userAccount from './components/pages/userAccount';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="App">

          <ImgLogo />
          <Link to="/" style={{ textDecoration: 'none', color: 'maroon', margin: '10px', flexDirection: 'row', marginLeft: '90%' }}> Home</Link>

          <Link to="/account" style={{ textDecoration: 'none', color: 'maroon', margin: '10px', flexDirection: 'row', marginLeft: '0%' }}> Account</Link>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" component={userAccount} />
          </Switch>

        </div>
      </Router>
    </div>


  );
}

export default App;
