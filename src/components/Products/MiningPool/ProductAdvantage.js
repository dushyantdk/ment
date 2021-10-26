import React from "react";
import advantage from "../../../assests/images/product/advantage.svg";

const ProductAdvantage = (props) => {
  return (
    <section className="productadvantage">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after advantage-glow-bg p-y-100">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block mb-4">
                                    <div className="p-b-t-img"><img src={advantage} alt="" /></div>
                                    <h1>{props.productname} Solution <span class="gradient-text-yellow">Features</span></h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-11">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2>Simple & Efficient Dashboard</h2>
                                        <p className="mb-4">Simple dashboard gives you a quick overview of the most important information. You start mining with only one click!</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Device Monitoring</h2>
                                        <p className="mb-4">Control every device in your system. Monitor the temperature, load, fan rpm and profits.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h2>Benchmark</h2>
                                        <p className="mb-4">Precise benchmarking process will determine the most profitable algorithms for your hardware but you can always manually select the algorithms you want to support.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h2>Plugins</h2>
                                        <p className="mb-4">Plugins allow you to install 3rd party miners and turn your nicehash miner into the most advanced mining platform.</p>
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
