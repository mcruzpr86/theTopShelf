import React from 'react';
import "./pages.css"
import Form from '../form/form'
import "../pages/pages.css"
import Navbar from '../Navbar/navbar';
import Logo from '../logoandimage/logoandimage';
import '../pages/pages.css';
import Slider from '../carousel/Slider.js';
import * as ReactBootStrap from "react-bootstrap";
import Footer from '../footer/footer.js';
import ImgLogo from '../imgLogo/imgLogo';



function ContactUs() {
  return (
    

<div>
  <div>
    <ImgLogo />
    <Logo />
    <Navbar />
    <Slider />
    <br></br>
    <Form />
    <hr></hr>
    <Footer />

  </div>

</div>

  );
}

export default ContactUs;