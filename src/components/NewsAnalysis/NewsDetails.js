import React from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Navigation from "../Header/Navigation/Navigation";
import MainPost from "../../assests/images/news/main.jpg";
import MlogoWhite from "../../assests/images/m-logo-white.png";
import {Helmet} from "react-helmet";
import LetsTalk from "../LetsTalk/LetsTalk";

const NewsDetails = () => {
  return (
    <section className="newsdetails innerfooter">
        <Helmet>
        <title>News & Analysis Detail- Ment</title>
        <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
        <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
        <meta property="og:url" content="https://Ment Fintech"></meta>
        </Helmet>
        <section className="white-header header-news">
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-text">
                            <a href="#" className="pb-5">
                                <h1>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h1>
                                <p>By Brian Armstrong, Co-founder and CEO</p>
                            </a>
                            <div className="post-header-share">
                                <a href="#" className="posted-by">
                                    <div className="m-icon-post">
                                        <img className="mg-fluid" src={MlogoWhite} alt="" />
                                    </div>
                                    <div className="m-icon-post-content">
                                        <p className="name">MENT FINTECH</p>
                                        <p className="date-posted">Apr 14 . 2 min read</p>
                                    </div>
                                </a>
                                <div className="share-icon">
                                <a href="https://www.instagram.com/mentfintech/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/Ment-Fintech-Ltd-105174808364154"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/ment_fintech"><i class="fab fa-twitter"></i></a>
                                    <a href="https://t.me/Mentfintech"><i class="fab fa-telegram-plane"></i></a>
                                    <a href="https://www.linkedin.com/company/ment-ie/"><i class="fab fa-linkedin-in"></i></a>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <a href="#" className="blog-img">
                            <img className="img-fluid" src={MainPost} alt="" />
                        </a>
                    </div>
                    <div className="col-lg-12 my-5">
                        <p>Prior to our recent direct listing, in April 2020, we partnered with Pledge 1% to build a corporate giving program that would commit 1% of Coinbase profits, equity, and employee time toward charitable activities that leverage the power of crypto to help people around the world.</p>
                        <p>We partnered with Pledge 1% because realize that our vision of creating economic freedom for every person and business in the world is ambitious. We also know that for it to become a reality, we’ll need to not only build the products and services that our customers want, but to also think creatively about how we can ensure that crypto gets into the hands of those who need it most.</p>
                        <p>We are calling our Pledge 1% program Coinbase Giving. It will be a charitable program within Coinbase, focused on a common goal of increasing economic freedom for every person and business in the world. One of the limitations of traditional corporate philanthropy is that most companies don’t have the resources or the expertise to manage their philanthropic programs, instead they rely on funding charitable organizations to achieve their public-spirited goals. Coinbase Giving is taking a different approach: a hybrid model following the path forged by other tech leaders. Coinbase Giving will not only support charities that share our mission and values, but we’ll also manage our own programs from start to finish.</p>
                        <p>Prior to our recent direct listing, in April 2020, we partnered with Pledge 1% to build a corporate giving program that would commit 1% of Coinbase profits, equity, and employee time toward charitable activities that leverage the power of crypto to help people around the world.</p>
                        <p>We partnered with Pledge 1% because realize that our vision of creating economic freedom for every person and business in the world is ambitious. We also know that for it to become a reality, we’ll need to not only build the products and services that our customers want, but to also think creatively about how we can ensure that crypto gets into the hands of those who need it most.</p>
                        <p>We are calling our Pledge 1% program Coinbase Giving. It will be a charitable program within Coinbase, focused on a common goal of increasing economic freedom for every person and business in the world. One of the limitations of traditional corporate philanthropy is that most companies don’t have the resources or the expertise to manage their philanthropic programs, instead they rely on funding charitable organizations to achieve their public-spirited goals. Coinbase Giving is taking a different approach: a hybrid model following the path forged by other tech leaders. Coinbase Giving will not only support charities that share our mission and values, but we’ll also manage our own programs from start to finish.</p>
                    </div>
                </div>
            </div>
        </section>
        <LetsTalk/>
        <Footer/>
        <CopyRight/>
    </section>
  );
};

export default NewsDetails