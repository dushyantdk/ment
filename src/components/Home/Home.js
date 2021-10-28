import React, { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import * as yup from "yup";
import { Form, Formik } from "formik";
import CopyRight from "../Footer/CopyRight";
import Footer from "../Footer/Footer";
import Header from "../Header/HeaderHome/Header";
import CloudApp from "./CoudHome/ClodeHome";
// import CryptoExchangeview from "./CryptoExchangeView/CryptoExchangeview";
import DownloadApp from "./DownloadApp/DownloadApp";
import MentData from "./MentData/MentData";
import OneStopSolution from "./OneStopSolution/OneStopSolution";
import PrimaryModul from "./PrimaryModul/Primary-Modul";
import ConfigurationCode from "./ConfigurationCode/ConfigurationCode";
import ProductServices from "./ProductServices/ProductServcies";
import Servers from "./Servers";
import SoftwareDevProcess from "./SoftwareDevelpment/SoftwareDevelpment";
import SpeaktoExpert from "./SpeaktoExpert/SpeaktoExpert";
import {Helmet} from "react-helmet";
import LetsTalk from "../LetsTalk/LetsTalk";
import Community from "./Community";
import Request from "./Request";

const Home = () => {
 
  return (
    <div className="home">
       <Helmet>
        <title>Ment Fintech - Cryptocurrency Exchange Development Company</title>
        <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
        <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
      </Helmet>
      <Header/>
      <Servers/>
      <OneStopSolution/>
      <ProductServices/>
      <Community/>
      <MentData/>
      {/* <CryptoExchangeview/> */}
      <ConfigurationCode/>
      <PrimaryModul/>
      <DownloadApp/>
      <CloudApp/>
      <SoftwareDevProcess/>
      <Request />
      <LetsTalk/>
      <SpeaktoExpert/>
      <Footer/>
      <CopyRight/>      
    </div>
  );
};

export default Home;
