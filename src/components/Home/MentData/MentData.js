import React from "react";
import GOIcon from "../../../assests/images/home/go.svg";
import ReactIcon from "../../../assests/images/home/react.svg";
import MySql from "../../../assests/images/home/mysql.svg";
import Ruby from "../../../assests/images/home/ruby.svg";
import Redis from "../../../assests/images/home/redis.svg";
import GoogleWhite from "../../../assests/images/home/google-cloud-white.svg";
import AwsWhite from "../../../assests/images/home/aws-white.svg";
import AzureWhite from "../../../assests/images/home/azure-white.svg";
import DockerWhite from "../../../assests/images/home/docker-white.svg";
import KuberWhite from "../../../assests/images/home/kubernetes-white.svg";
import HeaderLogo from "../../../assests/images/m-logo-white.svg";

const MentData = () => {
  return (
    <section className="mentdata">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="title-block text-white">
                        <h1>Technologies that are <span className="gradient-text-yellow">robust and best in class</span></h1>
                    </div>
                </div>
            </div>
            
            <div className="row tech-cloud-block">
                <div className="col-lg-6">
                    <div className="title-block text-white">
                        <h2 className="tect-ment"><span className="gradient-text-green">Leading-edge </span> technology. </h2>
                        <p>Hundreds of thousands of apps have already been built with our stack and framework, including AirBNB, Shopify, SoundCloud, Twitch, GitHub, and Zendesk.</p>
                      
                        <p className="d-flex">
                            <a className="info_logo" href="#"><img className="go" src={GOIcon} alt="" /></a>
                            <a className="info_logo" href="#"><img src={ReactIcon} alt="" /></a>
                            <a className="info_logo" href="#"><img src={MySql} alt="" /></a>
                            <a className="info_logo" href="#"><img src={Ruby} alt="" /></a>
                            <a className="info_logo" href="#"><img src={Redis} alt="" /></a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="title-block text-white">
                        <h2 className="tect-ment"><span className="gradient-text-blue">Self-healing </span><br/>planet-scale cloud.</h2>
                        <p>Based on the same principles that Google, Amazon, and Microsoft rely on every day when running billions of cloud containers, we design crypto exchange cloud solutions.</p>
                        <p className="d-flex">
                            <a className="info_logo" href="#"><img src={GoogleWhite} alt="" /></a>
                            <a className="info_logo" href="#"><img src={AwsWhite} alt="" /></a>
                            <a className="info_logo" href="#"><img src={AzureWhite} alt="" /></a>
                            <a className="info_logo" href="#"><img src={DockerWhite} alt="" /></a>
                            <a className="info_logo" href="#"><img src={KuberWhite} alt="" /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default MentData;
