import React, { useRef, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import WhatImg from "../../../assests/images/product/whatimg.svg";
import ArchitectureImg from "../../../assests/images/product/architecture.svg";
import AdvantageImg from "../../../assests/images/product/advantage.svg";
import WorkflowImg from "../../../assests/images/product/workflow.svg";
import SecurityImg from "../../../assests/images/product/security.svg";
import BestwithImg from "../../../assests/images/product/bestwith.svg";
import RequestImg from "../../../assests/images/product/request.svg";

const HeaderAbout = () => {
  return (
    <section className="headerAbout white-header">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5">
                <div className="col-lg-8 text-center">
                    <h2 className="my-4">About Us</h2>
                    <h1>MENT FINTECH</h1>
                    <p>We are a team of passionate blockchain enthusiasts making the world a better place!</p>
                </div>
            </div>   
            <div className="row">
                <div className="col-lg-12">
                    <ul className="d-flex justify-content-between">
                        <li>
                            <h3>200+</h3>
                            <p>Products and Services</p>
                        </li>
                        <li>
                            <h3>150+</h3>
                            <p>Top-level Technicians</p>
                        </li>
                        <li>
                            <h3>500+</h3>
                            <p>Client Services Experience worldwide</p>
                        </li>
                        <li>
                            <h3>20+</h3>
                            <p>Countries and Regions</p>
                        </li>
                        <li>
                            <h3>30+ </h3>
                            <p>Industry Partner support</p>
                        </li>
                        <li>
                            <h3>20K+</h3>
                            <p>Security Maintenance Hours</p>
                        </li>
                    </ul>
                </div>
            </div> 
            {/* <div className="row justify-content-center my-5">
                <div className="col-lg-3">
                    <ul className="header-socail">
                        <li>Follow us on</li>
                        <li className="socail-icon"><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li className="socail-icon"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li className="socail-icon"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li className="socail-icon"><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    </section>
  );
};

export default HeaderAbout;
