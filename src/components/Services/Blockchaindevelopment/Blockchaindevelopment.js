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
  <h1 className="mt-4">Blockchain Development Company</h1>
  <p className="mt-4">Blockchain Consulting and Development for Startups and Enterprises</p>
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
  <h1 className="mb-4">We bring 10+ years of blockchain expertise to your project</h1>
  <p className="">We’ve been helping startups, banks, and financial institutions for more than 10 years. If your organization is ready to implement innovative technologies and move towards digital transformation, our company is what you need. Our fintech and blockchain specialists developed more than 200 projects and know how to turn your project idea into reality. We are ready to build blockchain solutions according to your needs. From developing self-executing contracts and eWallets to creating exchange platforms and payment apps. Cooperating with 4ire Labs, you will get the full range of benefits of blockchain technology and its decentralized network.</p>

  </div>

  </div>
  <div className="p-y-100 securty-blocks-5">
  <div className="row">
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <img src={q1} alt=""/>
            <h3 className="mt-4">Blockchain Ecosystems</h3>
            <p className="">We create blockchain ecosystems, including apps for trading cryptocurrency that support transparent and immutable financial operations. </p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            
            <img src={q2} alt=""/>
            <h3 className="mt-4">Assets Tokenization</h3>
            <p className="">With our tokenization platform, you can easily make secure and digitized tokens out of your proprietary rights or transaction elements.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={q3} alt=""/>
            <h3 className="mt-4">Decentralized Apps</h3>
            <p className="">We develop Dapps for combining interdependent smart contracts linked by web design or frontend and domain logic.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={q4} alt=""/>
            <h3 className="mt-4">Blockchain Consulting</h3>
            <p className="">We offer expert blockchain consulting based on statistical data of your company’s profile while implementing innovative blockchain solutions.</p>
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
  <h1>Full-cycle blockchain development for any domain</h1>


  </div>

  </div>
  
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="row m-5">
                    <div className="col-lg-3">
                        <div className="payments">
                            <Nav variant="pills" className="">
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="first">
                                <img width="15%" className="riu" src={w1} alt=""/>
                               
                                Smart Contracts
                             </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="second">
                                <img width="15%" className="riu" src={w2} alt=""/>Supply Chain</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="third">
                                <img width="15%" className="riu" src={w3} alt=""/>DEX</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </div>
                            </div>

                           <div className=" col-lg-3">    
                         
                        <div className="payments">
                            <Nav variant="pills" className="">
                                <Nav.Item className=" d-flex w-100">
                                <Nav.Link eventKey="forth">
                                <img width="15%" className="riu" src={w4} alt=""/>Custom Networks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="fifth">
                                <img width="15%" className="riu" src={w5} alt=""/>eWallets</Nav.Link>
                                </Nav.Item>
                                
                               
                               
                                
                            </Nav>
                            </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                            <div className="text-left ">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h2>Smart Contracts Development</h2>
                                        <p>Our company will provide you with a high-level of smart contract design and development service. Cooperating with us, you will also get smart contracts implemented into the business process to ensure keeping terms of the agreements executions.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2>Supply Chain</h2>
                                        <p>If you want to distribute your products with full transparency and security, you should consider blockchain supply chain development. Our team will design a clear system that will exclude numerous issues such as delayed or hidden information or records, high costs, forgery, database errors, and many others. All assets and properties will be verified and secured.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2>High-Performance Decentralized Exchange</h2>
                                        <p>Our development team can design a platform or application that will provide your clients with all the up-to-date information about cryptocurrency exchange. The process of decentralized exchange will be accessible in real-time. This way, your customers will be able to manage their digital currency assets more efficiently.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <h2>Custom Networks</h2>
                                        <p>Let's make your database more productive and create the best conditions for its processing and manipulation. Custom Network can ensure that you will be well-trusted and secured. We can adapt your blockchain networks according to the necessary needs of specific infrastructure.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <h2>eWallets</h2>
                                        <p>Using blockchain technology, we will develop a fully-equipped and well-secured system of eWallet. 4ire Labs designs special applications that work as eWallets containing all assets. It will include information about financial activity and other data.</p>
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
  <h1>What we do</h1>
  <details>
  <summary>
  Blockchain Consulting
  
  </summary>
  <p className="thes">Using blockchain technology, your organization or financial institution will be able to provide customers with the most transparent and effective products. 4ire Labs will help to implement and integrate all the necessities to achieve your goals. We can make your system secured with a server that connects remote tools and creates a single database without one managing center. Transparency appears due to information accessibility which makes hiding or changing records impossible. With a complex analysis, we are ready to answer more of your questions. It also includes our support with adapting your company’s network to the blockchain requirements.</p>
</details>
 <details>
  <summary>
  Enterprise Blockchain Development
  </summary>
  <p className="thes">Blockchain technology is valued for its multi-directional approach. It is used for companies that operate in the fields of finance, digital media, energy, informational technology, and others. Our high-skilled team is ready to provide you with the development of a wide range of blockchain solutions. We will create an effective, productive, and complex system for retail, supply chain, automotive manufacturing, logistics, etc.</p>
 
</details>
 <details>
  <summary>
  Migration and Upgrades
  </summary>
  <p className="thes">Cloud migration helps to move company resources including databases, assets, and applications to the cloud. This process is about the general modernization of services. It increases flexibility and agility, delivers immediate business results, and decreases the cost of services. If you want your app’s database to have the capabilities for being upgraded, we can provide you with this option. 4ire Labs will create the best conditions for making your app suit all the modern requirements.</p>
 
 </details>
 <details>
  <summary>
  User Experience and Technical Design
  </summary>
  <p className="thes">UX and Technical Design aim to provide you not only with functional features, but also a pleasant and user-friendly interface. It is what makes the startup competitive in the market. Good UX design is necessary for your business as it reduces your customers’ everyday efforts. We will develop a solid and good-looking UX design that will be simple in use and highly effective. You will be able to keep in touch with your customers via the system of feedback. Our design is always up-to-date. </p>
  
  </details>
  <details>
  <summary>
  Custom Blockchain App Development
  
  </summary>
  <p className="thes">4ire Labs deploy new projects on public and private blockchain networks, reduces operational costs, and eliminates any centralized points of failure. We develop apps that use the up-to-date system of protecting users’ privacy. They feature high processing and confirmation speed and dynamic account permission. Our team goes step by step from analyzing the idea to testing the app. Due to this, you will get the product with good architecture and simple intuitive design.</p>
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

