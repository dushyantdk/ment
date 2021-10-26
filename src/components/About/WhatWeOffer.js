import React from "react";
import CeoPic from "../../assests/images/AboutUs/ceo-pic.svg";
import StarIcon from "../../assests/images/AboutUs/star.png";

const WhatWeOffer = () => {
  return (
    <section className="weoffer-sections">
        <div className="container wide-block">
          <div class="row">
            <div class="col-lg-12">
              <div className="overflow-hidden">
                <div className="row row-after">
                  <div className="col-lg-11 offset-md-1">
                  <div class="circle-white"></div>
                    <div class="title-block">
                      <p>MENT TECH</p>
                      <h1>What <span class="gradient-text-red">We Offer</span></h1>
                    </div>
                  </div>
                  <div className="col-lg-11 offset-md-1 mt-5">
                    <div className="row">
                      <div className="col-lg-3">
                        <p class="gradient-text-red font-22">New technologies have 
                        penetrated all areas of our life. The FINTECH industry is highly sensitive to every change in 
                        virtually all areas of business. We work around the clock to 
                        improve all our products, 
                        constantly investing in people, technology, customer support and infrastructure. Thus, we are always at the peak of 
                        technological innovation, 
                        enabling our customers to 
                        receive the best service in the industry at the lowest cost.
                        </p>
                        <div className="ceo-pic">
                          <a href="https://www.linkedin.com/in/ujjwalsahay/" target="_blank" className="no-underline">
                            <img src={CeoPic} alt="" />
                            {/* <img className="stareicon" src={StarIcon} alt="" /> */}
                            <h3>Ujjwal Sahay</h3>
                            <p>Founder and CEO</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="row">
                          <div className="col-lg-6 mb-5">
                            <div className="bg-white card-mktg border-r-10 p-4 weoffer-block">
                              <h2>24/7 technical support</h2>
                              <p>We offer institutional-grade tools and technology and complement those capabilities with bespoke attention when it come to problem solving</p>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-5">
                            <div className="bg-white card-mktg border-r-10 p-4 weoffer-block">
                              <h2>Integrations with all the most popular solutions</h2>
                              <p>in the market so our clients are able to get everything in one place</p>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-5">
                            <div className="bg-white card-mktg border-r-10 p-4 weoffer-block">
                              <h2>A personal account manager</h2>
                              <p>from the time of contract-signing is available in your native language and is on hand to serve you all way towards your success</p>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-5">
                            <div className="bg-white card-mktg border-r-10 p-4 weoffer-block">
                              <h2>Professional access to Exchange and Crypto liquidity</h2>
                              <p>via multiple connection methods is available for all our clients.</p>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-5">
                            <div className="bg-white card-mktg border-r-10 p-4 weoffer-block">
                              <h2>A full range of services</h2>
                              <p>to start your own brokerage or exchange with minimum cost and maximum levels of technology and professionalism</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </section>
  );
};

export default WhatWeOffer;
