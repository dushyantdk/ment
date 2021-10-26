import React from "react";
import MultipleproductGlow from "../../../assests/images/multiple-product-glow.svg";
import Whatimg from "../../../assests/images/product/whatimg.svg";
import HeroImg from "../../../assests/images/product/hero-img.svg";

const WhatIs = (props) => {
  return (
    <section className="whatis mt-0">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                      <div className="row row-after mt-5 pt-5">
                        <div className="offset-md-1 col-lg-10">
                          <div className="row pb-5 align-items-center">
                            <div className="col-lg-12">
                              <div class="title-block mb-5">
                                <div className="p-b-t-img"><img src={Whatimg} alt="" /></div>
                                <h1>What is <span class="gradient-text-blue">Mining Pool</span></h1>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              
                              <p className="mb-5"><span class="circle-white"></span>Mining pools are groups of cooperating miners who agree to share block rewards in proportion to their contributed mining hash power.</p>
                              <p className="mb-5"><span class="circle-white"></span>While mining pools are desirable to the average miner as they smooth out rewards and make them more predictable, they unfortunately concentrate power to the mining pool’s owner.</p>
                              <p className="mb-5"><span class="circle-white"></span>Miners can, however, choose to redirect their hashing power to a different mining pool at anytime.</p>
                              <p className="mb-5"><span class="circle-white"></span>Due to the constraints of solo mining, the mining sector has devised a method of combining the hash power of individual miners to boost the probability of finding new blocks. This solution is what we call a mining pool. Think of it as a coordinated network of individual miners that have agreed to pool their computing power to generate output levels similar to those associated with large farms or even exceed them. </p>
                            </div>
                            <div className="col-lg-6">
                              <div className="">
                                <img src={HeroImg} alt="" />
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
