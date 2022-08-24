import React from 'react'
import phoneleft from "./images/phoneleft.svg";
import phoneright from "./images/phoneright.svg";
import main from "./images/main.svg";
const Phone = () => {
    return (
        <div className="phone-container-whole">
            <div className="phones-container">
                <div className="low">
                    <div className="phone-left">
                        <img src={phoneleft} alt="" />
                    </div>
                    <div className="phone-right">
                        <img src={phoneright} alt="" className="right" />
                        <img src={main} alt="" className='right-back' />
                    </div>
                </div>
            </div>
            <div className="ad-play-store"></div>
        </div>
    )
}

export default Phone