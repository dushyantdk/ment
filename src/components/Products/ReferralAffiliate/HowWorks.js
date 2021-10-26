import React from "react";
import advantage from "../../../assests/images/product/advantage.svg";

const HowWorks = (props) => {
  return (
    <section className="how-works">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after advantage-glow-bg p-b-150">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block mb-4">
                                    <div className="p-b-t-img"><img src={advantage} alt="" /></div>
                                    <h1>How Does <span class="gradient-text-yellow">It Works?</span></h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="blue-bg p-5 border-r-10 text-white h-w-block">
                                            <i class="fas fa-hands-helping gradient-text-yellow"></i>    
                                            <h2>Invite your friends</h2>
                                            <p>Share your unique link or QR code with your friends and have them invite their with their own affiliate links.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="blue-bg p-5 border-r-10 text-white h-w-block">
                                            <i class="fas fa-tachometer-alt gradient-text-yellow"></i>    
                                            <h2>Get them to trade</h2>
                                            <p>Every time they buy bitcoin you get 50% of their escrow fee as commission. You also make 10% of the escrow fee every time one of their affiliates buys bitcoin on exchange.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="blue-bg p-5 border-r-10 text-white h-w-block">
                                            <i class="fas fa-hand-holding-usd gradient-text-yellow"></i>
                                            <h2>Get paid</h2>
                                            <p>Your earning automatically build up in your affiliate wallet. You can cash them out anytime by moving them to your exchange wallet.</p>
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

export default HowWorks;
