import React, {createRef, useState} from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Navigation from "../Header/Navigation/Navigation";
import LetsTalk from "../LetsTalk/LetsTalk";
import correct from "../../assests/images/correct.png";

const Quotation = ({selectedTab, productsList, handleSelectedProduct, handleQuoteBtn,}) => {


    return (
        <>
            <section className=" white-header innerfooter">
                <Navigation/>
                <section className="py-5 py-md-5 securit  ">
                    <div className="container">
                        <div className="row p-y-100 align-items-center">
                            <div className="col-lg-12 text-center">
                                <h1 className="mb-3">Choose your Service Portfolio</h1>
                            </div>
                        </div>
                        <div className="qutei">
                            <div className="gets">
                                {productsList[selectedTab].list.map((data, i) => (
                                    <div
                                        className={`get-head ${data.selected && 'selected'}`}
                                        key={i}
                                        onClick={() => handleSelectedProduct(i)}>
                                        <div className="get-title">
                                            <h3 className={data.selected && 'selected'}>{data.heading}</h3>
                                            <p>{data.description}</p>
                                        </div>
                                        <div className="correct">
                                            <img width="15%" src={correct} alt=""/>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <a onClick={handleQuoteBtn} className="btn btn-primary">Get a quote</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <LetsTalk/>
                <Footer/>
                <CopyRight/>
            </section>
        </>
    );
};
export default Quotation;
