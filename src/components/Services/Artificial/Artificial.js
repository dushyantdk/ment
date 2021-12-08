import React from "react";
import Tabs from "react-bootstrap/Tabs";
import { Nav, Tab } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import CopyRight from "../../Footer/CopyRight";
import Navigation from "../../Header/Navigation/Navigation";
import LetsTalk from "../../LetsTalk/LetsTalk";
import ai from "../../../assests/images/ai.svg";
import de1 from "../../../assests/images/de1.png";
import de2 from "../../../assests/images/de2.png";
import de3 from "../../../assests/images/de3.png";
import de4 from "../../../assests/images/de4.png";
import de5 from "../../../assests/images/de5.png";
import de6 from "../../../assests/images/de6.png";
import de7 from "../../../assests/images/de7.png";
import r1 from "../../../assests/images/r1.svg";
import r2 from "../../../assests/images/r2.svg";
import r3 from "../../../assests/images/r3.svg";
import r4 from "../../../assests/images/r4.svg";
import r6 from "../../../assests/images/r6.svg";

import r5 from "../../../assests/images/r5.svg";

import x1 from "../../../assests/images/x1.png";
import e1 from "../../../assests/images/e1.svg";
import e2 from "../../../assests/images/e2.svg";
import e3 from "../../../assests/images/e3.svg";
import e4 from "../../../assests/images/e4.svg";

const Artificial = () => {
    return (
        <>
<section className="innerfooter">
  
  <section className="pt-5 fintechs blue-bg">
  <Navigation/>
  <div className="container">
  <div className="row align-items-center p-y-100">
  <div className="col-lg-6 text-white">
  <h1 className="mt-4">Development of AI & Machine Learning </h1>
  <p className="mt-4">A simplified big data platform and modern analytics help us develop innovative solutions. You can choose from a wide variety of services with our AI and ML system.</p>
  <a href="/contact-us" type="submit"  className="btn btn-primary mt-4"> Let's Talk</a>
  </div>
  <div className="col-lg-6 mt-5">
  <img className="fintech"src={ai} alt=""/>

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
  <h1 className="mb-4">Our Expertise</h1>
  <p className="">Automating business processes is one of our services. Experts in data science and analytics are part of our team. Technologies such as these are valuable because they provide insight into the future by analyzing past and current data. Our specializations include building and maintaining web applications for machine learning, mobile applications, and cloud platforms for companies of all sizes. We assist companies with adopting innovative technologies by implementing effective business processes.</p>

  </div>

  </div>
  <div className="p-y-100 securty-blocks-6">
  <div className="row">
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            <img src={e1} alt=""/>
            <h3 className="mt-4">Data Analytics</h3>
            <p className="">By utilizing data visualization you will expand your business with the help of our experts. You can use it to understand the value of your data. An example of a data visualization is a pie chart, graph, or other visual representation of information. These results will be used to boost your company's performance. </p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
            <div className="box-shadow-card p-3">
            
            <img src={e2} alt=""/>
            <h3 className="mt-4"> Anomaly Detection </h3>
            <p className="">Anomalies in the database and signs of system failure can be detected using AI and ML technologies. The program is customized for your company so that anomalies in your company's data are automatically detected.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={e3} alt=""/>
            <h3 className="mt-4">Predictive Analytics</h3>
            <p className="">You can automate operations and improve process efficiency with predictive analytics for business processes. In these analytics, a company's details are taken into account to the maximum.</p>
            </div>
         </div>
         <div className="col-lg-3 mb-4">
         <div className="box-shadow-card p-3">
         <img src={e4} alt=""/>
            <h3 className="mt-4">Customization</h3>
            <p className="">Automating your business tasks is possible with personalization. Arrays are analyzed in real time with personalization. It offers full analysis of the product in real-time, so you can correct any shortcomings if necessary.</p>
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
  <h1>Our services include:</h1>


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
                                <img width="22%" className="riu" src={r1} alt=""/>
                               
                               <div> Improvement of business processes</div>
                               </div>
                             </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="second">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={r2} alt=""/>
                                <div> Making Smart Decisions</div>
                               </div>
                               </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="third">
                                <div className="d-flex">
                                <img width="22%" className="riu" src={r3} alt=""/>
                                <div>Personalization of products and services</div>
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
                               <img width="22%" className="riu" src={r4} alt=""/>
                               <div> Customer Service Enhancement</div>
                               </div>
                               </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="fifth">
                                <div className="d-flex">
                                <img width="15%" className="riu" src={r5} alt=""/>
                                <div> DevOps Empowerment</div>
                               </div>
                               </Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item className="d-flex w-100">
                                <Nav.Link eventKey="six">
                                <div className="d-flex">
                                <img width="22%" className="riu" src={r6} alt=""/>
                                <div> Co-Development & Consulting</div>
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
                                        <h2>Improvement of business processes</h2>
                                        <p>The use of innovative technology will be made possible with our help. Basically, AI, ML, and data analytics will make it easier for the company to do its work effectively and efficiently. We aim to deliver a new, enterprise-wide initiative to boost organizational productivity. This will increase workplace safety and productivity. This will be achieved by our experts who have more than 10 years of experience analyzing business models. After a full scan, weaknesses will be identified and optimized. Consequently, you will be able to reach a higher level of success with the above technologies.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h2>Making Smart Decisions</h2>
                                        <p>Analytics and predictive analytics can be used to help us make smart business decisions by helping us analyze business processes in a complete manner. Smart Solutions' service combines analytical capabilities, expert industry knowledge, and operations design expertise.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h2>Personalization of products and services</h2>
                                        <p>By applying machine learning to data analysis, we are able to target products or services to a specific audience. A fully satisfying user experience is our goal. Taking advantage of new technology helps clients streamline their business processes.
 
 </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="forth">
                                        <h2>Customer Service Enhancement</h2>
                                        <p>We use AI / ML technology to improve the customer experience on all of our products and services. This service contributes to increased profits and customer satisfaction.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <h2>DevOps Empowerment</h2>
                                        <p>A DevOps practice aims to deliver continuous value to customers by bringing together people, processes, and technology. In order to create better, more reliable products, DevOps helps you coordinate and collaborate. Teams are empowered to better meet customer needs by implementing appropriate methodologies and tools along with DevOps. In addition, you can also create applications that are more credible and accomplish your business goals faster.
 
 </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <h2>Co-Development & Consulting</h2>
                                        <p>Our company advises clients so they can make positive changes to their business. We offer expert assistance on specific technical issues and aspects of organizational change through the use of our many years of experience. Utilizing modern AI technologies, ML Development, and data analytics, our company focuses on identifying and solving existing problems.</p>
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
  <h2>We need to talk about the feasibility of implementing blockchain</h2>

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
  <h1>Q AND A</h1>
  <details>
  <summary>
  Why should you hire MENT FINTECH to develop AI/ML?
  
  </summary>
  <p className="thes">From the development of applications based on artificial intelligence and machine learning to the analysis, formalization and implementation of the requirements, we provide a full range of services.</p>
  <p className="thes">Clients have the option of both individual services and strategic partnerships that imply an integrated approach - from understanding requirements to outsourcing.

</p>
  <p className="thes">For work, we deploy models quickly using open source software and our own servers. The customer deploys the models later. A model can sometimes be developed entirely on the customer's premises. That depends on the nature of the business and the tasks to be performed.</p>
  <p className="thes">In addition to analyzing large amounts of data, data science solutions determine how new data will be processed, sorted, fetched, and searched for.</p>
  <p className="thes">Data science and data analysis are valuable because human brains are not always able to recognize patterns where machines are usually able to. Our company is working towards helping several industries reach new heights in this way.</p>
</details>
 <details>
  <summary>
  How can your product service be more personalized?
  </summary>
  <p className="thes">By utilizing modern artificial intelligence, machine learning, and analytics technologies, we tailor the business to the needs of the audience. </p>
  <p className="thes">Technology helps businesses adapt their business practices, such as changing the price of goods and services based on the clients' perceptions and ability to purchase them.</p>
  <p className="thes"> 

  Using machine learning, a product or service's price elasticity boundaries can be determined with regard to supply and demand.</p>
 <p className="thes">Our experts are also developing relevant content. Our ML technology can provide you with a version of your website that is highly effective in grabbing your visitors' attention and leading to targeted actions.</p>
 <p className="thes">In addition, we use both machine learning technology and highly qualified specialists to anticipate the behavior of potential buyers. Predicting when and why prospective clients contact a company is one way ML works. We can use this to plan for technical support costs and personalize the user experience.</p>
</details>
 
 <details>
  <summary>
  What are the benefits of data analytics for your business?
  </summary>
  <p className="thes">Analyzing data helps us plan better strategies and work more effectively.

</p>
  <p className="thes">We tailor your business to meet your needs. Analytics work begins with reporting. Through the analysis of data, we are able to make intelligent decisions. Our team uses this method more often than any other for data analysis.</p>
  <p className="thes">Advanced analysis is also carried out by us. This enables us to examine the data on a broader level. We will now be able to analyze data in a way that we couldn't see before, with the help of this technology. Therefore, we can predict the locations and behaviors of the highest-value customers. We conduct a thorough audit of your company with the help of data analysis.</p>
  </details>
  <details>
  <summary>
  How do you ensure the security of your data?
  </summary>
  <p className="thes">An artificial intelligence-based data security system has been created.</p>
  <p className="thes">In order to implement effective information security systems, we must consider our principles.</p>
  <p className="thes">Confidentiality. The data, assets, and information of the company are safeguarded with effective controls. Through the use of artificial intelligence, our specialists have developed an application that allows the transmission of information, regardless of the format, with maximum confidentiality.</p>
  <p className="thes">Additionally, our security controls ensure that information is internally and externally consistent. By using this technology, business operations are protected from data corruption.</p>

 </details>
  <details>
  <summary>
  Are we specialized in any particular industry?
  
  </summary>
  <p className="thes">Blockchain is one of our specialties. A financial institution or organization can offer the most transparent and effective products to its customers by utilizing this technology.</p>
  <p className="thes">Our company also provides FinTech software solutions. DeFi and FinTech solutions are part of our financial services.</p>
  <p className="thes">Our company provides platforms for tokenization as well. Blockchain technology has enabled us to access the widest range of investment opportunities ever in the crypto industry. In many business sectors, tokenization is becoming a breakthrough method of digitizing assets.</p>
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

  Interested in AI or machine learning? Let's discuss
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
export default Artificial;

