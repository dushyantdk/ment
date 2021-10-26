import React from "react";
import workflow from "../../assests/images/product/workflow.svg";

const ProductWorkflow = (props) => {
  return (
    <section className="productworkflow">
       <div className="container wide-block">
           <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after p-y-100">
                            <div class="col-lg-11 offset-md-1">
                                <div class="title-block mb-4">
                                    <div class="p-b-t-img">
                                        <img src={workflow} alt="" />
                                    </div>
                                    <h1>Single <span class="gradient-text-red">Workflow</span></h1>
                                </div>
                            </div>
                            <div class="col-lg-7 offset-md-1 py-5">
                                <div className="circle-white"></div>
                                <div class="img-glow-bg">
                                    <img class="img-fluid" src={props.img5} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-4 padding-mobile-flow py-5 mt-5">
                                <p className="mb-5">{props.para17}</p>
                                <p className="mb-5">{props.para18}</p>
                                <p className="mb-5">{props.para19}</p>
                                <p className="mb-5">{props.para20}</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </section>
  );
};

export default ProductWorkflow;
