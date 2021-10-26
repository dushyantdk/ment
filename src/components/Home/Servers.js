import React from "react";
import Googlecloud from "../../assests/images/home/google-cloud.svg";
import aws from "../../assests/images/home/aws.svg";
import azure from "../../assests/images/home/azure.svg";
import docker from "../../assests/images/home/docker.svg";
import kubernetes from "../../assests/images/home/kubernetes.svg";

const Servers = () => {
  return (
    <section className="servers">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="d-flex justify-content-between pl-0">
                        <li><img src={Googlecloud} alt="" /></li>
                        <li><img src={aws} alt="" /></li>
                        <li><img src={azure} alt="" /></li>
                        <li><img src={docker} alt="" /></li>
                        <li><img src={kubernetes} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Servers;
