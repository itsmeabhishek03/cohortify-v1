import React from 'react';
import './navbar.css';
import logo from '../../assests/logo.png'

const Navbar = () => {
  return (
    <div className="navbar navbar__padding">
        <div className="navbar-logo"> 
          <img src={logo} alt="logo" />
          <p>Cohortify</p>
        </div>
        <div className="navbar-links">
         <p><a href="#home">Home</a></p>
         <p><a href="#gpt3">About Us</a></p>
         <p><a href="#tutorial">Tutorial</a></p>
        
        </div>
        <div className="navbar-btn">
          <button className="navbar-btn-in">Sign in</button>
          <button className="navbar-btn-up">Sign up</button>
        </div>

    </div>
  )
}

export default Navbar