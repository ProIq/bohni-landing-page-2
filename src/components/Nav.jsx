import React from 'react'
import "../App.css";
import downloadnav from "./images/download-nav.svg";
import boni from "./images/boni.png";
const Nav = () => {
  return (
    <div className="nav-bar-container">
        <div className="nav-bar-icon-about-contact">
            <div className="nav-boni-icon"><img src={boni} alt="" className='boni-nav-img' />
                <span className="about-nav">About us</span>
                <span className="about-nav">Contact</span>
            </div>
        </div>
        <div className="nav-bar-button">
            <button className="download-nav">Download app <img src={downloadnav} alt="" className="" /></button>
        </div>
    </div>
  )
}

export default Nav