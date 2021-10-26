import React from "react";
import WhitBlock1 from "../../../assests/images/home/white-block-1.svg";
import WhitBlock from "../../../assests/images/home/white-block.svg";
import WhitBlock3 from "../../../assests/images/home/white-block-3.svg";
const PrimaryStable = () => {
  return (
    <section className="primarystable py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <div class="title-block">
                        <p>MENT FINTECH</p>
                        <h1>Stable and Secure <span class="gradient-text-red"> Primary Modules</span></h1>
                    </div>
                </div>
            </div>
            <div className="row py-5 postion-relative z-1 align-items-center">
                <div className="col-lg-7">
                    <img className="img-fluid" src={WhitBlock1} alt="" />
                </div>
                <div className="col-lg-5">
                    <div className="primary-m-content">
                        <h2 className="mb-3">Spot Trading System</h2>
                        <p>
                            <span>High-Performance Matching Engine</span>
                            Powerful memory matching, with over 50,000 tps for each trading pair.
                        </p>
                        <p>
                            <span>Professional Transaction</span>
                            It supports customized and third-party K-lines, technical analysis and drawing tools, and supports strategy orders and API orders.
                        </p>
                        <p>
                            <span>Supporting Functions</span>
                            It supports financial system, risk control system and centralized wallets. It supports all mainstream coins and their tokens, provides supporting background audit and operation CMS system, as well as rapid and stable system deployment and delivery.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row py-5 postion-relative z-1 align-items-center mobile-col-flip">
                <div className="col-lg-5">
                    <div className="primary-m-content">
                        <h2 className="mb-3">OTC Trading System</h2>
                        <p>
                            <span>What is OTC Desk?</span>
                            In Over-the-counter (OTC) trading, we offer deeper liquidity and a 
private, more personalized service to institutions and high net-worth individuals needing to fill large orders.
                        </p>
                        <p>
                            <span>High Volume Professional Transactions</span>
                            Whether you are trading blocks of $100,000, €10,000,000 or 2,000 
Bitcoin, the OTC desk will provide you with execution and settlement services that are discreet, secure and ultra-competitive.
                        </p>
                        <p>
                            <span>Safety Guaranteed</span>
                            Each transaction will be audited by the system, risk rate will be 
calculated in real time.
                        </p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <img className="img-fluid" src={WhitBlock} alt="" />
                </div>
            </div>
            <div className="row justify-content-center py-5 postion-relative z-1">
                <div className="col-lg-7">
                    <img className="img-fluid" src={WhitBlock3} alt="" />
                </div>
            </div>
            <div className="row justify-content-center py-5 postion-relative z-1 bg-white last-sable-block">
                <div className="col-lg-5">
                    <div className="primary-m-content text-center">
                        <h2 className="mb-3">Liquidity Aggregation Bot</h2>
                        <p>
                            <span>Leading Liquidity System</span>
                            It provides liquidity of over 100 mainstream currency pairs and popular currency pairs, as well as top trading depth and continuous K-line charts.
                        </p>
                        <p>
                            <span>Professional Hedging Strategies</span>
                            With professional hedging strategies, the exchange can manage its own positions.
                        </p>
                        <p>
                            <span>All Transaction Types Are Supported</span>
                            It provides solutions for spot trading liquidity, futures trading and OTC trading liquidity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PrimaryStable;
