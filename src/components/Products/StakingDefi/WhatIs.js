import React from "react";
import MultipleproductGlow from "../../../assests/images/multiple-product-glow.svg";
import Whatimg from "../../../assests/images/product/whatimg.svg";
import StakingIcon from "../../../assests/images/product/staking-icon.svg";

const WhatIs = (props) => {
  return (
    <section className="whatis p-y-100">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                      <div className="row row-after mt-5 pt-5">
                        <div className="offset-md-1 col-lg-10">
                        <div className="row align-items-center">
                          <div className="col-lg-12 text-white">
                            <div class="title-block mb-5">
                              <div className="p-b-t-img"><img src={Whatimg} alt="" /></div>
                              <h1>Why Choose Ment's <span class="gradient-text-blue">Crypto Staking & Defi Lending Turnkey?</span></h1>
                            </div>
                          </div>
                          <div className="col-lg-6 text-white pb-5">
                            <p className="mb-5"><span class="circle"></span>Leading exchanges, custodians and apps rely on ment’s secure, reliable and non-custodial infrastructure to earn rewards for their customers. ment tech supports the broadest range of crypto assets with a single integration</p>
                            <p className="mb-5"><span class="circle"></span>Leverage crypto staking & defi lending turnkey high availability infrastructure, 24/7/365 devops support, comprehensive apis, audited smart contracts and block-level reporting to offer fixed income services for 30+ pos and defi assets.</p>
                            <p className="mb-5"><span class="circle"></span>Our crypto staking & defi lending turnkey has never been slashed, hacked or experienced extended downtime in 3 years on many different networks.</p>
                            <p className="mb-5"><span class="circle"></span>Programmatic access to all staking, defi lending and reporting functionality makes integrations easy and seamless. We support a wide variety of node types, custody setups and even custom versions of ment tech defi lending service.</p>
                          </div>
                          <div className="col-lg-6">
                            <div className="">
                              <img className="glow-bg-whatis" src={MultipleproductGlow} alt="" />
                              <img className="postion-absolute right-0 z-1" src={StakingIcon} alt="" />
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
