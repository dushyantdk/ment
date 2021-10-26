import React, { useState, useEffect, useRef } from "react";
import codespacesvscode1 from "../../../assests/images/home/codespaces-vscode-1.svg";
import codespacesvscode2 from "../../../assests/images/home/codespaces-vscode-2.svg";
import codespacesvscode3 from "../../../assests/images/home/codespaces-vscode-3.svg";

const CryptoExchangeview = () => {

  const image1 = codespacesvscode1;
  const image2 = codespacesvscode2;
  const image3 = codespacesvscode3;

  const [image, setImage] = useState(image1);
  const scrollRef = useRef();

  useEffect (() =>{
      scrollRef.current.addEventListener('scroll',handleScroll);
      return () => {
         scrollRef.current.removeEventListener('scroll',handleScroll);
      }
  }, {})
         const handleScroll = () => {
         const scrollTop = scrollRef.current.scrollTop;
         const scrollPos = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
         const scrollPer = (scrollTop / scrollPos) * 100;

         console.log(scrollPer);

         if (scrollPer < 35) {
            setImage(image1);
        } else if (scrollPer < 70) {
            setImage(image2);
        
        } else if (scrollPer < 100) {
            setImage(image3);
    }
}

    

  return (
    <section className="crypt-exchangeview">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blue-bg" ref={scrollRef}>
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-8 text-center">
                                <div className="title-block text-white">
                                    <h1 className="mb-4">Cryptocurrency Exchange  <span className="">Turnkey Solution</span></h1>
                                    <p>Ment Fintech is a leading global provider of white label exchange solutions. This page provides the comprehensive introduction about portfolios of product, procedures of deployment, applicable teams, and risk control system.</p>
                                </div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-lg-6 exchange text-wdurh-custom">
                                <div className="c-e-c-block">
                                  {/*  <span className="circle"></span> */}  
                                    <h3 class="">The future of code not in your local copy,  
                                    <span class="text-white">while it lies in the cloud. Specs of code provide you a comprehensive, custom development environment on a very strong virtual machine in minutes.</span></h3>
                                </div>
                            </div>
                            <div className="col-lg-6 exchange-images">
                                <div className="position-sticky right-0 z-1 pt-3" style={{ top: "8rem", left: 0 }}>
                                    <div className="home-codespaces-img-container overflow-hidden d-flex flex-items-start flex-lg-items-center position-relative pl-2 pl-lg-4">
                                        <picture>
                                            <img className="home-codespaces-view home-codespaces-view-1 z-2 rounded-2 box-shadow-active-border-light-mktg" src={image} alt="" />
                                        </picture>
                                        {/* <img className="home-codespaces-glow position-absolute z-n1" src={codespacesglow    } alt="" /> */}
                                    </div>

                                </div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="stright"></div>
                                <div className="bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CryptoExchangeview;
