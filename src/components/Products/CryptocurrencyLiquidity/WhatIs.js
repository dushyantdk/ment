import React from "react";
import Whatimg from "../../../assests/images/product/whatimg.svg";
import Liquidity from "../../../assests/images/product/exchange-tk.png";

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
                          <div className="col-lg-12 text-white">
                            <div class="title-block mb-5">
                              <div className="p-b-t-img"><img src={Whatimg} alt="" /></div>
                              <h1>What is Cryptocurrency <span class="gradient-text-blue">{props.productname} Liquidity Solution?</span></h1>
                            </div>
                            <p className="mb-5"><span class="circle"></span>The term liquidity is generally used in the financial markets to describe the ease by which an asset can be converted into cash without difficulty. In terms of cryptocurrencies, liquidity is the ability of a coin to be easily converted into cash or other coins.</p>
                            <p className="mb-5"><span class="circle"></span>Liquidity is important for all tradable assets including cryptocurrencies. Low liquidity levels mean that market volatility is present, causing spikes in cryptocurrency prices. High liquidity, on the other hand, means there is a stable market, with few fluctuations in price.</p>
                            <p className="mb-5"><span class="circle"></span>It is thus easier to buy or sell cryptocurrencies in a liquid market since buy or sell orders will be filled more quickly due to the larger number of market participants. Essentially, this means it is possible to enter or exit a trade at any moment, given the fast-paced nature of the cryptocurrency markets.</p>
                          </div>
                          <div className="col-lg-12">
                              <img src={Liquidity} alt="" />
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
