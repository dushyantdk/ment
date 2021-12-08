import React from "react";
import Tabs from "react-bootstrap/Tabs";
import { Nav, Tab } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import CopyRight from "../../Footer/CopyRight";
import Navigation from "../../Header/Navigation/Navigation";
import LetsTalk from "../../LetsTalk/LetsTalk";
import fintech from "../../../assests/images/fintech.svg";
import de1 from "../../../assests/images/de1.png";
import de2 from "../../../assests/images/de2.png";
import de3 from "../../../assests/images/de3.png";
import de4 from "../../../assests/images/de4.png";
import de5 from "../../../assests/images/de5.png";
import de6 from "../../../assests/images/de6.png";
import de7 from "../../../assests/images/de7.png";
import b2 from "../../../assests/images/b2.svg";
import b3 from "../../../assests/images/b3.svg";
import b4 from "../../../assests/images/b4.svg";
import b5 from "../../../assests/images/b5.svg";

import b6 from "../../../assests/images/b6.svg";
import b7 from "../../../assests/images/b7.svg";
import x1 from "../../../assests/images/x1.png";
import v1 from "../../../assests/images/v1.svg";
import v2 from "../../../assests/images/v2.svg";
import v3 from "../../../assests/images/v3.svg";
import v4 from "../../../assests/images/v4.svg";


const Fintechsoftware = () => {
    return (
        <>
<section className="innerfooter">
 
  <section className="pt-5 fintechs blue-bg">
  <Navigation/>
  <div className="container">
  <div className="row align-items-center p-y-100">
  <div className="col-lg-6 text-white ">
  <h1 className="mt-4">Ment FinTech is a company that develops software</h1>
  <p className="mt-4">IT Consulting and Development Company with offices in India, the USA, and Ireland</p>
  <button type="submit"  className="btn btn-primary mt-4">Talk to our Financial Expert</button>
  </div>
  <div className="col-lg-6 mt-5">
  <img className="fintech"src={fintech} alt=""/>

  </div>

  </div>
  <div className="row mt-5">
  <div className="col-lg-12 mb-4">
  <ul className="d-flex justify-content-between pl-0">
  <li><img src={de1} alt=""/></li>
  <li> <img src={de2} alt=""/></li>
  <li> <img src={de3} alt=""/></li>
  <li> <img src={de4} alt=""/></li>
  <li> <img src={de5} alt=""/></li>
  <li> <img src={de6} alt=""/></li>
  <li> <img src={de7} alt=""/></li>
  </ul>
  </div>

  </div>

  </div>

  </section>
  <section className="p-y-100">
  <div className="container">
  <div className="row">
  <div className="col-lg-10">
  <h1 className="mb-4">FinTech and DeFi companies rely on us for tailored financial solutions</h1>
  <p className="">FinTech is the focus of Ment Fintech. We assist with the launch and validation of FinTech startups from both the business and technical perspectives. The team at Ment Fintech brings together people who have a robust background in FinTech and have launched their own Neobanks in Europe. Finance technology automates business processes that would otherwise be time-consuming and costly. As a Fintech company that has developed over 300 projects both on mobile and web platforms in the past seven years, we provide you with the best and most innovative financial tech solutions available today. Creating your own Fintech product or service can seem daunting and we are familiar with the key issues that arise.</p>

  </div>

  </div>
  <div className="p-y-100 securty-block-4">
  <div className="row">
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <img src={v1} alt=""/>
            <h3 className="mt-4">Integrated development</h3>
            <p className="">As part of our software development process, Ment Fintech will assist and guide you throughout each stage.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <img src={v2} alt=""/>

            <h3 className="mt-4">Allocating Dedicated Teams</h3>
            <p className="">This is your chance to work with a team of experienced FinTech developers with over seven years of expertise, who will dedicate 100% of their time to your project.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={v3} alt=""/>
            <h3 className="mt-4">DevOps</h3>
            <p className="">We propose a robust methodology for active integration of operational and development parts of the team.</p>
            </div>
         </div>
         <div className="col-lg-3  mb-4">
         <div className="box-shadow-card p-3">
         <img src={v4} alt=""/>
            <h3 className="mt-4">Financial Technology Consulting</h3>
            <p className="">We will analyze your business's needs and talk about the solutions you could use to make the project a success based on that assessment.</p>
            </div>
         </div>
      </div>
</div>
  </div>
  <div className="container">
  <div className="row ">
  <div className="col-lg-12">
  <h1>Fintech development requires the right approach and we know it best</h1>


  </div>

  </div>
  
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="row m-5">
                    <div className="col-lg-3">
                        <div className="payments">
                            <Nav variant="pills" className="">
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="first">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={b2} alt=""/>
                               
                                <div> Making payments</div></div>
                             </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="second">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={b3} alt=""/><div>Banking on the go</div></div></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="third">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={b4} alt=""/>
                                <div>Investments & Savings</div>
                                </div>
                                 </Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </div>
                            </div>

                           <div className=" col-lg-3">    
                         
                        <div className="payments">
                            <Nav variant="pills" className="">
                                <Nav.Item className=" d-flex w-100">
                                <Nav.Link eventKey="forth">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={b5} alt=""/><div>RegTech, AML</div></div></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="fifth">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={b6} alt=""/><div>Open Banking</div></div></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                               
                                <Nav.Link eventKey="six">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={b7} alt=""/>
                                <div>Escrow</div>
                                </div>
                                </Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                            </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                            <div className="text-left ">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h2>Developing and integrating payment gateways</h2>
                                        <p>Is your marketplace, bank, or financial institution looking for a safe and stable payment method?</p>
                                        <p>Integration of such a nature is possible with our help. Depending on your requirements, we'll add your website with all the necessary modules at the right time. In spite of a high load, its stable and fast work will satisfy you.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2>Apps for mobile banking</h2>
                                        <p>We develop innovative UI-UX interfaces for mobile banking applications. Give your clients the best experience with today's technology. Create easy-to-use and easy-to-manage tools for managing their finances on their phones.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2>Applications for investing and saving</h2>
                                        <p>A comprehensive bank payment management solution can be built by the Ment Fintech team by leveraging fintech expertise. We can assist you at every stage of the development process starting with idea validation, whether you want to create a platform for saving or investing in green bonds.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <h2>RegTech, KYC & AML Solutions</h2>
                                        <p>RegTech solutions help you establish clear relationships with regulators. KYC & AML solutions allow you to know your customers as well as their responsibilities when it comes to protecting your business. With our solutions, we'll help you enhance your bank's infrastructure while offering safe modules. Or we can fully customize your bank's infrastructure.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <h2>Open Banking Solutions</h2>
                                        <p>Open Banking API can be used to your advantage. Our developer team is prepared to provide you and your partners with open systems that allow high-speed, secure, and open data exchange by API. We provide flexible, safe, and cost-effective solutions that generate results.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <h2>Platforms for escrow and invoicing</h2>
                                        <p>With Ment Fintech, you can build a multi-functional platform that meets all the requirements of a modern accounting system. Easily automate the escrow and invoice generation processes. Enhance your company's financial efficiency by adding Fintech solutions.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                            </div>
                       
                    </div>
            </Tab.Container>

  </div>

 

  </section>
  <section className="p-y-100 blue-bg">
  <div className="container">
  <div className="row align-items-center">
  <div className="col-lg-7 text-white">
  <h2>We offer FREE FinTech consultations</h2>

  </div>
   <div className="col-lg-5">
   <a  href="/contact-us" type="submit"  className="btn btn-primary float-right">Get in Touch</a>

   </div>
  </div>

  </div>

  </section>
  <section className="p-y-100 rins">
  <div className="container">
  <div className="row align-items-center">
  <div className="col-lg-9 text-white text-left">
  <h1>The work we do</h1>
  <details>
  <summary>
  Configuration of the architecture and environment 
  
  </summary>
  <p className="thes">You can rely on us to create the right architecture and environment for your product based on the requirements of your business. As Ment Fintech, we specialize in developing complete software packages based on blockchain-based databases, user-friendly interfaces, and workable, secure business logic components. Your products will be guided through all necessary iterations and will be deployed appropriately based on the tech description.</p>
</details>
 <details>
  <summary>
  Consultations and integrations with third parties
  </summary>
  <p className="thes">Is there a platform or application you need to integrate? Client-server architecture between your and third-party products is used to integrate the technical properties of your product. Synchronizing requests and answers should be possible between your modules and third-party modules. <br/>
  <br/>Additionally, we can provide you with a business description of the methods and solutions that will meet your requirements. In our team, we will use blockchain technology to develop a secure, profitable, and user-friendly system.</p>
</details>
 <details>
  <summary>
  Implementation and monitoring
  </summary>
  <p className="thes">After the release of your product, you are only at the beginning of its life cycle. Your product is monitored and supported 24/7/365 by Ment Fintech. We will help you regularly update and continuously improve your FinTech environment using our knowledge and skills. Because of this, you will always provide your clients with the most convenient and innovative services, and you will be one step ahead of your competitors.</p>
</details>
 <details>
  <summary>
  The idea to release process
  </summary>
  <p className="thes">Our development process is based on "from idea validation to release.". We follow the entire development process from start to finish. A detailed description of each step will be included in the tech requirements. Every phase of work will be monitored by you, you will get the MVP after each iteration, and you will be able to receive your feedback. To achieve the desired result, our team will work on all the necessary tasks. Your product will then be released as per your specifications.</p>
</details>
  </div>
  
   <div className="col-lg-3 text-center">
<img src={x1} alt=""/>

   </div>
  </div>

  </div>
</section>
 <section className="p-y-100 blue-bg">
  <div className="container">
  <div className="row">
  <div className="col-lg-7 text-white">
  <h1>We have Fintech experts at your disposal</h1>

  </div>
   <div className="col-lg-5">
   <a href="/contact-us" className="btn btn-primary float-right">Get in Touch</a>

   </div>
  </div>

  </div>

  </section>

<LetsTalk/>
<Footer/>
<CopyRight/>
</section>
</>
);
};
export default Fintechsoftware;

