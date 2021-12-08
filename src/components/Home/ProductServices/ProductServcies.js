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
                        <h1><span className="gradient-text-red">Product & Services</span></h1>
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
                                        <h2 className="manys">Modules for cryptocurrency exchange</h2>
                                        <p className="spents">Our product ecosystem has been built over many years to provide ready-to-deploy modules. Consequently, we are able to provide you with a wide range of modules at extremely competitive pricing. Compared to others, our products & solutions are unique.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2 className="manys">Turnkey & Liquidity Solutions</h2>
                                        <p className="spents">Whether you are looking for brokerage, exchange or wallet solutions, you can choose from our comprehensive range of bespoke solutions.</p>
                                        <p className="spents">A complete solution encompassing services and technologies that allows businesses to launch new Cryptocurrency exchanges in under one month, with minimal outlay.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2 className="manys">Liquidity Management Solutions for Enterprises</h2>
                                        <p className="spents">Traders need to have their transactions completed as quickly and efficiently as possible. Liquidity is a critical element for tradable assets, including cryptocurrencies. REDUCED VOLUME? Not a problem! We offer Enterprise Liquidity Solutions for trading on other exchanges with large volumes, such as Binance, Huobi, etc.</p>
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
                                                <p className="spents">Invest in the development of a cryptocurrency exchange business with a spot-matching engine. A great way for your company to capitalize on today's trends is to offer your clients the opportunity to trade crypto-to-crypto and crypto-to-fiat pairs.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="p-s-blcok">
                                            <h3 className="many">OTC Trading System</h3>
                                            <p className="spents">Over-the-counter (OTC) trading provides institutional clients and wealthy individuals with more liquidity and a more private, individualized experience.</p>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="p-s-blcok">
                                            <h3 className="many">NFT Marketplace Turnkey</h3>
                                            <p className="spents">By providing a SaaS platform for trading collectibles, art, valuables, assets, and securities backed by NFT tokens, Ment Fintech can help you implement an NFT (Non-Fungible Token) Crypto Marketplace.</p>
                                        </div>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="p-s-blcok">
                                        <h3 className="many">Decentralized Crypto Exchange Solution</h3>
                                        <p className="spents">In contrast to a centralized exchange, decentralized exchanges are peer-to-peer cryptocurrency exchange services in which the assets are stored and exchanged without a central authority.</p>
                                        </div>
                                        </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">White-Label Exchange Solution</h3>
                                                <p className="spents">The company provides white label exchange solutions around the world. Product portfolios, risk control systems, applicable teams, and deployment processes are explained in detail on this page.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Solution for swapping and staking</h3>
                                                <p className="spents">Investors can earn a yield from the largest variety of crypto assets with our non-custodial staking and de-fi lending infrastructure. We support more than 100 cryptocurrencies and deliver rewards on a broad range of cryptocurrencies. </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">  
                                                <h3 className="many">Wallet Solutions</h3>
                                                <p className="spents">As a wallet brand, Ment Fintech develops technology for wallets, supporting PMs, exchanges, online merchants, and small and medium-sized businesses. It aims to provide quick access to wallets and a sound ecosystem for the blockchain.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">  
                                                <h3 className="many">KYC & AML Solution</h3>
                                                <p className="spents">Onboarding and customer verification platform all in one. You'll no longer have to worry about ID verification thanks to dependable KYC and AML procedures, an intuitive UX design, and excellent scalability.</p>
                                            </div>
                                        </div>  
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Cryptocurrency Liquidity</h3>
                                                <p className="spents">Investing in our pricing technology and building an extensive liquidity network has taken many years. Because we can offer you the lowest prices and best execution in a variety of markets, we are able to give you the best deal possible. We have unparalleled FOREX liquidity. </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Bot for aggregating liquidity</h3>
                                                <p className="spents">The Liquidity Aggregation bot provides your exchange with orderbook and trade history data from other platforms with large volumes such as Binance, Huobi, etc. Even though your exchange is new, this is the best way to make it look alive.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Crypto CFD Liquidity</h3>
                                                <p className="spents">Trading cryptocurrencies with CFDs is convenient. Ment Fintech brings together cryptocurrency exchanges, non-bank liquidity providers, cryptocurrency brokers, OTC orders of institutional clients, and hedge funds to offer a unique Crypto CFD solution.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-s-blcok">
                                                <h3 className="many">Market Maker Bot</h3>
                                                <p className="spents">Exchanges, brokers, and institutional investors are able to reduce costs and increase efficiency thanks to the system, which provides better liquidity and depth of transaction.</p>
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
