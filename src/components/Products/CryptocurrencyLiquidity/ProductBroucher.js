import React from "react";
import darkmode from "../../../assests/images/product/dark-mode.svg";
import broucherBg from "../../../assests/images/product/bg-new-roadmap.svg";

const ProductBroucher = () => {
  return (
    <section className="download-broucher p-y-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <a href="#" className="d-block rounded-2 box-shadow-card hover-grow position-relative no-underline overflow-hidden">
                        <picture>
                            <img className="position-relative top-0 left-0 width-full height-auto d-block rounded-2" src={darkmode} alt="" />
                        </picture>
                        <span className="position-absolute w-100 h-100 top-0 left-0 d-flex flex-column text-left p-3 p-lg-4">
                            <span class="features-Label text-white border-r-20 border align-self-start">New</span>
                            <span className="mt-auto d-flex flex-row justify-content-between text-white aign-items-center">
                                <h3>Dark Mode</h3>
                                <span>Learn more <i class="fas fa-arrow-right"></i></span>
                            </span>
                        </span>
                    </a>
                </div>
                <div className="col-lg-6">
                    <a href="#" className="d-block rounded-2 box-shadow-card hover-grow position-relative no-underline overflow-hidden">
                        <picture>
                            <img className="position-relative top-0 left-0 width-full height-auto d-block rounded-2" src={broucherBg} alt="" />
                        </picture>
                        <span className="position-absolute w-100 h-100 top-0 left-0 d-flex flex-column text-left p-3 p-lg-4">
                            <span class="features-Label border-r-20 border align-self-start">New</span>
                            <span className="mt-auto d-flex flex-row justify-content-between aign-items-center">
                                <h3>Get Our Product Brochure</h3>
                                <span>Learn more <i class="fas fa-arrow-right"></i></span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ProductBroucher;
