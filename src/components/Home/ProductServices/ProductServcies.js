import React from "react";
import Tabs from "react-bootstrap/Tabs";
import { Nav, Tab } from "react-bootstrap";
import Ment from "../../../assests/images/m-logo-blue.svg";
const ProductServices = () => {
  return (
    <section className="ProductService p-b-50 blue-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">          
                    <div className="title-block">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        <h1 className="text-white"><span>Product & Services</span></h1>
                    </div>
                </div>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="row ">
                    <div className="col-lg-3 position-relative w-100">
                        <div className="tablisting align-top">
                            <Nav variant="pills" className="">
                                <Nav.Item className="w-100">
                                <Nav.Link eventKey="first">Products</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="w-100">
                                <Nav.Link eventKey="second">Solutions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="w-100">
                                <Nav.Link eventKey="third">Liquidity</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </div>
                            </div>
                            <div className="col-lg-9">
                            <div className=" talisting-content-left text-white text-left ">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h2 className="manys">Cryptocurrency Exchange Modules</h2>
                                        <p className="spents">We have spent many years building our product ecosystem to deliver modules ready to deploy. This means we are able to provide you very competitive prices and excellent performance for a extensive range of modules. Our products & solutions are incomparable in the industry.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2 className="manys">Turnkey & Liquidity Solutions</h2>
                                        <p className="spents">Select from our broad variety of tailored solutions develop for every type of financial activity including exchange, brokerage, and wallets. Our comprehensive solution comprising services and technologies that enables businesses to start a new Cryptocurrency exchange with minimal outlay in under 1 month.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2 className="manys">Cryptocurrency Liquidity</h2>
                                        <p className="spents">We've spent a numbers of years to developing the network of deep liquidity and investing in the technology of pricing. This means we are able to provide you very competitive prices and excellent performance for an extensive range of markets. Our FOREX liquidity is incomparable in the industry.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                    
                            <div className="talisting-content">
                                <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Spot Trading System</h3>
                                                <p className="spents">Launch an exchange business with a spot matching engine for trading on popular different cryptocurrency.  An ideal way to capitalise on today’s trends by offering your clients trading on crypto-crypto and crypto-fiat pairs.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="p-s-blcok">
                                            <h3 className="many">OTC Trading System</h3>
                                            <p className="spents">In Over-the-counter (OTC) trading, we provide a private and higher Liquidity, more customized services for high income organizations and people who need to fulfill their large orders.</p>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="p-s-blcok">
                                            <h3 className="many">NFT Marketplace Turnkey</h3>
                                            <p className="spents">Ment Fintech will help you build an NFT (Non-Fungible Token) Crypto Marketplace SaaS platform to provision trading of collectibles, art, valuables, assets, and securities, backed by NFT tokens.</p>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="p-s-blcok">
                                        <h3 className="many">Decentralized Crypto Exchange Solution</h3>
                                        <p className="spents">A decentralized exchange (DEX) is an online peer-to-peer (P2P) cryptocurrency exchange service which operates without central authority responsible for the asset storage and swapping.</p>
                                        </div>
                                        </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">White-Label Exchange Solution</h3>
                                                <p className="spents">Ment Fintech is a leading global provider of white label exchange solutions. This page provides the comprehensive introduction about portfolios of product, procedures of deployment, applicable teams, and risk control system.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Swapping & Staking Solution</h3>
                                                <p className="spents">Our non-custodial staking and De-Fi lending infrastructure enables investors to earn a yield on the widest variety of crypto assets. With support for 100+ assets and deliver rewards across the broadest range of crypto assets.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">  
                                                <h3 className="many">Wallet Solutions</h3>
                                                <p className="spents">As a wallet brand of MentFintechspecializes in wallet underlying technology development, helping PMs, exchanges, online merchants, small and medium blockchain enterprises, etc. To quickly build a wallet system and a sound blockchain ecosystem.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">  
                                                <h3 className="many">KYC & AML Solution</h3>
                                                <p className="spents">All in one platform for connecting and verifying clients. We’re equipped with safe and trustworthy Anti-Money Laundering (AML) and Know Your Customer protocols, correct private information handling, a friendly User experience design, and excellent scalability; you never have to worry about identity verification again.</p>
                                            </div>
                                        </div>  
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Liquidity Aggregation Bot</h3>
                                                <p className="spents">Our Liquidity Aggregation bot brings orderbook and trade history data to your exchange from other exchanges with huge volume like Binance, Huobi etc. It is the best solution to make your exchange look alive even being new to the market.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Crypto CFD Liquidity</h3>
                                                <p className="spents">Arguably, CFDs allow convenient and secure crypto trading. Ment Fintech provides an incomparable Crypto CFD solution. Our CFD solution is an optimum merger of crypto exchanges, brokers, hedge funds, OTC order placed by the organizational buyers and non-bank liquidity providers.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Market Maker Bot</h3>
                                                <p className="spents">The system provides better liquidity and depth of transaction that helps to exchanges, organizational investors and brokers decreases costs and enhance efficiency</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Enterprise Liquidity Solutions</h3>
                                                <p className="spents">This phenomenon is most important for all traded assets, including crypto and traders need to have transactions completed as quickly and as cost effectively as possible. LESS VOLUME? No Worries! Our Enterprise Liquidity Solution will let your trades executed from other exchanges with huge volume like Binance, Huobi etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Tab.Pane>
                            </Tab.Content>
                            </div>
                        </div>
                       
                       
                    
                </div>
            </Tab.Container>
        </div>
    </section>
  );
};

export default ProductServices;
