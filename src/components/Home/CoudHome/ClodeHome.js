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
                                    <h1 className="mb-4">Platform for the <span class="gradient-text-blue">NFT Marketplace</span></h1>
                                    <p className="mb-4">Are you starting an NFT company? You can create your NFT (Non-Fungible Token) Crypto Marketplace SaaS platform with Ment Fintech, which provides trading and marketing of collectibles, art, valuables and securities using NFT tokens.</p>
                                     <p class="text-white">Fintech crypto exchange platforms such as Ment Fintech enable users to trade digital assets represented by NFT tokens through next-generation online exchanges.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center cloudapp">
                                <img className="img-fluid" src={Nft1} alt="" />
                            </div>
                        </div>
                        <div class="row justify-content-center py-5 align-items-center my-4 nft-ul-home">
                            <div class="col-lg-12">
                                <div class="primary-m-content text-white w-100">
                                    <h2 class="mb-4 gradient-text-blue">Is there anything you can do with NFT's software platform?</h2>
                                    <ul>
                                        <li>Optional integration of external payment systems as well as options to deposit and withdraw real money from NFTs.</li>
                                        <li>For a more centralized crypto business, you should perform customer verification (KYC).</li>
                                    </ul>
                                    <ul>
                                        <li>To enhance the Ment Fintech -powered NFT marketplace, design and develop new tools and libraries. </li>
                                        <li>You can create any kind of User Interface (UI) using React libraries.</li>
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
