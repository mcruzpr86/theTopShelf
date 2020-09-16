import React from 'react';
import "../pages/pages.css"
import Navbar from '../Navbar/navbar';
import Logo from '../logoandimage/logoandimage';
import MainContent from '../MainContent/maincontent';
import '../pages/pages.css';
import Slider from '../carousel/Slider.js';
import * as ReactBootStrap from "react-bootstrap";
import Footer from '../footer/footer.js';
import ImgLogo from '../imgLogo/imgLogo';

import ContactUs from './contactUs';


function Home() {
  return (

    <div>
      <div className="Home">
        <div>
                <ImgLogo />
                <Logo />
                <Navbar />
                <Slider />
                <MainContent />
                <hr></hr>
                <Footer />
        </div>
      </div>
=
    </div>

  );
}

export default Home;