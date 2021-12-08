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
                                            <h1>Blockchain-based<span className="gradient-text-red">digital banking solution</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="text-white mb-5">
                                            <h2 className="mb-4">How does digital banking<span class="gradient-text-blue">work?</span></h2>
                                            <p>Customers can access online banking accounts, obtain bank statements, and perform other related operations using electronic payment methods through an online payment system (also known as digital banking).</p>
                                            <p>Customers will have access to the central banking system run by a bank through the online banking system. During the past few decades, most financial institutions have improved their product and service portfolios to accommodate the new digital world, making them simpler, more convenient, and more accessible.</p>
                                        </div>
                                        <div class="text-white">
                                            <h2 className="mb-4">Crypto Banking: What does  <span class="gradient-text-blue">it entail?</span></h2>
                                            <p>Business and individuals who handle payments sourced from cryptocurrencies are adopting the term "crypto-friendly bank" for ease of cross-border payments, value storage, and ease of value exchange.</p>
                                            <p>By integrating Coinbase transactions into PayPal, cryptocurrencies have already gained a foothold. Finances related to Bitcoin, Ethereum, and other cryptocurrencies can now be deposited into bank accounts.</p>
                                            <p>A cryptocurrency bank is a new breed of regulated cryptocurrency company that offers savings accounts for cryptocurrency holders and other financial products and services.</p>
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
