import React from "react";
import Navigation from "../../Header/Navigation/Navigation";
import StoIcon from "../../../assests/images/sto.png";

const HeaderProductLiquidity = () => {
  return (
    <section className="headerProduct  blue-bg">
        <Navigation/>
        <div className="container wide-block">
            <div className="row home-header-content align-items-center justify-content-center my-5">
            <   div className="col-lg-8 text-white">
            <h1>OTC Platform</h1>
                    <h2 className="my-4 him">Turnkey Solution</h2>
                    <p>Infrastructure to power your ecosystem with high volume.</p>
                    </div>
                    <div className="col-lg-4">
                        <img src={StoIcon} alt="" />
                    </div>
            </div>    
        </div>
        
    </section>
  );
};

export default HeaderProductLiquidity;
