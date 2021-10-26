import React from "react";
import architecture from "../../../assests/images/product/architecture.svg";
import Exchangettk from "../../../assests/images/product/exchange-tk.png";

const ArchitectureOverview = (props) => {
  return (
    <section className="architectureoverview">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block mb-5">
                                    <div className="p-b-t-img"><img src={architecture} alt="" /></div>
                                    <h1>Get <span class="gradient-text-red">OTC Trading System</span> & Expand Your Ecosystem</h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-5">
                                <p className="mb-4"><span class="circle-white"></span>Save months and years of development time and costs. Instantly set up your own world-class trading desk and customize it with your own branding. This p2p solution is even ideal for existing exchanges because ment tech eliminates real and perceived conflicts of interest associated with non-transparency, intermediaries posing as counterparties. Buyers deal directly with sellers.</p>
                                <p className="mb-4"><span class="circle-white"></span>Whether you are trading blocks of $100,000, €10,000,000 or 2,000 bitcoin, the otc desk will provide you with execution and settlement services that are discreet, secure and ultra-competitive. Our otc desk can support all fiat currencies and digital assets currencies for the coverage of global markets.</p>
                                <p className="mb-4"><span class="circle-white"></span>In over-the-counter (OTC) trading, we offer deeper liquidity and a private, more personalized service to institutions and high net-worth individuals needing to fill large orders. Each transaction will be audited by the system, risk rate will be calculated in real time.</p>
                            </div>
                            <div className="col-lg-6 offset-lg-d1">
                                <div className="architecture-img">
                                <img className="pimg-fluid" src={Exchangettk} alt="" />
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

export default ArchitectureOverview;
