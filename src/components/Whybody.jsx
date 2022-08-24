import React from 'react'
import binocu from "./images/binocu.svg";
import repair from "./images/repair.svg";
import vec from "./images/vec.svg";
import octi from "./images/Octicons.svg";
const Whybody = () => {
    return (
        <div className="why-body-container-dis">
            <div className="dis-in-why">
                <div className="dis-in-why-heading">
                    But these businesses are stuck in a
                    low income trap
                </div>
                <div className="empty-div-in-why"></div>
                <div className="circle-container">
                    <div className="circle-1 kl">
                        <img src={binocu} alt="" className="circle-1-img" />
                    </div>
                    <div className="circle-2 kl"><img src={octi} alt="" className="" /></div>
                    <div className="circle-3 kl"><img src={repair} alt="" className="" /></div>
                    <div className="circle-4 kl"><img src={vec} alt="" className="" /></div>
                </div>
                <div className="text-container">
                    <div className="text1">
                        Limited customer discovery
                    </div>
                    <div className="text1">
                        No engagement beyond usual customers
                    </div>
                    <div className="text1">
                        Limited access to business tools
                    </div>
                    <div className="text1">No access to credit</div>
                </div>
            </div>
        </div>
    )
}

export default Whybody