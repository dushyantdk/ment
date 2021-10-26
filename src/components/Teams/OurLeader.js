import React from "react";
import UjwalImg from "../../assests/images/team/1.svg";
import BhaveshImg from"../../assests/images/team/2.svg";
import KevinImg from"../../assests/images/team/3.svg";
import LarryImg from"../../assests/images/team/4.svg";
import NicholasImg from"../../assests/images/team/5.svg";
import VikramImg from"../../assests/images/team/6.svg";

const OurLeader = () => {
  return (
    <section className="our-leader p-y-100">
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1>Our Leadership</h1>
                    <p>Ment  is a market-leading blockchain technology company.</p>
                </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={KevinImg} alt="" />
                        <h3>Kevin Connolly</h3>
                        <p>Co-Founder & CEO</p>
                    </a>
                </div>
                <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={UjwalImg} alt="" />
                        <h3>Ujjwal Sahay</h3>
                        <p>Founder & MD</p>
                    </a>
                </div>
                <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={BhaveshImg} alt="" />
                        <h3>Bhavesh Deshmukh</h3>
                        <p>Chief Technology Officer</p>
                    </a>
                </div>
               
                <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={LarryImg} alt="" />
                        <h3>Larry Castro</h3>
                        <p>Space Based Blockchain Executive</p>
                    </a>
                </div>
                <div className="col-lg-3">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={NicholasImg} alt="" />
                        <h3>Nicholas Martin</h3>
                        <p>Fintech Executive</p>
                    </a>
                </div>
                <div className="col-lg-3">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={VikramImg} alt="" />
                        <h3>Vikram Reddy</h3>
                        <p>Fintech COO</p>
                    </a>
                </div>
              
            </div>
        </div>
    </section>
  );
};

export default OurLeader;
