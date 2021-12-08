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
import F12 from "../../../assests/images/F12.svg";
import F6 from "../../../assests/images/F6.svg";
import F19 from "../../../assests/images/F19.svg";
import F13 from "../../../assests/images/F13.svg";

import F14 from "../../../assests/images/F14.svg";
import F15 from "../../../assests/images/F15.svg";
import x1 from "../../../assests/images/x1.png";
import y1 from "../../../assests/images/y1.svg";
import y2 from "../../../assests/images/y2.svg";
import y3 from "../../../assests/images/y3.svg";
import y4 from "../../../assests/images/y4.svg";

const Consultingservice = () => {
    return (
        <>
<section className="innerfooter">
   
  <section className="pt-5 fintechs blue-bg">
  <Navigation/>
  <div className="container">
  <div className="row align-items-center  p-y-100">
  <div className="col-lg-6  text-white">
  <h1 className="mt-4">Advisory Services</h1>
  <p className="mt-4">By using our ten-year expertise, we can remove your IT operations' pain points.</p>
  <a href="/contact-us" type="submit"  className="btn btn-primary mt-4"> Lets Talk </a>
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
  <h1 className="mb-4">Our Specialties</h1>
  <p className="">Our fintech products and solutions have been developed for multiple businesses ranging from startups to financial firms for over 10 years now. Aside from blockchain solutions for the financial sector, we also develop exchanges and trading infrastructure, and multisignature wallets. Through comprehensive research, we deliver solutions that are highly efficient.</p>

  </div>

  </div>
  <div className="p-y-100 securty-blocks-4">
  <div className="row">
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <img src={y1} alt=""/>
            <h3 className="mt-4">Technological Discovery</h3>
            <p className="">From the setup or revision of an existing system to the creation of a brand new one - we can help with any project using the latest technologies. Your project will be handled by a team of architects and business analysts with vast experience. </p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            
            <img src={y2} alt=""/>
            <h3 className="mt-4">Consultancy Services</h3>
            <p className="">Adapting to today's marketplace is our business consulting service's goal. Your business can make better decisions when you optimize and automate your processes. New technologies are being actively used to introduce business changes and we can help you with that.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={y3} alt=""/>
            <h3 className="mt-4">Provider of CTO services</h3>
            <p className="">Business process and IT strategy optimization is one of the services we offer to Fintech companies of all sizes. Our knowledgeable advisors will help you select the ideal tech stack, detect potential risks, and develop a solution.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={y4} alt=""/>
            <h3 className="mt-4">Using Design Sprints</h3>
            <p className="">The Design Sprint is an innovative method of proving ideas and finding solutions to problems that might arise with your product. This rapid entry into the market allows for the creation of new or improved products in a matter of days. It is nowadays one of the most efficient ways to go to market quicker.</p>
            </div>
         </div>
      </div>
</div>
  </div>
  </section>
  <section className="p-y-100 set rins">
  <div className="container">
  <div className="row align-items-center">
  <div className="col-lg-9 text-white text-left">
  <h1>QA</h1>
  <details>
  <summary>
  What are the advantages of a Fintech advisory service from Ment Fintech?
  
  </summary>
  <p className="thes">Fintech, Green Finance, and DeFi are all areas in which we have vast experience. The team includes experts who have built neobanks and collaborated with Mastercard. The company is also a certified integration partner of the NEAR Protocol and Chromia blockchain. We distinguish ourselves from other consulting firms with years of experience and domain knowledge. By increasing company efficiency and employee productivity, we increase the overall performance of our company.<br/><br/>
  As part of our services, we analyze and assess business processes, provide consulting on a host of issues associated with customer interest as well as market dynamics, conduct enterprise audits, and develop strategic plans. </p>
</details>
 <details>
  <summary>
  How can we help you with your IT needs?
  </summary>
  <p className="thes">In order to optimize business processes, modern information technology can be a useful tool. A service that we offer is IT consulting, which helps you objectively assess the effectiveness of the technologies you have selected. IT solutions can be analyzed in a comprehensive manner as well as in individual areas. Our experts can: </p>
  <ul>
      <li>Assess the IT infrastructure's vulnerabilities; </li>
      <li>Make sure that the hardware and software you select are optimal;</li>
      <li>Solve specific business problems with software products;</li>
      <li>Document flow optimization; data storage reliability;</li>
      <li>Secure your company's data and prevent unauthorized access.</li>
  </ul>
</details>
 <details>
  <summary>
  What are the benefits of CTO-as-a-Service?
  </summary>
  <p className="thes">Besides leading the team, the CTO is responsible for determining the company's technological needs, as well as its short- and long-term goals. To achieve business goals, CTOs also assist organizations in managing their capital investment well. The following are some of the goals that CaaS can help you achieve:</p>
 <ul>
     <li>Developing and assessing the IT strategy for evaluating the costs and timing of the introduction of new technologies;</li>
     <li>Business development platform proposals from experts;</li>
     <li>Assisting in the establishment of software quality standards. In this regard, coding agreements, documentation requirements, and quality assurance processes are important early in the process;</li>
     <li>Advice on technical issues.</li>
    
 </ul>
 </details>
 <details>
  <summary>
  Design Spring: what does it do?
  </summary>
  <p className="thes">In a design sprint, team members work together to create a prototype, test the concept with real users, and refine the vision of a product or feature over a five-day period. With Design Sprints, teams can quickly initiate creative processes and reach meaningful outcomes for their project or product. Here are some reasons why they are still important: </p>
  <ul>
      <li>Decide what the main idea is and unravel the problem.</li>
      <li>Invent a new idea. Make notes clearly about each key decision you make.</li>
      <li>Using testable hypotheses, you will make decisions.</li>
      <li>Develop a prototype. Put it to the test. See what real users have to say about it.</li>
  </ul>
  </details>
  <details>
  <summary>
  Our specializations include what industries?
  
  </summary>
  <p className="thes">Ment Fintech provides IT services and consulting in traditional banking, Fintech, DeFi, and Green Finance. The legal activities of a crypto-related business are a service we provide to our clients. For startups, banks, brokers, and exchanges, we offer comprehensive consulting services and support. We have developed FinTech solutions from scratch for various clients over the years.</p>
</details>
  </div>
  
   <div className="col-lg-3 text-center">
<img src={x1} alt=""/>

   </div>
  </div>

  </div>
</section>
  <div className="container">
  <div className="row mt-4 ">
  <div className="col-lg-12">
  <h2>Consultation Process</h2>


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
                                <img width="15%" className="riu" src={F12} alt=""/>
                               
                               <div>Finding</div>
                               </div>
                             </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="second">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={F19} alt=""/>
                                <div>Evaluation</div>
                                </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="third">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={F14} alt=""/><div>Plan & Concept</div>
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
                                <img width="15%" className="riu" src={F6} alt=""/>
                                <div>Assistance</div>
                                </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="fifth">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={F13} alt=""/>
                                <div>Planning & Design</div>
                                </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                               
                                <Nav.Link eventKey="six">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={F15} alt=""/>
                                <div>Integration</div>
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
                                        <h2>Finding</h2>
                                        <p>It is crucial that we come to an understanding at this early phase of communication, and we will strive to be as helpful as possible. In addition to analyzing your business plan, we evaluate the market and competitors, map the user journey, and suggest the best course of action to get you to your target.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2>Evaluation</h2>
                                        <p>At this point in the process, we'd like to have a good look at all the work you've done. In addition  you may want to document the scope, requirements, and processes of the project. What does it mean for us? Having a clear understanding of where to begin is crucial as the future partners.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2>Plan & Concept</h2>
                                        <p>Our team needs to develop a strategy and lay the groundwork before beginning to build your product. The time has come when we must decide on the technology stack we will use. Any changes or deviations in the future can have significant costs, so choosing the right infrastructure architecture is critical.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <h2>Assistance</h2>
                                        <p>Any product or service needs the loyalty and feedback of its users. In order to satisfy the client's needs and meet the expectations of the user, the project must be provided with expert technical support.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <h2>Planning & Design</h2>
                                        <p>Wireframes are schematic representations of your future design, and this step is about creating them. The structure of your product will become more clear and you will be able to comprehend it better. If you have suggestions on how to make the prototype better, our experts will be open to them.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <h2>Integration</h2>
                                        <p>Integration of projects ensures balance and consistency among all parts of a project. Any inconsistency will be corrected as quickly and efficiently as possible. Integrating a project is the final step of the process.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                            </div>
                       
                    </div>
            </Tab.Container>

  </div>

 

  
 
 <section className="p-y-100 blue-bg">
  <div className="container">
  <div className="row align-items-center">
  <div className="col-lg-7 text-white">
  <h2>Providing consulting services for your project</h2>

  </div>
   <div className="col-lg-5">
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
export default Consultingservice;

