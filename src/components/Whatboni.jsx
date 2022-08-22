import React from 'react';
import speaker from "./images/speaker.svg";
const bon="‘BONI’";
const Whatboni = () => {
  return (
    <div className="Whatboni-container">
        <div className="round-what-container">
            <div className="what-round">
                <span className="heading-of-circle">
                   {bon} 
                </span>
                <span className="body-of-circle">
                Meaning - First sale of the day
                </span>
                <span className="boni-of-circle">
                    boˈnɪ
                </span>
                <img src={speaker} alt="" className="speaker-of-circle" />
            </div>
        </div>
    </div>
  )
}

export default Whatboni