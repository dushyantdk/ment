import React from "react";
import StoIcon from "../../../assests/images/product/mining-pool.png";
import Navigation from "../../Header/Navigation/Navigation";

const HeaderProductLiquidity = () => {
  return (
    <section className="headerProduct blue-bg">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5">
                <div className="col-lg-7 text-white">
                    <h1>Mining Pool Solution</h1>
                    <h2 className="my-4 him">for Crypto Exchanges</h2>
                    <p>Infrastructure to power your ecosystem with mining solution.</p>
                </div>
                <div className="col-lg-5">
                    <img src={StoIcon} alt="" />
                </div>
            </div>    
        </div>
       
    </section>
  );
};

export default HeaderProductLiquidity;
