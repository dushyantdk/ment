import React from "react";
import mobile from "../../../assests/images/home/mobile.svg";
import GoogleApp from "../../../assests/images/google.svg";
import AppStore from "../../../assests/images/ios.svg";


const DownloadApp = () => {
  return (
    <section className="dowloadapp">
        <div className="container wide-block">
            <div className="row align-items-center">
                    <div className="col-lg-8">
                    <div className="download-app-content">
                        <h1 className="mb-5">
                        Complete your Ecosystem with  <span className="gradient-text-pink">Hybrid Mobile Apps.</span> 
                        </h1>
                        <p>With our mobile app, your customers can trade on their fingertips with all of our products and modules on a super-fast, robust, and cross-platform hybrid mobile app.</p>
                         <p className="download-app-link">
                            <a href="#" className="app-icon-btn"><img src={GoogleApp} alt="" /></a>
                            <a href="#" className="app-icon-btn"><img src={AppStore} alt="" /></a>
                        </p> 
                    </div>
                </div>
                <div className="col-lg-4 text-center order-1">
                    <img width="65%" src={mobile} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default DownloadApp;
