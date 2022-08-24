import React from 'react'
import discover from "./images/discover.svg";
import engage from "./images/engage.svg";
import shop from "./images/shop.svg";
import marketing from "./images/marketing.svg"; 
import optimise from "./images/optimise.svg";
import money from "./images/money.svg";
const Cards = () => {
    return (
        <div className='cards-container'>
            <div className="cards-head">What we offer?</div>
            <div className="cards-actual-container">
                <div className="card-1 card"><img src={discover} alt="" /><div className="card-heading">Get found</div><div className="card-inside">Get found by customers near you with Bino.</div></div>
                <div className="card-2 card"><img src={engage} alt="" /><div className="card-heading">Engage better</div><div className='card-inside'>Engage better with your existing customers, leading to more retention and repeat purchases</div></div>
                <div className="card-3 card"><img src={marketing} alt="" /><div className="card-heading">Market business</div><div className="card-inside">
                Send updates and offers to attract new customers and gain visibility</div></div>
                <div className="card-4 card"><img src={shop} alt="" /><div className="card-heading">Manage business tools</div><div className="card-inside">Digital tools to manage your business better</div></div>
                <div className="card-5 card"><img src={optimise} alt="" /><div className="card-heading">Optimise costs</div><div className="card-inside">Improve inventory and supply chain and save costs</div></div>
                <div className="card-6 card"><img src={money} alt="" /><div className="card-heading">Access to credit</div><div className="card-inside">Access financial services like credit based on how your business does</div></div>
            </div>
        </div>
    )
}

export default Cards