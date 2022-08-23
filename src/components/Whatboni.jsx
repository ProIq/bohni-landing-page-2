import React from 'react';
import speaker from "./images/speaker.svg";
import shop from "./images/shop.png";
const bon = "‘BONI’";
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
      <div className="about-what-container">
        <div className="what-is-boni">
          What is Boni?
        </div>
        <div className="about-boni-in-what">
          <span className="text-about-boni-in-what">
            Boni is a platform for small local businesses to manage and grow their business digitally
          </span>
        </div>
      </div>
      <div className="picture-in-what">
        <div className="picture-container">
          <div className="peer-containers">
          <img src={shop} alt="" className="picture-real-in-what" />
            <div className="peer1">

            </div>
            <div className="empty-div"></div>
            <div className="peer2">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatboni