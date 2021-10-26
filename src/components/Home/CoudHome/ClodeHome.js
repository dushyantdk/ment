import React from "react";
import Nft1 from "../../../assests/images/nft1.png";
const CloudApp = () => {
  return (
    <section className="cloudapp">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg border-r-20 p-50">
                        <div class="row py-5">
                            <div class="col-lg-6 ">
                                <div class="title-block text-white">
                                    <h1 className="mb-4">NFT Marketplace<span class=""> Software Platform</span></h1>
                                    <p className="mb-4">Planning an NFT startup? Have your NFT Crypto Marketplace designed, built, and deployed by the experts Ment Fintech will help you build an NFT (Non-Fungible Token) Crypto Marketplace SaaS platform to provision trading of collectibles, art, valuables, assets, and securities, backed by NFT tokens.</p>
                                     <p class="text-white">Ment Fintech crypto exchange software platform allows you to operate the next-generation online marketplace to facilitate the trading of any digital assets represented by NFT tokens.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center cloudapp">
                                <img className="img-fluid" src={Nft1} alt="" />
                            </div>
                        </div>
                        <div class="row justify-content-center py-5 align-items-center my-4 nft-ul-home">
                            <div class="col-lg-12">
                                <div class="primary-m-content text-white w-100">
                                    <h2 class="mb-4">What Can You Do with an NFT Software Platform?</h2>
                                    <ul>
                                        <li>Plug-in external payment systems as well as options for deposits and withdrawals of NFTs with real money.</li>
                                        <li>Perform customer verification (KYC) if you want to run more centralized crypto business.</li>
                                    </ul>
                                    <ul>
                                        <li>Design and develop more tools and libraries to improve and enhance your Ment Fintech- powered NFT crypto marketplace.</li>
                                        <li>o	Customize User Interfaces (UI) with React libraries to take any form and shape.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <a href="/nft-marketplace-software-platform" className="btn btn-primary">Read More</a>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CloudApp;
