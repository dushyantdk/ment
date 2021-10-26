import React from "react";
import Footer from "../Footer/Footer";
import TeamsHeader from "../Header/Teamsheader/TeamsHeader";
import OurLeader from "./OurLeader";
import Management from "./Management";
import OurEnginers from "./OurEngineers";
import OtherInfo from "./OtherInfo";
import CopyRight from "../Footer/CopyRight";
import {Helmet} from "react-helmet";
const Teams = () => {
  return (
    <section className="teams innerfooter">
      <Helmet>
        <title>Our Team - Ment</title>
        <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
        <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
        <meta property="og:url" content="https://Ment Fintech"></meta>
      </Helmet>
        <TeamsHeader/>
        <OurLeader/>
        <Management/>
        <OurEnginers/>
        <OtherInfo/>
        <Footer/>
        <CopyRight/>
    </section>
  );
};

export default Teams;
