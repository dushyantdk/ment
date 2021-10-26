import React from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Navigation from "../Header/Navigation/Navigation";
import MainPost from "../../assests/images/news/main.svg";
import MlogoWhite from "../../assests/images/m-logo-white.svg";
import ListPost1 from "../../assests/images/news/listpost.svg";
import {Helmet} from "react-helmet";

const NewsAnalysis = () => {
  return (
    <section className="newsanalysis innerfooter">
        <Helmet>
        <title>News & Analysis - Ment</title>
        <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
        <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
        <meta property="og:url" content="https://Ment Fintech"></meta>
      </Helmet>
        <section className="white-header header-news">
            <Navigation/>
            <section className="socailfeeds mb-5">
                <div className="container wide-block">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12 col-sm-12 text-center"> 
                            <div className="d-flex justify-content-between blog-left-socail">
                                    <span>Follow</span>
                                    <a href="https://www.instagram.com/mentfintech/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.facebook.com/Ment-Fintech-Ltd-105174808364154"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/ment_fintech"><i class="fab fa-twitter"></i></a>
                                    <a href="https://t.me/Mentfintech"><i class="fab fa-telegram-plane"></i></a>
                                    <a href="https://www.linkedin.com/company/ment-ie/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.youtube.com/channel/UC_3SFkoApivR81hA2PJ9Kyw"><i class="fab fa-youtube"></i></a>
                                    <a href="https://www.reddit.com/user/MentFintech"><i class="fab fa-reddit-alien"></i></a>
                                      {/* <li><a href="#"><i class="fab fa-discord"></i></a></li> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container wide-block">
                <div className="row">
                    <div className="col-lg-8">
                        <a href="news-detail" className="blog-img">
                            <img className="img-fluid" src={MainPost} alt="" />
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-text">
                            <a href="news-detail">
                                <h2>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h2>
                                <p>By Brian Armstrong, Co-founder and CEO</p>
                            </a>
                            <a href="#" className="posted-by">
                                <div className="m-icon-post">
                                    <img className="mg-fluid" src={MlogoWhite} alt="" />
                                </div>
                                <div className="m-icon-post-content">
                                    <p className="name">MENT FINTECH</p>
                                    <p className="date-posted">Apr 14 . 2 min read</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                    
                    
                
            </div>
        </section>
        <section>
            <div className="container wide-block">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                <div className="blogpost-list mb-4">
                                    <a href="#" className="blog-img">
                                        <img className="img-fluid" src={ListPost1} alt="" />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <a href="#">
                                        <h2>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h2>
                                        <p>By Brian Armstrong, Co-founder and CEO</p>
                                    </a>
                                    <a href="#" className="posted-by mt-4">
                                        <div className="m-icon-post">
                                            <img className="mg-fluid" src={MlogoWhite} alt="" />
                                        </div>
                                        <div className="m-icon-post-content">
                                            <p className="name">MENT FINTECH</p>
                                            <p className="date-posted">Apr 14 . 2 min read</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <div className="blogpost-list mb-4">
                                    <a href="#" className="blog-img">
                                        <img className="img-fluid" src={MainPost} alt="" />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <a href="#">
                                        <h2>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h2>
                                        <p>By Brian Armstrong, Co-founder and CEO</p>
                                    </a>
                                    <a href="#" className="posted-by mt-4">
                                        <div className="m-icon-post">
                                            <img className="mg-fluid" src={MlogoWhite} alt="" />
                                        </div>
                                        <div className="m-icon-post-content">
                                            <p className="name">MENT FINTECH</p>
                                            <p className="date-posted">Apr 14 . 2 min read</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                <div className="blogpost-list mb-4">
                                    <a href="#" className="blog-img">
                                        <img className="img-fluid" src={ListPost1} alt="" />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <a href="#">
                                        <h2>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h2>
                                        <p>By Brian Armstrong, Co-founder and CEO</p>
                                    </a>
                                    <a href="#" className="posted-by mt-4">
                                        <div className="m-icon-post">
                                            <img className="mg-fluid" src={MlogoWhite} alt="" />
                                        </div>
                                        <div className="m-icon-post-content">
                                            <p className="name">MENT FINTECH</p>
                                            <p className="date-posted">Apr 14 . 2 min read</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <div className="blogpost-list mb-4">
                                    <a href="#" className="blog-img">
                                        <img className="img-fluid" src={MainPost} alt="" />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <a href="#">
                                        <h2>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h2>
                                        <p>By Brian Armstrong, Co-founder and CEO</p>
                                    </a>
                                    <a href="#" className="posted-by mt-4">
                                        <div className="m-icon-post">
                                            <img className="mg-fluid" src={MlogoWhite} alt="" />
                                        </div>
                                        <div className="m-icon-post-content">
                                            <p className="name">MENT FINTECH</p>
                                            <p className="date-posted">Apr 14 . 2 min read</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-5">
                                <div className="blogpost-list mb-4">
                                    <a href="#" className="blog-img">
                                        <img className="img-fluid" src={ListPost1} alt="" />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <a href="#">
                                        <h2>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h2>
                                        <p>By Brian Armstrong, Co-founder and CEO</p>
                                    </a>
                                    <a href="#" className="posted-by mt-4">
                                        <div className="m-icon-post">
                                            <img className="mg-fluid" src={MlogoWhite} alt="" />
                                        </div>
                                        <div className="m-icon-post-content">
                                            <p className="name">MENT FINTECH</p>
                                            <p className="date-posted">Apr 14 . 2 min read</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <div className="blogpost-list mb-4">
                                    <a href="#" className="blog-img">
                                        <img className="img-fluid" src={MainPost} alt="" />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <a href="#">
                                        <h2>Let’s get more people into the cryptoeconomy — An update to corporate giving at Ment Fintech</h2>
                                        <p>By Brian Armstrong, Co-founder and CEO</p>
                                    </a>
                                    <a href="#" className="posted-by mt-4">
                                        <div className="m-icon-post">
                                            <img className="mg-fluid" src={MlogoWhite} alt="" />
                                        </div>
                                        <div className="m-icon-post-content">
                                            <p className="name">MENT FINTECH</p>
                                            <p className="date-posted">Apr 14 . 2 min read</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pb-4">
                        
                        <div className="block-bg">
                            <h2>Explore Topics</h2>
                            <ul className="topics-ul">
                                <li><a href="#"><i class="fas fa-chevron-right"></i> Cryto Currency <span className="count">(5)</span></a></li>
                                <li><a href="#"><i class="fas fa-chevron-right"></i> Trading <span className="count">(3)</span></a></li>
                                <li><a href="#"><i class="fas fa-chevron-right"></i> Liquidity <span className="count">(3)</span></a></li>
                                <li><a href="#"><i class="fas fa-chevron-right"></i> Cryto Currency <span className="count">(4)</span></a></li>
                                <li><a href="#"><i class="fas fa-chevron-right"></i> Trading <span className="count">(1)</span></a></li>
                                <li><a href="#"><i class="fas fa-chevron-right"></i> Liquidity <span className="count">(2)</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <Footer/>
        <CopyRight/>
    </section>
  );
};

export default NewsAnalysis;
