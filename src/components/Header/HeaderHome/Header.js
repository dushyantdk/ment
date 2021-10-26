import React ,{ useRef, useEffect, useState } from "react";
import CountUp from 'react-countup'; 
import Navigation from "../Navigation/Navigation";
import Typewriter from 'typewriter-effect';
import GlobeVideo from "../../../assests/images/home/globe.gif";

const Header = () => {
    
  return (
    <section className="headerhome">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center text-white">
                <div className="col-lg-8">
                    <h1>
                        <Typewriter
                        options={{
                        strings: [
                        'Blockchain <br/>Development',
                        'Financial Software <br/>Development',
                        'Crypto Exchange Liquidity <br/>Solution',
                        'Crypto banking <br/>Solution',
                        'Crypto Exchange <br/>Turnkey',
                        'Consulting Service',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 30,
                        }}
                        />
                    </h1>
                    <h2 className="fur">For Crypto Businesses Made Easy</h2>
                    <span>We provided innovative solutions to clientele across the furthest ends of business and scale spectrum.</span>
                </div>
                <div className="col-lg-4">
                  <img src={GlobeVideo} alt="HeaderGlobe" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                   <ul>
                       
                        <li>
                       <h3><CountUp end={20} />+</h3> 
                            <p>Countries and Regions</p>
                           
                        </li>
                        <li>
                            <h3><CountUp end={30} />+</h3>
                            <p>Industry Partner support</p>
                        </li>
                        <li>
                            <h3><CountUp end={150} />+</h3>
                            <p>Top-level Technicians</p>
                        </li>
                        <li>
                        <h3><CountUp end={200} />+</h3>
                            <p>Products and Services</p>
                        </li>
                        <li>
                        <h3><CountUp end={500} />+</h3>
                            <p>Client Services Experience worldwide</p>
                        </li>
                        <li>
                        <h3><CountUp end={2000} />+</h3>
                            <p>Security Maintenance Hours</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Header;
