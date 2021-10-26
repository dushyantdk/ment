import React from "react";
import bestwith from "../../assests/images/product/bestwith.svg";
import OTC3 from "../../assests/images/product/otc-3.png";
import OTC4 from "../../assests/images/product/otc-4.png";

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
                                    <p>{props.para23}</p>
                                </div>
                                </div>
                                 <div className="row mt-5 pb-5 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="circle-white"></div>
                                        <h2>OTC Trading System</h2>
                                        <p>{props.para24}</p>
                                        <ul className="security-d-ul">
                                            <li>{props.bwli}</li>
                                            <li>{props.bwli2}</li>
                                            <li>{props.bwli3}</li>
                                            <li>{props.bwli4}</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-7">
                                    <img className="img-fuid" src={OTC3} alt="" />
                                    </div>
                                </div>
                                <div className="row mt-5 pb-5 align-items-center">
                                    <div className="col-lg-7">
                                        <div className="circle-white"></div>
                                        <img className="img-fuid" src={OTC4} alt="" />
                                    </div>
                                    <div className="col-lg-5">
                                        <h2>Crypto Exchange Liquidity Solution</h2>
                                        <p>{props.para25}</p>
                                        <ul className="security-d-ul">
                                            <li>{props.bwli5}</li>
                                            <li>{props.bwli6}</li>
                                            <li>{props.bwli7}</li>
                                            <li>{props.bwli8}</li>
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
