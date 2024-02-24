import React from 'react';
import './header.css';
import logo from "../../assests/logo1.webp";
import logo1 from "../../assests/logo2.gif";
import logo2 from "../../assests/logo3.gif";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
    <div className="header__main">
      <h1 className="header__main-heading gradient-text">Unleash Your Collective Potential.</h1>
      <p className="header__main-text">Maximize your impact through seamless teamwork. platform that empowers collective action, unlocking the full potential of groups to achieve shared goals and drive meaningful change.</p>
      <div className="header__main-email">
        <input type="text" placeholder="Youtube/Tutorial Link" />
        <button className="header__main-btn">Let's Go</button>
      </div>
    </div>  
    <div className="header__img">
        <img src={logo1} alt="AI" />  
    </div> 
  </div>
  )
}

export default Header