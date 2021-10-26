import React from "react";
import Footer from "../Footer/Footer";
import HeaderCareer from "../Header/HeaderCareer/HeaderCareer";
import { Card, Accordion,Button } from "react-bootstrap";
import CopyRight from "../Footer/CopyRight";
import {Helmet} from "react-helmet";

const Careers = () => {
  return (
    <section className="contactus innerfooter career">
  
        <Helmet>
            <title>Career - Ment</title>
            <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
            <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
            <meta property="og:url" content="https://Ment Fintech"></meta>
        </Helmet>
        <HeaderCareer/>
        <section className="location-offices py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-12 text-center">
                        <h1>Where we can hire </h1>
                        <p>We ❤️ our remote culture at Ment and we currently have hiring entities in all the following states and countries.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>A diverse and inclusive workplace </h4>
                                <p>At Ment, we think that a diverse company is a strong company, and we work hard to foster a supportive and welcoming workplace.</p>
                            </div>
                            <div className="col-lg-6">
                                <h4>Keep growing </h4>
                                <p>Learn how you learn best. From books to conferences, you’ll get a yearly budget for your individual learning and development goals.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <h4>Invest in your future </h4>
                                <p>At Ment, you’ll have a stake in the future success of our platform with equity grants. For full-time employees, we offer competitive 401k planning with a 50% company match up to the IRS 402(g) annual limit.</p>
                            </div>
                            <div className="col-lg-6">
                                <h4>Work happier </h4>
                                <p>Build amazing things with autonomy, self-direction, and a healthy work-life balance. We offer flexible work schedules for all of our employees and Flexible PTO. We also believe that if a job allows for it, you should work wherever you’re happiest.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-12 text-center">
                        <h1>Open positions</h1>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-12">
                        <Accordion className="job-listing">
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                   Design <span>2 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="/careerdetail">Senior Designer, Accessibility & Design Systems
                                            <span>Remote - US / Canada</span></a>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                   Software Enginers <span>5 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="#">Software Engineer - Salesforce</a>
                                            <span> Remote - India</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Blockchain Developer  <span>5 Openings</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <ul>
                                        <li>
                                            <a href="#">Senior Blockchain Developer & Blockchain Engineer</a>
                                            <span>Remote - US / Canada</span>
                                        </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
      
        <Footer/>
        <CopyRight/>
        
    </section>
  );
};

export default Careers;
