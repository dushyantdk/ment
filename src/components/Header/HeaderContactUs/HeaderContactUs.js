import React, { useRef, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

const ContactUsHeader = () => {
  return (
    <section className="headerAbout blue-bg p-y-100">
        <Navigation/>
        <div className="container wide-block">
            <div className="row align-items-center justify-content-center p-y-100">
                <div className="col-lg-8 text-white">
                    <h1 className="mb-4 xcv">Contact Us</h1>
                    <p>Have anything to share with us? Have a question, suggestion or tip for us? Don’t hesitate, Just fill up the form below and we will get back to you ASAP.</p>
                </div>
                <div className="col-lg-4">
                    
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactUsHeader;
