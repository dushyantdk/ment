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
import w1 from "../../../assests/images/w1.svg";
import w2 from "../../../assests/images/w2.svg";
import w3 from "../../../assests/images/w3.svg";
import w4 from "../../../assests/images/w4.svg";

import w5 from "../../../assests/images/w5.svg";

import x1 from "../../../assests/images/x1.png";
import q1 from "../../../assests/images/q1.svg";
import q2 from "../../../assests/images/q2.svg";
import q3 from "../../../assests/images/q3.svg";
import q4 from "../../../assests/images/q4.svg";

const Blockchaindevelopment = () => {
    return (
        <>
<section className="innerfooter">
  
  <section className="pt-5 fintechs blue-bg">
  <Navigation/>
  <div className="container">
  <div className="row align-items-center p-y-100">
  <div className="col-lg-6 text-white">
  <h1 className="mt-4">Developers of blockchain technology</h1>
  <p className="mt-4">Development and consulting for blockchain startups and enterprises</p>
  <a href="/contact-us" type="submit"  className="btn btn-primary mt-4"> Talk to our Blockchain Expert </a>
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
  <h1 className="mb-4">Our blockchain experience spans 7+ years</h1>
  <p className="">Over the past 10 years, we have helped startups, banks, and financial institutions. Our company is what you need if you are ready to integrate innovative technologies and transform your business. With more than 30 projects to their credit, our fintech and blockchain specialists can turn any project idea into reality. Let us help you build your own blockchain solution. We create exchange platforms, payment apps, and self-executing contracts. Through our partnership with Ment Fintech you will be able to benefit fully from the benefits of the blockchain technology and its decentralized network.</p>

  </div>

  </div>
  <div className="p-y-100 securty-blocks-5">
  <div className="row">
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <img src={q1} alt=""/>
            <h3 className="mt-4">Ecosystems based on blockchains</h3>
            <p className="">Cryptocurrency trading apps, which support transparent and immutable financial transactions, are part of our blockchain ecosystems. </p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            
            <img src={q2} alt=""/>
            <h3 className="mt-4">Tokenization of assets</h3>
            <p className="">Tokenize the proprietary rights or transaction elements of your enterprise and create secure, digitized tokens.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={q3} alt=""/>
            <h3 className="mt-4">Decentralized applications</h3>
            <p className="">Using web design or a front-end and domain logic, we develop Dapps combining interdependent smart contracts.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={q4} alt=""/>
            <h3 className="mt-4">Blockchain Consultancy</h3>
            <p className="">By analyzing statistical data of your company's profile, we provide expert blockchain consulting in conjunction with innovative blockchain solutions.</p>
            </div>
         </div>
      </div>
</div>
  </div>
  </section>
  <section>
  <div className="container set">
  <div className="row">
  <div className="col-lg-12">
  <h1>Any domain can benefit from full-cycle blockchain development</h1>


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
                                <img width="15%" className="riu" src={w1} alt=""/>
                               
                               <div>Smart Contracts</div>
                               </div>
                             </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="second">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={w2} alt=""/>
                                <div>Supply Chain</div>
                                </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="third">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={w3} alt=""/>
                                <div>DEX </div>
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
                                <img width="15%" className="riu" src={w4} alt=""/>
                                <div>Custom Networks </div>
                                </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="fifth">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={w5} alt=""/>
                                <div>eWallets </div>
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
                                        <h2>Smart Contracts Development</h2>
                                        <p>We will design and develop smart contracts at a high level for you. As a part of our partnership, you will also receive smart contracts integrated into the business process in order to ensure that the terms of the agreements are kept. </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2>Supply Chain</h2>
                                        <p>Developing a blockchain supply chain can provide your company with complete transparency and security during product distribution. Using our system, we'll eliminate many issues such as hidden or delayed information, high costs, forgeries, and incorrect database entries. We will verify and secure all assets.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2>High-Performance Decentralized Exchange</h2>
                                        <p>By collaborating with us, you can design and develop the most up-to-date platform or application to provide your clients with all the latest information on cryptocurrency exchanges. We will provide real-time access to the process of decentralized exchange. By doing so, your customers will have an easier time managing their digital currency assets.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <h2>Custom Networks</h2>
                                        <p>Let's improve the productivity of your database and make it as easy as possible to manipulate and process. Custom Network ensures your data is safe and secure. Custom networks can be tailored to meet the demands of specific infrastructures.
 
 </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <h2>eWallets</h2>
                                        <p>We intend to create a well-equipped and secure eWallet system utilizing blockchain technology. Our eWallet applications form the backbone of Ment Fintec Labs' special applications. eWallet data includes financial data as well as other statistical data.</p>
                                    </Tab.Pane>
                                   
                                </Tab.Content>
                            </div>
                            </div>
                       
                    </div>
            </Tab.Container>
          
  </div>

  </section>
  <section className=" p-y-100 blue-bg">
  <div className="container">
  <div className="row align-items-center">
  <div className="col-lg-8 text-white">
  <h2>Get the FREE Blockchain Consulting right now</h2>

  </div>
   <div className="col-lg-4">
   <a href="/contact-us" type="submit"  className="btn btn-primary float-right">Get in Touch</a>

   </div>
  </div>

  </div>

  </section>
  <section className="p-y-100 rins">
  <div className="container">
  <div className="row align-items-center">
  <div className="col-lg-9 text-white text-left">
  <h1> Our services</h1>
  <details>
  <summary>
  Blockchain Consultancy
  
  </summary>
  <p className="thes">Blockchain-based financial products will provide your organization or financial institution with transparency and efficiency. With the help of Ment Fintech, you can achieve your goals by implementing and integrating all the necessities. By connecting all the remote tools together, we can create one database without one managing center, and secure your system. Accessible information makes it impossible to hide or alter records, which contributes to transparency. Our complex analysis enables us to answer more questions for you. Our assistance will also include adapting your company's network to work with blockchain technology.</p>
</details>
 <details>
  <summary>
  Development of enterprise blockchains
  </summary>
  <p className="thes">The multidirectional nature of blockchain technology makes it valuable. Among the fields in which it is used are finance, digital media, energy, information technology, and many more. We are equipped to develop a wide variety of blockchain solutions with the help of our highly skilled team. Retail, supply chain, automotive manufacturing, logistics, and others will be made more productive, effective, and complex.</p>
 
</details>
 <details>
  <summary>
  Upgrades and migrations
  </summary>
  <p className="thes">Using cloud migration, companies can migrate their databases, assets and applications to the cloud. The goal is to modernize services in general. Flexibility and agility are improved, instant business results are delivered, and service costs are decreased.<br/><br/> We can provide the option of upgrading the database of your app if you wish. Our goal at MENT FINTECH is to make your app meet all the modern demands.</p>
 
 </details>
 <details>
  <summary>
  Technology and User Experience
  </summary>
  <p className="thes">Providing you with functional features and a user-friendly interface are important elements of UX and Technical Design. They help startups succeed on the market. Your business needs good UX design in order to reduce the effort your customers have to make every day. We'll create a user experience that is straightforward and highly efficient. The feedback system will keep you in touch with your customers. Your design will always be current.</p>
  
  </details>
  <details>
  <summary>
  Building a custom blockchain application
  
  </summary>
  <p className="thes">By utilizing blockchain technology and reducing operational costs, MENT Fintech implements new projects on both public and private blockchain networks. As an app developer, we use the most effective system to protect our users' privacy. The system is fast and offers dynamic permissions for users. To test the app, our team analyzes the idea step by step. Therefore, you'll end up with a product with an intuitive design and a good architecture.</p>
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
  <div className="row align-items-center">
  <div className="col-lg-8 text-white">
  <h2>

Talk to our Blockchain Consultant for FREE
</h2>

  </div>
   <div className="col-lg-4">
   <a href="/contact-us" type="submit"  className="btn btn-primary float-right">Get in Touch</a>

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
export default Blockchaindevelopment;

