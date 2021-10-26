import React, { useRef, useEffect } from "react";
import WhatImg from "../../../assests/images/product/whatimg.svg";
import ArchitectureImg from "../../../assests/images/product/architecture.svg";
import AdvantageImg from "../../../assests/images/product/advantage.svg";
import WorkflowImg from "../../../assests/images/product/workflow.svg";
import SecurityImg from "../../../assests/images/product/security.svg";
import BestwithImg from "../../../assests/images/product/bestwith.svg";
import RequestImg from "../../../assests/images/product/request.svg";
import Navigation from "../../Header/Navigation/Navigation";

const HeaderProductLiquidity = () => {
  return (
    <section className="headerProduct blue-bg">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5">
                <div className="col-lg-8 text-white">
                    <h1>Cryptocurrency Exchange Liquidity Solution</h1>
                    <p>Infrastructure to power your exchange platform with real volume.</p>
                </div>
                <div className="col-lg-4">

                </div>
            </div>    
        </div>
        
    </section>
  );
};

export default HeaderProductLiquidity;
