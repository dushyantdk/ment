import React from "react";
import Navigation from "../Navigation/Navigation";
import Exchangetk from "../../../assests/images/product/exchange-tk.png";

const HeaderProduct = (props) => {
  return (
    <section className="headerProduct blue-bg">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5">
                <div className="col-lg-7 text-white">
                    <h1>Cryptocurrency Exchange</h1>
                    <h2 className="my-4 him">{props.productname} {props.productname2}</h2>
                    <p>Ment Tech is a world-leading white label exchange solution provider. This page gives a detailed introduction of Product portfolios, risk control system, applicable teams and deployment process.</p>
                </div>
                <div className="col-lg-5">
                  <img src={Exchangetk} alt="" />
                </div>
            </div>    
        </div>
        

    </section>
  );
};

export default HeaderProduct;
