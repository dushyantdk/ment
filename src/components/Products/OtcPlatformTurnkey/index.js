import React, { useState } from "react";
import ArchitectureOverview from "./ArchitectureOverview";
import ProductTour from "./ProductTour";
import ProductBroucher from "./ProductBroucher";
import Securty from "./Security";
import WhatIs from "./WhatIs";
import Footer from '../../Footer/Footer';
import CopyRight from '../../Footer/CopyRight';
import HeaderProductLiquidity from './HeaderProductLiquidity';
import {Helmet} from "react-helmet";
import LetsTalk from "../../LetsTalk/LetsTalk";

const OtcPlatformTurnkey = () => {

    return (
        <div className="Products innerfooter">
            <Helmet>
                <title>OTC Platform Turnkey Solution</title>
                <meta property="og:title" content="Ment Tech - Cryptocurrency Exchange Development Company" />
                <meta name="description" content="Ment Tech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
                <meta property="og:url" content="https://ment.tech"></meta>
            </Helmet>
            <HeaderProductLiquidity/>
            <ProductBroucher />
            <WhatIs/>
            <ArchitectureOverview/>
            <ProductTour/>
            <Securty/>
            <LetsTalk/>
           <Footer/>
           <CopyRight/>
           
        </div>
    )
};

export default OtcPlatformTurnkey;
