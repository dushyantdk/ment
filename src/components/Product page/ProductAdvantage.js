import React from "react";
import advantage from "../../assests/images/product/advantage.svg";

const ProductAdvantage = (props) => {
  return (
    <section className="productadvantagep-b-50">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                        <div className="row row-after pt-5 text-white advantage-glow-bg">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block mb-4 text-white">
                                    <div className="p-b-t-img"><img src={advantage} alt="" /></div>
                                    <h1>{props.productname} Package <span class="gradient-text-yellow">Advantages</span></h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <p className="mb-4">{props.para10}</p>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="circle"></div>
                                <h2>A super cost-effective solution</h2>
                                <p className="mb-4">{props.para11}</p>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="row my-5">
                                    <div className="col-lg-9">
                                        <div className="t-p-a-info">
                                            <div className="circle"></div> 
                                            <h3>Initial investments</h3>
                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <div className="grayline"></div>
                                                <div>$1,000,000</div>
                                            </div>
                                            <p className="mb-2">Cost of development of own platform</p>
                                            <div className="t-p-i-color mb-2"></div>
                                            <p className="mb-0">Turnkey exchange setup price</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center t-a-i-value">
                                        <h1>{props.num}<span>X</span></h1>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-lg-9">
                                        <div className="t-p-a-info">
                                            <div className="circle"></div> 
                                            <h3>Monthly payments</h3>
                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <div className="grayline"></div>
                                                <div>$40 000</div>
                                            </div>
                                            <p className="mb-2">Burn rate of team of developers</p>
                                            <div className="t-p-i-color monthly mb-2"></div>
                                            <p className="mb-0">Technical support monthly fee</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center t-a-i-value monthly">
                                        <h1>{props.num2}<span>X</span></h1>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-lg-9">
                                        <div className="t-p-a-info">
                                            <div className="circle"></div> 
                                            <h3>Time to launch</h3>
                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <div className="grayline"></div>
                                                <div>1.5 years</div>
                                            </div>
                                            <p className="mb-2">Development of a new platform</p>
                                            <div className="t-p-i-color time mb-2"></div>
                                            <p className="mb-0">Turnkey exchange setup price</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center t-a-i-value time">
                                        <h1>{props.num3}<span>X</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11 text-white mb-5">
                                <div className="circle"></div>
                                <div className="blue-bg p-4 rounded-2">
                                    <p className="mb-0">{props.para12}</p>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11 text-white mb-5">
                                <div className="circle"></div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="blue-bg p-4 rounded-2 mb-5">
                                            <h3 className="gradient-text-yellow mb-3">No banks and no chargeback fraud</h3>
                                            <p>{props.para13}</p>
                                            <p>{props.para14}</p>
                                            <img src={props.img3} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="blue-bg p-4 rounded-2">
                                            <h3 className="gradient-text-yellow mb-3">Get a higher roi with faster and cheaper money transfers</h3>
                                            <p>{props.para15}</p>
                                            <p>{props.para16}</p>
                                            <img src={props.img4} alt="" className="img-fluid" />
                                        </div>
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
