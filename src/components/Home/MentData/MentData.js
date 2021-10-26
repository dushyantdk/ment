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
                        <h1>Robust Technologies & <span className="">Best in Industry</span></h1>
                    </div>
                </div>
            </div>
            
            <div className="row tech-cloud-block">
                <div className="col-lg-6">
                    <div className="title-block text-white">
                        <h2 className="tect-ment"><span className="">Cutting-edge</span> technology. </h2>
                        <p>You may have used many applications developed by our application framework and stack like SoundCloud, AirBNB, Github, shopify, zendesk, twitch, and many others.</p>
                        <p>We develop cloud-based cryptocurrency exchange solutions on the same principles that enable Microsoft, Google, and Amazon to safely run billions of containers in the cloud every day.</p>
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
                        <h2 className="tect-ment"><span className="">Self-healing</span><br/> planet-scale cloud.</h2>
                        <p>We design crypto exchange cloud solutions on the same principles that allow Google, Amazon, and Microsoft to run billions of cloud containers every day safely.</p>
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
