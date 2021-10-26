import React from "react";
import WhoImg from "../../assests/images/AboutUs/who.svg";
import We1 from "../../assests/images/AboutUs/we-1.svg";
import We2 from "../../assests/images/AboutUs/we-2.svg";
import We3 from "../../assests/images/AboutUs/we-3.svg";
import We4 from "../../assests/images/AboutUs/we-4.svg";

const WhoWe = () => {
  return (
    <section className="whowe-section mt-5">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                    <div className="topshadow-bg"></div>
                        <div className="row row-after mt-5 pt-5">
                            <div className="offset-md-1 col-lg-10">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div class="circle"></div>
                                        <div class="title-block text-white">
                                            <p>MENT TECH</p>
                                            <h1>We <span class="gradient-text-blue">Are?</span></h1>
                                            <p>We will build for you a financial business of your own by connecting you to the markets and providing you with all the innovative and cutting edge technologies in a short space of time and at a reasonable cost.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-2 text-center">
                                        <img src={WhoImg} alt="" />
                                    </div>
                                </div>
                                <div className="row mt-5 pt-5">
                                    <div className="col-lg-12 text-center">
                                        <div class="circle"></div>
                                        <div class="title-block text-white">
                                            <p>MENT TECH</p>
                                            <h1>With <span class="gradient-text-lightgreen">Us</span></h1>
                                            <p>We will build for you a financial business of your own by connecting you to the markets and providing you with all the innovative and cutting edge technologies in a short space of time and at a reasonable cost.</p>
                                        </div>
                                    </div>      
                                </div>
                                <div className="row mt-5 pt-5">
                                    <div className="col-lg-6 text-center text-white mb-5">
                                        <img src={We1} alt="" />
                                        <h3>Start</h3>
                                        <p>a new business or empower your existing one</p>
                                    </div>
                                    <div className="col-lg-6 text-center text-white mb-5">
                                        <img src={We2} alt="" />
                                        <h3>Ask</h3>
                                        <p>for suggestions and get constructive advice</p>
                                    </div> 
                                    <div className="col-lg-6 text-center text-white my-5">
                                        <img src={We3} alt="" />
                                        <h3>Learn</h3>
                                        <p>about new industry features or ask us to implement them into your business model</p>
                                    </div>
                                    <div className="col-lg-6 text-center text-white my-5">
                                        <img src={We4} alt="" />
                                        <h3>Trade</h3>
                                        <p>and manage your risks or allow others to trade by providing them with access to as many markets as possible.</p>
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

export default WhoWe;
