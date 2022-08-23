import React from 'react'
import "../App.css";
import main1 from "./images/mainslide.svg";
const Body = () => {
  return (
    <div className="body-container">
      <div className="second">
        <img src={main1} alt="mainimage" className='image-of-body'></img>
        <span className="body-text">Powering Growth and Prosperity for small businesses everywhere.</span>
      </div>
    </div>
  )
}

export default Body