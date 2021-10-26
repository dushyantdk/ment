import React from "react";
import AffiliateIcon from "../../../assests/images/product/affiliate.svg";
import Navigation from "../../Header/Navigation/Navigation";

const HeaderProductLiquidity = () => {
  return (
    <section className="headerProduct blue-bg">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5">
                <div className="col-lg-7 text-white">
                    <h1>Referral & Affiliate System</h1>
                    <h2 className="my-4 him">for Crypto Exchanges</h2>
                    <p>Infrastructure to Power Multilevel Referral & Affiliate Program</p>
                </div>
                <div className="col-lg-5">
                 <img src={AffiliateIcon} alt="" />
                </div>
            </div>    
        </div>
        
    </section>
  );
};

export default HeaderProductLiquidity;
