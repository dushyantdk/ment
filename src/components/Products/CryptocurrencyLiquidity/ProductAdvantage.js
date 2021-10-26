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
                                    <h1>{props.productname} Solution <span class="gradient-text-yellow">Features</span></h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2>Adopting MENT TECH Underlying Technology</h2>
                                        <p className="mb-4">Cryptocurrency liquidity solution adopts the Ment Tech underlying technology, embraces over 100 technical talents from enterprises, and has been tested by over 500 global clients.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>First Digital Currency Liquidity Provider</h2>
                                        <p className="mb-4">It is the first digital currency liquidity solution provider in India, providing depths of over 200 exchanges and the lowest transaction charging rate in the industry.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2>Professional Financial-level Security Architecture</h2>
                                        <p className="mb-4">It relies on Ment Tech security services to ensure system security; In addition, cryptocurrency liquidity solution adopts professional investment and trading network architecture of forex, securities and futures, and a variety of exception handling mechanisms to ensure security and stability of liquidity services.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Rich Industry Experience</h2>
                                        <p className="mb-4">All cryptocurrency liquidity solution team members come from traditional financial industries such as forex, securities, futures, with many years of experience, and also have been working on blockchain for many years, with high professionalism.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="circle-white"></div>
                                <h2>Comprehensive Service Support</h2>
                                <p className="mb-4">cryptocurrency liquidity solution provides round-the-clock operation and maintenance support, maintains system security, monitors performance, responds to any online problems in real time, and also provides high-end customized one-to-one service.</p>
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
