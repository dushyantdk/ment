import React from "react";
import DigitalImg from "../../../assests/images/home/digital.png";
const PrimaryModul = () => {
  return (
    <section className="primarymodul">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-20">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row pb-5">
                                    <div className="col-lg-12">
                                        <div class="text-white">
                                            <h1>Digital Crypto <span className="">Banking Solution</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="text-white mb-5">
                                            <h2 className="mb-4">What is Digital <span class="">Banking?</span></h2>
                                            <p>Digital banking is a system to allow their customers to make financial transactions and other related operations through electronic payment systems. It is also known as web banking and online banking.</p>
                                            <p>It will connect their clients to the central system of the bank. To meet the demand of the new digital age, most of the banks digitized their system to change their services and products and making their products and services understandable, accessible, and manageable.</p>
                                        </div>
                                        <div class="text-white">
                                            <h2 className="mb-4">What is Crypto <span class="">Banking?</span></h2>
                                            <p>The "crypto-friendly bank" is comparatively a new phenomenon in the world of finance which is embraced by enterprises and individuals that process cryptocurrency payments to store value and facilitate cross-border arrangements.</p>
                                            <p>With the adoption of PayPal coin transactions, the transfer of funds related to Bitcoin, Ethereum, and different cryptocurrencies the accounts of financial institutions or banks can already be viewed as an accepted financial product.</p>
                                            <p>This phenomenon also refers to a new generation of standardized cryptocurrency banks that offer cryptocurrency holders interest on the accounts of their savings and other services and products related to finance.</p>
                                        </div>
                                        <a href="/digital-and-crypto-banking" className="btn btn-primary">Read More</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={DigitalImg} alt="" />
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

export default PrimaryModul;
