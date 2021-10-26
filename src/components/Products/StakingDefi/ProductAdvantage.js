import React from "react";
import advantage from "../../../assests/images/product/advantage.svg";

const ProductAdvantage = (props) => {
  return (
    <section className="productadvantagep-b-50">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after advantage-glow-bg p-b-150">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block mb-4">
                                    <div className="p-b-t-img"><img src={advantage} alt="" /></div>
                                    <h1>{props.productname} Industry <span class="gradient-text-yellow">Leading Features</span></h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2>Highly Available Infrastructure</h2>
                                        <p className="mb-4">We use kubernetes to distribute across 5 clouds with automated failover, and have never been slashed or had extended downtime in 3 years</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Diligenced By The Best</h2>
                                        <p className="mb-4">Our technical infrastructure has been audited by security and devops teams at the leading protocols, exchanges and custodians.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2>Broadest Asset Coverage</h2>
                                        <p className="mb-4">With support for 100+ assets and 50+ more coming soon, MENT TECH delivers rewards across the broadest range of crypto assets.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Optimal Rewards</h2>
                                        <p className="mb-4">We use custom algorithm to optimize rewards based on the unique dynamics of each chain or protocol we support.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2>API for Everything</h2>
                                        <p className="mb-4">Programmatic access to all staking, defi lending and reporting functionality makes integrations easy and seamless.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Multi-Asset Reporting</h2>
                                        <p className="mb-4">Designed for fund admins and accountants, the block-level reporting is exportable.</p>
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

export default ProductAdvantage;
