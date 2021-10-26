import React from "react";
import Onestopicon1 from "../../../assests/images/home/one-stop-icon-1.svg";
import Onestopicon2 from "../../../assests/images/home/one-stop-icon-2.svg";
import Onestopicon3 from "../../../assests/images/home/one-stop-icon-3.svg";
import Ment from "../../../assests/images/m-logo-blue.svg";
const OneStopSolution = () => {
  return (
    <section className="onestopsolution">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 text-center">
                    <div className="title-block">
                        <h1 className="mb-4">One-Stop <span className="gradient-text-red">Solution</span></h1>
                        <p>MentFintech is the market leader of software engineering of ecosystem projects of organization blockchain. Our services and products of blockchain have helped to governments, banks and financial institutions, and conglomerates easily introduce solutions based on blockchain that have a direct impact on business. Our international solutions experts provide strategic advice, training of blockchain, services implementation and development, and also provide the opportunities for co-creation and joint venture. We are right here to assist you and your business with your journey of blockchain.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className="one-block">
                        <div className="one-block-img">
                            <img src={Onestopicon1} alt="" />
                        </div>
                        <div className="one-block-content">
                            <h2>Crypto Exchange Turnkey</h2>
                            <p className="">Ment FinTech is a leading global provider of white label exchange solutions. This page provides the comprehensive introduction about portfolios of product....</p>
                            <a href="/crypto-exchange-turnkey-solution">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="one-block">
                        <div className="one-block-img two">
                            <img src={Onestopicon2} alt="" />
                        </div>
                        <div className="one-block-content">
                            <h2>Liquidity Solutions of crypto</h2>
                            <p>This term usually used in financial businesses to explain the ease with which assets can be easily transformed into cash. Liquidity is ability under the umbrella...</p>
                            <a href="/cryptocurrency-liquidity-solution">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="one-block">
                        <div className="one-block-img three">
                            <img src={Onestopicon3} alt="" />
                        </div>
                        <div className="one-block-content">
                            <h2>OTC & P2P Trading Platform</h2>
                            <p>OTC deals involve a wide range of assets — from commodities to financial instruments like cryptocurrencies and derivatives. Unlike traditional exchanges...</p>
                            <a href="/otc-trading-system">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OneStopSolution;
