import React from "react";
import ValueIcon from "../../assests/images/AboutUs/value-icon.svg";
import MissionIcon from "../../assests/images/AboutUs/mission-icon.svg";

const OurValueMission = () => {
  return (
    <section className="our-v-m-section mt-5">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                        <div className="topshadow-bg"></div>
                        <div className="row row-after mt-5 pt-5">
                            <div className="offset-md-1 col-lg-10">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="row">
                                            <div className="col-lg-12 mb-5">
                                                <div class="circle"></div>
                                                <div class="title-block text-white">
                                                    <p>MENT TECH</p>
                                                    <h1><span class="gradient-text-lightgreen">Our Values</span></h1>
                                                    <p className="text-t-normal">We will build for you a financial business of your own by connecting you to the markets and providing you with all the innovative and cutting edge technologies in a short space of time and at a reasonable cost.</p>
                                                    
                                                </div>     
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6 text-white mb-5">
                                                        <h3>Clarity & Integrity</h3>
                                                        <p>We pride ourselves on our integrity and clarity in the way we do business. We always adopt an honest and sincere approach.</p>
                                                    </div>
                                                    <div className="col-lg-6 text-white mb-5">
                                                        <h3>Constant Improvement</h3>
                                                        <p>We are constantly evolving and innovating our products and services so that we can provide you with a range of innovative and practical solutions.</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 text-white mb-5">
                                                        <h3>Working Together</h3>
                                                        <p>Everything we do is a result of team effort. Our priority is to make sure all our teams are full of vitality and that they align their focus towards our common goal.</p>
                                                    </div>
                                                    <div className="col-lg-6 text-white mb-5">
                                                        <h3>Empowering Others</h3>
                                                        <p>We specialise in helping people build more efficient businesses. We are always available to support those who are in need.</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 text-white mb-5">
                                                        <h3>Working With Passion</h3>
                                                        <p>We care about the end results of our work and deliver the best solutions possible with a sense of passion and purpose.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="text-center">
                                            <img src={ValueIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 pt-5">
                                    <div className="col-lg-5">
                                        <div class="circle"></div>
                                        <div class="title-block text-white">
                                            <p>MENT TECH</p>
                                            <h1><span class="gradient-text-lightgreen">Our Mission</span></h1>
                                            <div className="text-center">
                                                <img src={MissionIcon} alt="" />
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="col-lg-7 text-white">
                                        <p className="mb-5">To create trading systems with a goal and become a market standard, especially in crypto. Popularisation of blockchain technology with people and governments to speed up changes in the global financial system.</p>
                                        <p className="mb-5">Our mission is to make ment tech your preferred one-stop destination by delivering outstanding brokerage technologies and an exceptional user experience for your clients by consistently fulfilling your business needs and customer expectations.</p>
                                        <p className="mb-5">To elevate the fintech industry with our company’s solutions.</p>
                                        <p className="mb-5">Our mission is to develop continuous improvement technology to serve forex and crypto trading in the most accurate, efficient, transparent and convenient way for investors.</p>
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

export default OurValueMission;
