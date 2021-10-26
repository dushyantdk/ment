import React from "react";
import architecture from "../../assests/images/product/architecture.svg";

const ArchitectureOverview = (props) => {
  return (
    <section className="architectureoverview">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after">
                            <div className="col-lg-11 offset-md-1">
                                <div class="title-block mb-5">
                                    <div className="p-b-t-img"><img src={architecture} alt="" /></div>
                                    <h1><span class="gradient-text-red">Architecture Overview</span></h1>
                                </div>
                            </div>
                            <div className="offset-md-1 col-lg-5">
                                <p className="mb-4"><span class="circle-white"></span>{props.para5}</p>
                                <p className="mb-4"><span class="circle-white"></span>{props.para6}</p>
                                <p className="mb-4"><span class="circle-white"></span>{props.para7}</p>
                                <p className="mb-4"><span class="circle-white"></span>{props.para8}</p>
                                <p className="mb-4"><span class="circle-white"></span>{props.para9}</p>
                            </div>
                            <div className="col-lg-6 offset-lg-d1">
                                <div className="architecture-img">
                                    <img className="pimg-fluid" src={props.img2} alt="" />
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
