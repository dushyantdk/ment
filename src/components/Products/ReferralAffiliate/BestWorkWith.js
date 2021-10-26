import React from "react";
import bestwith from "../../../assests/images/product/bestwith.svg";
import ExchangeCryptocurrency from "../../../assests/images/product/exchange-cryptocurrency.svg";
import Staking from "../../../assests/images/product/staking.svg";

const BestWorkWith = (props) => {
  return (
    <section className="securty-section">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                        <div className="row row-after mt-5 pt-5">
                            <div className="offset-md-1 col-lg-10">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div class="title-block mb-4 text-white">
                                        <div className="p-b-t-img"><img src={bestwith} alt="" /></div>
                                        <h1><span class="gradient-text-darkblue">It Works Best With</span></h1>
                                    </div>
                                </div>
                                    <div className="col-lg-12">
                                    <p>Our liquidity is best combined with the leading industry trading platforms to
provide the ultimate in performance and user satisfaction.</p>
                                </div>
                                </div>
                                 <div className="row mt-5 pb-5 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="circle-white"></div>
                                        <h2>Cryptocurrency Exchange Turnkey Solution</h2>
                                        <p>A turnkey cryptocurrency exchange is a great choice for getting started. Simplicity of maintenance and assistance along with cost-effectiveness are just a few of the many benefits available.</p>
                                        <ul className="security-d-ul">
                                            <li>Fulfill up to 10000 requests per second</li>
                                            <li>Commissions ladder</li>
                                            <li>Order execution less than 5 microseconds</li>
                                            <li>Loyalty token with commission discount for end-users</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-7">
                                        <img className="img-fuid" src={ExchangeCryptocurrency} alt="" />
                                    </div>
                                </div>
                                <div className="row mt-5 pb-5 align-items-center">
                                    <div className="col-lg-7">
                                        <div className="circle-white"></div>
                                        <img className="img-fuid" src={Staking} alt="" />
                                    </div>
                                    <div className="col-lg-5">
                                        <h2>Cryptocurrency Staking System</h2>
                                        <p>Staking is a great way to maximize your holdings in staking coins and fiat that would otherwise be sitting in your exchange account. Once you have staked your assets you can earn staking rewards on top of your holdings and grow them further by compounding those future rewards.</p>
                                        <ul className="security-d-ul">
                                            <li>Flagship user interface</li>
                                            <li>Solution for multiple business types</li>
                                            <li>Deep customizations & adjustments</li>
                                            <li>Widest range of external integrations</li>
                                        </ul>
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

export default BestWorkWith;
