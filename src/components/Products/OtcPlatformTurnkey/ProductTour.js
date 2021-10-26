import React from "react";
import advantage from "../../../assests/images/product/advantage.svg";
import OTC1 from "../../../assests/images/product/otc-1.png";
import OTC2 from "../../../assests/images/product/otc-2.png";
import OTC3 from "../../../assests/images/product/otc-3.png";

const ProductTour = (props) => {
  return (
    <section className="productadvantage">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after advantage-glow-bg p-b-150">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block mb-4">
                                    <div className="p-b-t-img"><img src={advantage} alt="" /></div>
                                    <h1>Quick <span className="gradient-text-yellow">Product Tour</span></h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="row mb-4 align-items-center">
                                    <div className="col-lg-6">
                                        <div className="circle-white"></div>
                                        <img src={OTC1} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="gradient-text-yellow">01</h1>
                                        <p className="mb-4">Our software plugs seamlessly into your onboarding process, allowing full control of who can use your platform.</p>
                                        <p className="mb-4">Every trader goes through a kyc process, designed to eliminate fraud. Your customers can link their custody wallets to the platform as proof to other traders that the posted assets are in their full control.</p>
                                    </div>
                                </div>
                                <div className="row mb-4 align-items-center f-column-reverse">
                                    <div className="col-lg-6">
                                        <div className="circle-white"></div>
                                        <h1 className="gradient-text-yellow">02</h1>
                                        <p className="mb-4">OTC platform locks in asset prices for 30 seconds while the deal is completing negotiations. This gives traders time to reconsider, re-price, validate or cancel.</p>
                                        <p className="mb-4">In over-the-counter (OTC) trading, we offer deeper liquidity and a private, more personalized service to institutions and high net-worth individuals needing to fill large orders.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={OTC2} alt="" />
                                    </div>
                                </div>
                                <div className="row mb-4 align-items-center">
                                    <div className="col-lg-6">
                                        <div className="circle-white"></div>
                                        <img src={OTC3} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="gradient-text-yellow">03</h1>
                                        <p className="mb-4">Traders get full control. Users verify and validate deal details before executing each trade. Security is enhanced with 2-factor authentication (2fa) to ensure safety.</p>
                                        <p className="mb-4">Once the trader confirms execution, the trade is settled instantly. blazingly fast.</p>
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

export default ProductTour;
