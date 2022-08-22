import React from 'react'
import "../App.css";
import arrowdown from "./images/arrowdown.svg";
import globe from "./images/globe.svg";
import v1 from "./images/header-email.svg";
import whatsapphead from "./images/whatsapp-head.svg";
const Header = () => {
  return (
    <div className="header">
        <div className="header-container-1">
            <span className="english-head text-header"><img src={globe} alt="" className="globe-header-icon" />English<img src={arrowdown} alt="" className="arrowdown-header" /></span>
        </div>
        <div className="header-container-2 text-header">
            <span className="email text-header">
                <img src={v1} alt="" className="email-icon-header" />
                contact@boni.co.in
            </span>
            <span className="whatsapp-head text-header">
            <img src={whatsapphead} alt="" className="whatsapp-icon-header" />
            Whatsapp
            </span>
        </div>
    </div>
  )
}

export default Header