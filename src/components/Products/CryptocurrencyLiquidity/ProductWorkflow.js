import React from "react";
import workflow from "../../../assests/images/product/workflow.svg";

const ProductWorkflow = (props) => {
  return (
    <section className="productworkflow SolutionModules">
       <div className="container wide-block">
           <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after">
                            <div class="col-lg-11 offset-md-1">
                                <div class="title-block mb-4">
                                    <div class="p-b-t-img">
                                        <img src={workflow} alt="" />
                                    </div>
                                    <h1>Cryptocurrency Liquidity <span class="gradient-text-red">Solution Modules</span></h1>
                                </div>
                            </div>
                            <div class="col-lg-11 offset-md-1">
                                <h2>Cryptocurrency Liquidity Solutions</h2>
                                <p>
                                We have spent many years building a deep liquidity network and investing in our pricing technology. This means we can offer you ultra-competitive pricing and great execution on a wide selection of markets. Our forex liquidity is incomparable in the industry.
                                </p>   
                            </div>
                            <div className="offset-md-1 col-lg-11 text-white mb-5">
                                <div className="circle-white"></div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="blue-bg p-4 rounded-2 mb-5">
                                            <h3 className="gradient-text-yellow mb-3">Liquidity Aggregation Bot</h3>
                                            <p>Our liquidity aggregation bot brings orderbook and trade history data to your exchange from other exchanges with huge volume like binance, huobi etc. It is the best solution to make your exchange look alive even being new to the market.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="blue-bg p-4 rounded-2 mb-5">
                                            <h3 className="gradient-text-yellow mb-3">Market Maker Bot</h3>
                                            <p>The system provides better liquidity and depth of transaction, helping exchanges, brokers and institutional investors reduce costs and increase efficiency</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="blue-bg p-4 rounded-2 mb-5">
                                            <h3 className="gradient-text-yellow mb-3">Crypto CFD Liquidity</h3>
                                            <p>CFD are a convenient way of trading cryptocurrencies. Ment tech offers an incomparable crypto cfd solution aggregating cryptocurrency exchanges, non-bank liquidity providers, cryptocurrency brokers, otc orders of institutional clients, hedge funds and thousands of client-broker orders to create the deepest liquidity pool in the industry to meet all our client’s needs.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="blue-bg p-4 rounded-2 mb-5">
                                            <h3 className="gradient-text-yellow mb-3">Enterprise Liquidity Solutions</h3>
                                            <p>Liquidity is important for all tradable assets including cryptocurrencies and traders need to have transactions completed as quickly and as cost effectively as possible. less volume ? no worries! our enterprise liquidity solution will let your trades executed from other exchanges with huge volume like binance, huobi etc.</p>
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

export default ProductWorkflow;
