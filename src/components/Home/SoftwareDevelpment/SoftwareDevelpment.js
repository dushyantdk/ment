import React from "react";
import Ment from "../../../assests/images/m-logo-blue.svg";
import sdp from "../../../assests/images/sdp.png";
const SoftwareDevProcess = () => {
  return (
    <section className="software-dev-process">
        <div className="container wide-block">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="title-block">
                        <h1>Software <span className="gradient-text-green">Development Process</span></h1>
                    </div>
                </div>
            </div>
        
           <div className="row">
           <div className="col-lg-12 text-center">
           <img src={sdp} alt=""/>  

           </div>

           </div>
        </div>
    </section>
  );
};

export default SoftwareDevProcess;