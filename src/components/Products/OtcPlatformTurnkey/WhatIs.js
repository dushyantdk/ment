import React from "react";
import MultipleproductGlow from "../../../assests/images/multiple-product-glow.svg";
import Whatimg from "../../../assests/images/product/whatimg.svg";
import OTC from "../../../assests/images/product/otc-3.png";

const WhatIs = (props) => {
  return (
    <section className="whatis">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                      <div className="row row-after mt-5 pt-5">
                        <div className="offset-md-1 col-lg-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div class="title-block mb-4 text-white">
                              <div className="p-b-t-img"><img src={Whatimg} alt="" /></div>
                              <h1>What is OTC <span class="gradient-text-blue">{props.productname} Trading?</span></h1>
                            </div>
                          </div>
                          <div className="col-lg-12 text-white mb-5">
                            <p className="mb-4"><span class="circle"></span>Generally speaking, over-the-counter (OTC) trading is a deal that happens directly between two interested parties — that is, without the supervision of exchanges.</p>
                            <p className="mb-4"><span class="circle"></span>OTC deals involve a wide range of assets — from commodities to financial instruments like cryptocurrencies and derivatives. Unlike traditional exchanges, the OTC market is decentralized and has no physical location, and trading is done via dealer networks. Traders are not necessarily involved in the process directly, as they can seek assistance of middlemen, like brokers, etc.</p>
                            <p className="mb-4"><span class="circle"></span>According to some estimates, crypto OTC trading currently has larger daily volumes than the major exchanges. For instance, investigators from digital assets research and tabb group found out that the OTC market facilitated $250 million to $30 billion in trades per day in April 2018, while the exchanges handled about $15 billion in daily trades during the same period.</p>
                          </div>
                          <div className="col-lg-12">
                            <div className="">
                              <img className="glow-bg-whatis" src={MultipleproductGlow} alt="" />
                              <img className="postion-absolute right-0 z-1" src={OTC} alt="" />
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
