import React from "react";
import UjwalImg from "../../assests/images/team/7.svg";
import BhaveshImg from"../../assests/images/team/8.svg";
import KevinImg from"../../assests/images/team/9.svg";
import LarryImg from"../../assests/images/team/10.svg";
import SupriyaImg from"../../assests/images/team/11.svg";
import AvishImg from"../../assests/images/team/12.svg";

const OurManagement = () => {
  return (
    <section className="our-management p-y-100">
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1>Management</h1>
                    <p> Ment Tech's team of multinational business specialists operate across the globe.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={UjwalImg} alt="" />
                        <h3>Ashutosh Singh</h3>
                        <p>Project & Operations Manager</p>
                    </a>
                </div>
                <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={BhaveshImg} alt="" />
                        <h3>Rajeev Ranjan</h3>
                        <p>Regional Marketing Manager</p>
                    </a>
                </div>
                <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={KevinImg} alt="" />
                        <h3>Dushyant Sharma</h3>
                        <p>Head of Product Design</p>
                    </a>
                </div>
                <div className="col-lg-3 mb-4">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={LarryImg} alt="" />
                        <h3>Simran Sonawale</h3>
                        <p>HR Manager</p>
                    </a>
                </div>
                <div className="col-lg-3">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={SupriyaImg} alt="" />
                        <h3>Supriya Ranpise</h3>
                        <p>Product Quality Manager</p>
                    </a>
                </div>
                <div className="col-lg-3">
                    <a className="team-block hover-grow no-underline">
                        <img className="img-fluid rounded-2" src={AvishImg} alt="" />
                        <h3>Avish Kadakia</h3>
                        <p>Project Manager & Technologist</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OurManagement;
