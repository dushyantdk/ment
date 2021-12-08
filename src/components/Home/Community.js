import React from "react";

import Ment from "../../assests/images/m-logo-blue.svg" ;

import dev from "../../assests/images/dev.svg" ;

import bit from "../../assests/images/bit.svg" ;

import eth from "../../assests/images/eth.svg" ;

import block from "../../assests/images/block.svg" ;

import cry from "../../assests/images/cry.svg" ;

import cr from "../../assests/images/cr.svg" ;
import HeaderLogo from "../../assests/images/m-logo-white.svg";
const Community = () => {
  return (
    <section class="community">
        <div class="container">
        <div class="text-center w-100">
        <h1 className="mb-4">Applications for  <span className="gradient-text-red">Community Projects</span></h1>
            
            <p className="mb-5">Distributed ledger product directory with open-source Blockchain applications.</p>
        </div>

        <div class="categories category-cards mt-5">
                <div class="card">
                    <div class="category-link card-body text-default w-100">
                        <div class="d-flex align-items-start flex-row h-100 card-body__block">
                            <img src={dev} class="icon" alt="devops"/>

                            <div class="d-flex h-100 flex-column">
                                <h2>DevOps</h2>
                                <div class="category-text">
                                  <p> Security, maintainability, data integration, and security are the assets provided by DevOps open-source technology for fintech.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="category-link card-body text-default w-100">
                        <div class="d-flex align-items-start flex-row h-100 card-body__block">
                            <img src={bit} class="icon" alt="bitcoin"/>

                            <div class="d-flex h-100 flex-column">
                                <h2>Bitcoin</h2>
                                <div class="category-text">
                                  <p>Bitcoin is the first peer-to-peer (P2P) currency and the grandfather of all digital currencies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="category-link card-body text-default w-100">
                        <div class="d-flex align-items-start flex-row h-100 card-body__block">
                            <img src={eth} class="icon" alt="ethereum"/>

                            <div class="d-flex h-100 flex-column">
                                <h2>Ethereum</h2>
                                <div class="category-text">
                                <p>The Ethereum blockchain is a global, decentralized platform for cryptocurrencies and new kinds of financial applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="category-link card-body text-default w-100">
                        <div class="d-flex align-items-start flex-row h-100 card-body__block">
                            <img src={block} class="icon" alt="blockchain"/>

                            <div class="d-flex h-100 flex-column">
                                <h2>Blockchain</h2>
                                <div class="category-text">
                                    <p>Digital ledgers like blockchain are used to store transaction records in a secure and decentralized fashion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                <div class="category-link card-body text-default w-100">
                        <div class="d-flex align-items-start flex-row h-100 card-body__block">
                            <img src={cry} class="icon" alt="cryptography"/>

                            <div class="d-flex h-100 flex-column">
                                <h2>Cryptography</h2>
                                <div class="category-text">
                                   <p>Data Protection, Secure Communication, And Authentication Are Ensured With Cryptography By Converting Plain Text Data Into A Secret Code.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="category-link card-body  w-100">
                        <div class="d-flex align-items-start flex-row h-100 card-body__block">
                            <img src={cr} class="icon" alt="cryptocurrency"/>

                            <div class="d-flex h-100 flex-column">
                                <h2>Cryptocurrency</h2>                                            
                                <div class="category-text">
                                  <p>Cryptography is used to regulate the decentralized exchange of value in cryptocurrencies.</p>
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

export default Community;
