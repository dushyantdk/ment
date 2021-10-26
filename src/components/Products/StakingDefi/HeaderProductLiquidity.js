import React from "react";
import StakingIcon from "../../../assests/images/product/staking-icon.svg";
import Navigation from "../../Header/Navigation/Navigation";

const HeaderProductLiquidity = () => {
  return (
    <section className="headerProduct blue-bg">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5">
                <div className="col-lg-7 text-white">
                    <h1>Crypto Staking & Defi Lending</h1>
                    <h2 className="my-4 him">Turnkey Solution</h2>
                    <p>Infrastructure to Power Staking and Defi Lending</p>
                </div>
                <div className="col-lg-5">
                    <img src={StakingIcon} alt="" />
                </div>
            </div>    
        </div>
        
    </section>
  );
};

export default HeaderProductLiquidity;
