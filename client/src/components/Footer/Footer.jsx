import React from 'react';
import './footer.css';
// import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="footer section__padding" id="library" >
      <div className="footer-heading">
        <h1 className='gradient-text'>Get exclusive updates! Sign in to our newsletter</h1>
        {/* <input type="text" placeholder='Enter Your Email Address' /> */}
      </div>
      <div className="footer-container">
        <div className="container-img">
          {/* <img src={logo} alt="" /> */}
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="container-links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Conters</p>
          <p>Contacts</p>
        </div>
        <div className="container-company">
          <h4>Company</h4>
          <p>Privacy policy</p>
          <p>Terms and Conditions</p>
          <p>Contact</p>
        </div>
        <div className="container-contact">
          <h4>Get in touch</h4>
          <p>info@pay.com</p>
          <p>043-111233</p>
          <p>google</p>
        </div>
      </div>
    </div>
  )
}



export default Footer