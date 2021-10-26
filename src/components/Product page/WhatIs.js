import React from "react";
import MultipleproductGlow from "../../assests/images/multiple-product-glow.svg";
import Whatimg from "../../assests/images/product/whatimg.svg";




const WhatIs = (props) => {
  return (
    <section className="whatis">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                      <div className="row row-after mt-5 pt-5">
                        <div className="offset-md-1 col-lg-11">
                        <div className="row">
                          <div className="col-lg-12">
                            <div class="title-block mb-5 text-white">
                              <div className="p-b-t-img"><img src={Whatimg} alt="" /></div>
                              <h1>What is <span class="gradient-text-blue">{props.productname}</span></h1>
                            </div>
                          </div>
                        </div>  
                        <div className="row align-items-center">
                          <div className="col-lg-5 text-white">
                            
                            <p className="mb-5"><span class="circle"></span>{props.para2}</p>
                            <p className="mb-5"><span class="circle"></span>{props.para3}</p>
                            <p className="mb-5"><span class="circle"></span>{props.para4}</p>
                          </div>
                          <div className="col-lg-7">
                            <div className="">
                              <img className="glow-bg-whatis" src={MultipleproductGlow} alt="" />
                              <img className="postion-absolute right-0 z-1" src={props.img} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="row my-5">
                          <div className="col-lg-12 text-white">
                              <div className="row mt-4">
                                <div className="col-lg-4 col-md-4">
                                  <h4>Spot Trading System</h4>
                                  <ul>
                                    <li>Spot trading system</li>
                                    <li>Professional transaction</li>
                                    <li>Supporting functions</li>
                                    <li>Multiple transaction modes</li>
                                  </ul>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <h4>OTC Trading System</h4>
                                  <ul>
                                    <li>High volume professional transactions</li>
                                    <li>Safety guaranteed</li>
                                    <li>Full asset support</li>
                                  </ul>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                  <h4>Liquidity Aggregation Bot</h4>
                                  <ul>
                                    <li>Leading liquidity system</li>
                                    <li>Professional hedging strategies</li>
                                    <li>All transaction types are supported</li>
                                    <li>Transaction fees rate and spread</li>
                                  </ul>
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

export default WhatIs;
