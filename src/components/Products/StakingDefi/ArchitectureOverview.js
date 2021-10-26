import React from "react";
import architecture from "../../../assests/images/product/architecture.svg";
import Staking2 from "../../../assests/images/product/staking-2.svg";

const ArchitectureOverview = (props) => {
  return (
    <section className="architectureoverview">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after">
                            <div className="col-lg-11 offset-md-1">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div class="title-block mb-5">
                                            <div className="p-b-t-img"><img src={architecture} alt="" /></div>
                                            <h1><span class="gradient-text-red">Crypto Staking & Defi Lending</span> Made Easy</h1>
                                            <p className="text-normal">Crypto staking & defi lending technical infrastructure was designed from the ground up for the unique requirements
of crypto networks. We deliver rewards reliably while minimizing slashing risks.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <p className="mb-4"><span class="circle-white"></span>We use Kubernetes to distribute across 5 clouds with automated failover, and have never been slashed or had extended downtime in 3 years.</p>
                                        <p className="mb-4"><span class="circle-white"></span>We have spent considerable resources implementing and testing proprietary software that prevents double signing in a highly fault tolerant setting.</p>
                                        <p className="mb-4"><span class="circle-white"></span>Our technical infrastructure has been audited by security and devops teams at the leading protocols, exchanges and custodians.</p>
                                    </div>
                                    <div className="col-lg-5 text-center">
                                        <div className="architecture-img">
                                        <img className="pimg-fluid" src={Staking2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-lg-12">
                                        <ul className="numbers-ul">
                                            <li><h3>100+</h3><p>Market Pair</p></li>
                                            <li><h3>5</h3><p>Liquidity Venues</p></li>
                                            <li><h3>5ms</h3><p>Execution From</p></li>
                                            <li><h3>50+</h3><p>Exchanges Connected</p></li>
                                            <li><h3>24/7</h3><p>Technical Support</p></li>
                                        </ul>
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

export default ArchitectureOverview;
