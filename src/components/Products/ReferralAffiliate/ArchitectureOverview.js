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
                                            <h1><span class="gradient-text-red">Referral & Affiliate Program</span> Made Easy</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <p className="mb-4"><span class="circle-white"></span>Real-time reporting & email notifications for affiliates</p>
                                        <p className="mb-4"><span class="circle-white"></span>Option to pay your affiliates with Crypto or Fiat (mass payments)</p>
                                        <p className="mb-4"><span class="circle-white"></span>Unlimited referrals, unlimited affiliates with statistics (per month, per user)</p>
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
                                            <li><h3>100+</h3><p>Client</p></li>
                                            <li><h3>$1M+</h3><p>Rewards</p></li>
                                            <li><h3>5s</h3><p>Execution</p></li>
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
