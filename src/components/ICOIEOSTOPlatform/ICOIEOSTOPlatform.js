import React, { useState } from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Navigation from "../Header/Navigation/Navigation";
import StoIcon from "../../assests/images/sto.png";
import {Helmet} from "react-helmet";
import LetsTalk from "../LetsTalk/LetsTalk"

const ICOIEOSTOPlatform = () => {
 
  return (
    <div className="banking-solution innerfooter">
        <Helmet>
        <title>ICO/IEO/STO Platform</title>
        <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
        <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
        <meta property="og:url" content="https://Ment Fintech"></meta>
      </Helmet>
       <section className="headerAbout blue-bg">
            <Navigation/>
            <div className="container wide-block">
                <div className="row home-header-content align-items-center">
                    <div className="col-lg-8 text-white">
                        <h1 className="mb-4">ICO/IEO/STO Platform</h1>
                        <p>Companies have different choices to raise funds. Typically, this will depend on the amount, what the company is offering in exchange for the funds and the underlying technology. This guide will help you make your choice.</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={StoIcon} alt="" />
                    </div>
                </div>  
            </div>
        </section>
        <section className="whowe-section p-y-100">
            <div className="container wide-block">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blue-bg border-r-10 overflow-hidden">
                            <div className="topshadow-bg"></div>
                            <div className="row row-after mt-5 pt-5 banking-blue">
                                <div className="offset-md-1 col-lg-10 mb-5">
                                <div className="row pb-5">
                                        <div className="col-lg-12">
                                            <div class="circle"></div>
                                            <div class="text-white">
                                                <h1 className="mb-4">What is an <span class="">ICOs?</span></h1>
                                                <p>ICO, Initial Coin Offering, is the mother of crowdfunding on the blockchain. Since 2017 startups have chosen ICO to circumvent the strict rules that the initial investment process must follow; as the only thing you need to start ICO is the website with the wallet address to which money is sent. No legal boundaries, no investor protection, complete anonymity, and often the lack of MVP. An ICO works like a crowdfunding campaign. As part of an ICO, the organizer would issue tokens, which then would be sold to investors for cryptocurrency. Tokens themselves served as a sort of internal currency for projects. For example, they would enable holders to activate certain features on the project’s platform.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <h3 class="">Liquidity:</h3>
                                            <p className="text-white">A common deterrent for people looking for new investment options is lack of liquidity. In many opportunities, capital is inaccessible for several years. With ICOs, not only do investors have high liquidity, the secondary market means that real-time pricing is based around the current value of the project.</p>
                                            <h3 class="">Decentralization:</h3>
                                            <p className="text-white">ICOs can be available to everyone, particularly when the ICO accepts cryptocurrencies. The only requirement for most ICOs is that the contributor is able to transfer funds in time to buy.</p>
                                            <h3 class="">Openness:</h3>
                                            <p className="text-white">Not only do ICOs allow anyone to invest, contributors can also invest at any time. This differs from traditional models of funding startups, where it is close to impossible to become an early investor unless you are in close contact with one of the founders.</p>
                                        </div>
                                    </div>
                                    <div className="row pb-5">
                                        <div className="col-lg-12">
                                            <div class="circle"></div>
                                            <div class="text-white">
                                                <h1 className="mb-4">What is an <span class="">IEO?</span></h1>
                                                <p>An IEO has the same characteristics as an ICO with the difference that the emission is entirely conducted on a trading platform. Thus, it is the platform that will manage the smart-contract if applicable, the KYC, a part of the marketing, will make checks on the project, and also allow the token to be directly available on a secondary market at the end of the initial issue. An IEO is always carried out on a currency exchange platform that acts on behalf of the startup that wants to raise funds with the newly issued tokens. Since the entire process of selling tokens happens on the exchange platform, token issuers need to pay a listing fee together with a percentage of the tokens sold during the IEO. In return, exchange platforms provide the process with more reliability and credibility than ICOs. </p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <h3 class="text-white">Support from the exchange platform:</h3>
                                            <p className="text-white">In IEO vs STO, the business joins forces with the exchange platform to make crowdfunding happen. The exchange will help the project with the listing, marketing, smart contracts, and more. Investors who want to participate in the IEO need to create an account at the exchange and then by tokens at the sale. As a result, businesses enjoy the support from exchange platforms and get to reduce the costs of their fundraising campaign. Projects also take advantage of the credibility such exchanges bring to them, as well as the existing user base of potential investors. The exchanges benefit from the fees and the influx of users. It’s a clear win-win situation.</p>
                                            <h3 class="text-white">Substantial ROI:</h3>
                                            <p className="text-white">Businesses that choose an IEO as their fundraising model will have to invest a massive sum of money at first. But they might be looking at a great return of investment in the long run. The partnership is beneficial for exchanges as well. They often get flat fees or percentage fees, token fees, and engage in fruitful marketing collaborations.</p>
                                            <h3 class="text-white">Security and trust:</h3>
                                            <p className="text-white">Since exchanges can’t control projects enough to make sure that they deliver the product from their whitepaper or prospectus, many large exchanges decide not to carry out IEOs. The exchange’s reputation will be severely damaged if it causes great losses for investors who participate in an IEO. All of that means that getting listed is a solid mark of credibility. If an exchange decides to list a project, it really means something.</p>
                                        </div>
                                    </div>
                                    <div className="row pb-5">
                                        <div className="col-lg-12">
                                            <div class="circle"></div>
                                            <div class="text-white">
                                                <h1 className="mb-4">What is a <span class="">STO?</span></h1>
                                                <p>A Security Token Offering is a fundraising method startups use to sell tokens that function like traditional securities. The primary benefit of STO lies in transparency and security. First of all, the tokens need to be issued according to rules and regulations that apply to all securities. Moreover, their issuance needs to be blockchain-based. That’s why STO tokens can only be issued once there exists an infrastructure that supports such practice. The platform dedicated to managing security tokens needs to adhere to a number of different policies such as KYC and AML. Such platforms need to be regulated and licensed to trade commodities too. To sell security tokens, projects need to abide by the legislation recommendations of the local authorities in many different aspects, starting from marketing to KYC/AML.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-2">
                                            <h3 class="text-white">Lower costs than IPOs:</h3>
                                            <p className="text-white">Companies that want to go public need to make a large upfront investment. That’s why only a handful of companies do that beyond the crypto world. And as a result, investors can buy the shares of relatively few companies. An STO is much cheaper to carry out. Since it removes all the middlemen such as brokers, exchange fees, and due diligence activities, the cost of running an STO is much lower. And by organizing more STOs, investors will have a greater chance of buying assets.</p>
                                            <h3 class="text-white">Flexibility:</h3>
                                            <p className="text-white">Listing a business is a complex process. Most of the time, it involves initial compliance checks as well as ongoing compliance work. These issues often force business owners to run their businesses in a way they don’t really want. They end up tied to a single exchange and dependent on the analyst recommendations. As a result, they may be driven into short quarterly cycles rather than having the flexibility to focus on their long-term vision. </p>
                                            <h3 class="text-white">Global accessibility:</h3>
                                            <p className="text-white">Since token standards are uniform across all the regions of the world, it means that buying and trading tokens is very easy. Investors can do that in any country they want. Security tokens are more liquid than privately held shares – which, in fact, can be time-consuming and costly to trade. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>        
       <LetsTalk/>
       <Footer/>

       <CopyRight/>
       
    </div>
  );
};

export default ICOIEOSTOPlatform;
