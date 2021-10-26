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
            <h1 className="mb-4">Applications of <span className="gradient-text-red">Community Project Community </span></h1>
            <p className="mb-5">International directory of use of open-source blockchain the technology provisioning for the products of distributed ledger.</p>
        </div>

        <div class="categories category-cards mt-5">
                <div class="card">
                    <div class="category-link card-body text-default w-100">
                        <div class="d-flex align-items-start flex-row h-100 card-body__block">
                            <img src={dev} class="icon" alt="devops"/>

                            <div class="d-flex h-100 flex-column">
                                <h2>DevOps</h2>
                                <div class="category-text">
                                  <p>DevOps Open-Source Technologies ForFinTech To Provide Security, Maintainability, Quality, And Data Integration.</p>
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
                                  <p>Open-Source Peer-To-Peer (P2P) Money And The Grandfather Of All Cryptocurrencies.</p>
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
                                <p>Ethereum Is a Global, Decentralized Platform For Cryptocurrency And New Kinds Of FinTech Applications.</p>
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
                                    <p>Blockchain Is a Secure Decentralized Digital Ledger System Used To Store Transaction Records.</p>
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
                                   <p>Cryptography Converts Plain Text Data Into A Secret Code To Provide Data Protection, Secure Communication, And Authentication.</p>
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
                                  <p>Cryptocurrencies are a decentralized means of digital exchange regulated using cryptocurrencies.</p>
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
