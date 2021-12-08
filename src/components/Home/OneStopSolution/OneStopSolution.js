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
                        <p><span class="par-titles">The enterprise blockchain ecosystem is led by Ment Fintech, a leader in software engineering.</span>We have developed blockchain-based solutions that have a direct impact on the businesses of leading financial institutions, governments, and corporations around the world. In addition to blockchain training, strategic advisory services, development and implementation services, and joint ventures and co-development, we also provide blockchain consulting and services on a global scale. Let us help you get started with blockchain today.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 text-white">
                <div className="col-lg-4">
                    <div className="one-block">
                        <div className="one-block-img">
                            <img src={Onestopicon1} alt="" />
                        </div>
                        <div className="one-block-content">
                            <h2>Crypto Exchange Turnkey</h2>
                            <p className="">White label exchange solution provider Ment Tech is a world leader. A detailed introduction to the Product portfolios, the risk management system, the applicable teams and the deployment process is presented here...</p>
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
                            <h2>Crypto Liquidity Solution</h2>
                            <p class="mari">It is generally understood that liquid funds can be converted without difficulty into cash on the financial markets by the term liquidity. In terms of cryptocurrencies, liquidity is the ability...</p>
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
                            <p>There are a variety of assets involved in OTC deals, such as commodities as well as financial instruments like cryptocurrencies and derivatives. OTC markets are decentralized and have no central authority, unlike traditional exchanges...</p>
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
