import React from "react";
import Security from "../../assests/images/product/security.svg";

const Securty = (props) => {
  return (
    <section className="securty-section">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-10 overflow-hidden p-y-100">
                        <div className="row row-after">
                            <div className="offset-md-1 col-lg-11">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div class="title-block mb-4 text-white">
                                            <div className="p-b-t-img"><img src={Security} alt="" /></div>
                                            <h1><span class="gradient-text-lightgreen">Security Layers</span></h1>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-white">
                                        <p>Security is all important for crypto exchanges and should never be compromised. We have developed an advanced security system to help prevent losses as a result of fraudulent activities and attacks.</p>
                                        <p>Security is the most important concept in crypto trading and our exchange was designed with sophisticated safety measures as almost all tokens and coins are held in cold storage. Cold wallets are highly secure hardware wallets that are not connected to the internet. Programmed algorithms regularly transfer client funds into cold storages thus providing the necessary level of safety.</p>
                                    </div>
                                    <div className="col-lg-12 pt-5">
                                        <a href="/Security" className="btn btn-primary">Read More</a>
                                    </div>
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

export default Securty;
