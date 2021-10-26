import React from "react";

const OtherInfo = () => {
  return (
    <section className="other-info py-5 mb-5">
        <div className="container">
        <div className=" securty-block-4">
            <div className="row justify-content-center">
          
                <div className="col-lg-4">
                
                    <a href="/career" className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                        <h3>Careers</h3>
                        <p>At Ment we build the tools that make collaborating and writing software easier for everyone. We’ve built a company we truly love working for, and we think you will too. </p>
                        <span><i class="fas fa-arrow-right"></i></span>
                    </a>
                </div>
                
                <div className="col-lg-4">
               
                    <a href="/contact-us" className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                        <h3>Contact Us</h3>
                        <p>Have anything to share with us? Have a question, suggestion or tip for us? Don’t hesitate, Just fill up the form below and we will get back to you ASAP. Come help us make collaboration even better</p>
                        <span><i class="fas fa-arrow-right"></i></span>
                    </a>
                    
                </div>
                </div>
            </div>
            </div>
    </section>
  );
};

export default OtherInfo;
