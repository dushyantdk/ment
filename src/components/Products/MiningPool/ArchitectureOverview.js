import React from "react";
import architecture from "../../../assests/images/product/architecture.svg";
import Mining from "../../../assests/images/product/mining.svg";

const ArchitectureOverview = (props) => {
  return (
    <section className="architectureoverview">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden">
                        <div className="row row-after mt-5 py-5">
                            <div className="offset-md-1 col-lg-10 text-white">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div class="title-block mb-5">
                                            <div className="p-b-t-img"><img src={architecture} alt="" /></div>
                                            <h1>How Our <span class="gradient-text-red">Mining Solution</span> Works?</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <p className="mb-4"><span class="circle"></span>Everyone can start mining without the need for deep technical knowledge about cryptocurrency mining. It is tailored for ease of use and features a very simple interface. When running, miner is connected to exchange platform and Ment Tech open hashing power marketplace.</p>
                                        <p className="mb-4"><span class="circle"></span>Miners select the algorithm and the speed while are miners mining the software fulfil that order by mining (hashing) - providing computing power to the network and get paid in the currency they mine.</p>
                                        <p className="mb-4"><span class="circle"></span>Users rent or combine hashing power to earn block rewards for a range of blockchains. Simple dashboard gives you a quick overview of the most important information. You start mining with only one click! Control every device in your system. Monitor the temperature, load, fan rpm and profits. Precise benchmarking process will determine the most profitable algorithms for your hardware but you can always manually select the algorithms you want to support.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="architecture-img">
                                        <img className="pimg-fluid" src={Mining} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-lg-12">
                                        <ul className="numbers-ul">
                                            <li><h3>100+</h3><p>Coin Support</p></li>
                                            <li><h3>10+</h3><p>Rigs Support</p></li>
                                            <li><h3>5ms</h3><p>Execution From</p></li>
                                            <li><h3>2000+PH\s</h3><p>Hashrate</p></li>
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
