import React, { useRef, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

const HeaderCareer = () => {
  return (
    <section className="teamAbout blue-bg">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5 pb-0">
                <div className="col-lg-8 text-center text-white">
                    <h1>Want to make a difference? You have come to the right place.</h1>
                    <p>Create the future with us.</p>
                  {/*  <p>At Ment we build the tools that make collaborating and writing software easier for everyone. We’ve built a company we truly love working for, and we think you will too. </p> */}                </div>
            </div>
            <div className="row align-items-center justify-content-center pb-5 mb-5">
                <div className="col-lg-4 text-center opening-poistion">
                    <a className="schedule-call-modal btnn btnn-primary" href="/CareerDetail">Open positions</a>
                 {/*   <a className="schedule-call-modal btnn btnn-primary" href="#">Internships</a> */}
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

export default HeaderCareer;
