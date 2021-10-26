import React from "react";
import architecture from "../../../assests/images/product/architecture.svg";
import Exchangettk from "../../../assests/images/product/exchange-tk.svg";

const ArchitectureOverview = (props) => {
  return (
    <section className="architectureoverview">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after pb-4">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block">
                                    <div className="p-b-t-img"><img src={architecture} alt="" /></div>
                                    <h1>Why is<span class="gradient-text-red"> Liquidity Solution </span>Important?</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row row-after pt-0 align-items-center">
                            <div className="offset-md-1 col-lg-5">
                                <p className="mb-4"><span class="circle-white"></span>High liquidity in the marketplace is an ideal situation as it makes for improved prices for all concerned due to the large number of buyers and sellers in the marketplace. A buoyant marketplace with a high level of trading activity tends to create an equilibrium market price that is acceptable for all.</p>
                                <p className="mb-4"><span class="circle-white"></span>High liquidity also ensures that prices are stable and not prone to large swings resulting from large trades which could affect cryptocurrency prices while fuelling increased volatility and risks for the general market. In a liquid market, prices are stable enough to withstand large orders because of the large number of market participants and their orders.</p>
                                <p className="mb-4"><span class="circle-white"></span>High liquidity also allows for greater technical analysis accuracy since price and charting formation in a liquid market is more developed and precise.</p>
                            </div>
                            <div className="col-lg-6 offset-lg-d1">
                                <div className="architecture-img">
                                <img className="pimg-fluid" src={Exchangettk} alt="" />
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
