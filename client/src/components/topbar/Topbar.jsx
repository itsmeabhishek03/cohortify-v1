import React, { useState } from "react";
import {Link } from "react-router-dom";
import "./topbar.css";
import logo from "../../assests/logo.png";
import user from "../../assests/user.jpeg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="topbar navbar__padding">
      <div className="topbar-left">
        <img src={logo} alt="logo" height={45} width={45} />
        <p>Cohortify</p>
      </div>
      <div className="topbar-right">
      <div className="topbarCenter">
          <input           
          type="text"
          onChange={(e)=>setSearch(e.target.value)}
          placeholder='Search user...' 
          className="topbarInput" />
          <SearchIcon  className='topbarSearchIcon' />
        </div>
        <div>
        <img src={user} alt="user" className="topbarImg"/>
        </div>

        <DarkModeIcon color="secondary" className="themebutton" />
      </div>
    </div>
  );
};

export default Topbar;
