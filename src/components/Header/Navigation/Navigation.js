import React, { useRef, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Modal, Button, Form, Col, Dropdown } from "react-bootstrap";
import HeaderLogo from "../../../assests/images/m-logo-white.svg";
import HeaderLogoblue from "../../../assests/images/m-logo-blue.svg";
import ph2 from "../../../assests/images/ph2.svg";
import * as yup from "yup";
import { Formik } from "formik";
import {useToasts} from "react-toast-notifications";
import t1 from "../../../assests/images/t1.svg";
import t2 from "../../../assests/images/t2.svg";
import t3 from "../../../assests/images/t3.svg";
import t4 from "../../../assests/images/t4.svg";
import IOffice from "../../../assests/images/contact/ireland1.jpg";
const Navigation = () => {
const [requestShow, setRequestShow] = useState(false);
const [sehduleShow, setSehduleShow] = useState(false);
const handleClose = () => {
setRequestShow(false);
setSehduleShow(false)
};
const handleRequestShow = () => setRequestShow(true);
const handleSehduleShow = () => setSehduleShow(true);
const { addToast } = useToasts();
const navbarRef = useRef();
useEffect(() => {
window.addEventListener("scroll", handleScroll);
return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);
const handleScroll = () => {
if (window.scrollY > 20) {
navbarRef.current.classList.add("scroll");
} else {
navbarRef.current.classList.remove("scroll");
}
};
const scheduleSchema = yup.object({
name: yup
.string()
.required("name is required")
.min(3, "name must be minimum of 3 characters")
.max(50, "name can be maximum 8 characters long"),
email: yup
.string()
.email("Invalid Email")
.required("Email is required")
.email("Please Enter A Valid Email Address"),
phone: yup
.string()
.required("Mobile Number is required")
.min(10, "Please Enter A Valid Mobile Number For Verification")
.max(15, "Please Enter A Valid Mobile Number For Verification")
.matches(
/^\d*\.?\d*$/,
"Please Enter A Valid Mobile Number For Verification"
),
company_name: yup
.string()
.required("Company name is required")
.min(3, "Company name must be minimum of 3 characters"),
message: yup
.string()
.min(3, "Message must be minimum of 3 characters"),
});
const userFormInitialValues = {
name: "",
email: "",
phone: "",
company_name: "",
message: "",
};
const handleUserSubmit = (values) => {
fetch(`http://localhost/api`, values)
.then(response => {
addToast("Form Submitted", {
appearance: "success",
autoDismiss: true,
});
})
.catch(error => {
addToast("Something went wrong", {
appearance: "error",
autoDismiss: true,
});
})
}
return (
<>
<Navbar
   id="navbar"
   className="navbar navbar-expand-lg customize-nav bg-none fixed-top navbar-light"
   expand="lg"
   ref={navbarRef}
   >
   <div className="container wide-block">
      <Navbar.Brand href="/">
         <img className="img-fluid white-logo" src={HeaderLogo} alt="Logo" />
         <img
            className="img-fluid blue-logo"
            src={HeaderLogoblue}
            alt="Logo"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="ml-auto header-nav">
            <NavDropdown
               title="Products"
               id="basic-nav-dropdown"
                className="services-nav-mobile"
               >
               <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100">
                     {/* 
                     <div className="dropdown-header">Development</div>
                     */}
                     <a className="dropdown-item" href="/crypto-exchange-turnkey-solution">
                     <img className="ph2" src={ph2} alt="..."/>
                     Cryptocurrency Exchange Turnkey
                     </a>
                     <a className="dropdown-item" href="/cryptocurrency-liquidity-solution">
                     <img className="ph2" src={ph2} alt="..."/>
                     Crypto Liquidity Solution
                     </a>
                     <a className="dropdown-item" href="/mining-pool-solution-crypto-exchange">
                     <img className="ph2" src={ph2} alt="..."/>
                     Mining Pool System
                     </a>
                     <a className="dropdown-item" href="/crypto-staking-defi-lending-turnkey-solution">
                     <img className="ph2" src={ph2} alt="..."/>
                     Staking & Defi Lending Turnkey
                     </a>
                     <a className="dropdown-item" href="/otc-trading-system">
                     <img className="ph2" src={ph2} alt="..."/>
                     OTC Platform Turnkey
                     </a>
                  </div>
                  <div className="w-100">
                     {/* 
                     <div className="dropdown-header">Professional Services</div>
                     */}
                     <a className="dropdown-item" href="/ico-ieo-sto-platform">
                     <img className="ph2" src={ph2} alt="..."/>
                     ICO/IEO/STO
                     </a>
                     <a className="dropdown-item" href="/referral-platform-crypto-exchange">
                     <img className="ph2" src={ph2} alt="..."/>
                     Referral & Affiliate System
                     </a>
                     <a className="dropdown-item" href="/digital-and-crypto-banking">
                     <img className="ph2" src={ph2} alt="..."/>
                     Crypto Banking Solution
                     </a>
                     <a className="dropdown-item" href="/nft-marketplace-software-platform">
                     <img className="ph2" src={ph2} alt="..."/>
                     NFT Marketplace
                     </a>
                     <a className="dropdown-item" href="/decentralized-crypto-exchange-platform">
                     <img className="ph2" src={ph2} alt="..."/>
                     Decenterlize Exchange
                     </a>
                  </div>
               </div>
            </NavDropdown>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="services-nav pro-nav">
               <div className="d-md-flex align-items-start justify-content-start blue-bg">
                  <div className="container">
                     <div className="row ">
                        <div className="col-lg-8 text-white">
                           <div className="row  p-y-100">
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                       <img className="mb-4" src={t1} alt=""/>
                                       <h3>Financial Software Development</h3>
                                 </div>
                                    <a className="dropdown-item underline" href="/crypto-exchange-turnkey-solution">Cryptocurrency Exchange Turnkey</a>
                                    <a className="dropdown-item underline" href="/cryptocurrency-liquidity-solution">Crypto Liquidity Solution</a>
                                    <a className="dropdown-item underline" href="/mining-pool-solution-crypto-exchange">Mining Pool System</a>
                                    <a className="dropdown-item underline" href="/crypto-staking-defi-lending-turnkey-solution">Staking & Defi Lending Turnkey</a>
                              </div>
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                       <img  className="mb-4" src={t2} alt=""/>
                                       <h3>Consulting Service</h3>
                                 </div>
                                 <a className="dropdown-item underline" href="/otc-trading-system">OTC Platform Turnkey</a>
                                 <a className="dropdown-item underline" href="/ico-ieo-sto-platform">ICO/IEO/STO</a>
                                 <a className="dropdown-item underline" href="/referral-platform-crypto-exchange">Referral & Affiliate System</a>
                                 <a className="dropdown-item underline" href="/digital-and-crypto-banking">Crypto Banking Solution</a>
                              </div>
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                       <img className="mb-4"src={t3} alt=""/>
                                       <h3>Blockchain Development</h3>
                                 </div>
                                 <a className="dropdown-item underline" href="/nft-marketplace-software-platform">NFT Marketplace</a>
                                 <a className="dropdown-item underline" href="/decentralized-crypto-exchange-platform">Decenterlize Exchange</a>
                                 <a className="dropdown-item underline" href="/referral-platform-crypto-exchange">Referral & Affiliate System</a>
                                 <a className="dropdown-item underline" href="/digital-and-crypto-banking">Crypto Banking Solution</a>
                              </div>
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                       <img  className="mb-4" src={t4} alt=""/>
                                       <h3>Artificial Intelligence & Machine Learning</h3>
                                 </div>
                                 <a className="dropdown-item underline" href="/nft-marketplace-software-platform">NFT Marketplace</a>
                                 <a className="dropdown-item underline" href="/decentralized-crypto-exchange-platform">Decenterlize Exchange</a>
                                 <a className="dropdown-item underline" href="/referral-platform-crypto-exchange">Referral & Affiliate System</a>
                                 <a className="dropdown-item underline" href="/digital-and-crypto-banking">Crypto Banking Solution</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-4 text-white p-y-100">
                           <img  className="ioffice" src={IOffice} alt=""/>
                           <div className="buling">
                              <h2>Ment tech</h2>
                           </div>
                        </div>
                     </div>
                     <div className="finey">
                        <div className="row">
                           <div className="col-lg-8 text-white">
                              <div className="row">
                                 <div className="col-lg-3 text-white mb-4">
                                    <div className="hol p-3">
                                       <p>Financial Applications & Bank systems</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                                 <div className="col-lg-3 text-white orange-bg mb-4">
                                    <div className="hold p-3">
                                       <h4>DeFI</h4>
                                       <p>Decentralized financial Systems</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                                 <div className="col-lg-3 text-white mb-4">
                                    <div className="holds p-3">
                                       <h4>Green Finance</h4>
                                       <p>Eco-investing & eco finances</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                                 <div className="col-lg-3 text-white mb-4">
                                    <div className="holding p-3">
                                       <p>Insurance systems development</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown" className="services-nav">
               <div className="d-md-flex align-items-start justify-content-start blue-bg">
                  <div className="container">
                     <div className="row ">
                        <div className="col-lg-8 text-white">
                           <div className="row  p-y-100">
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                    <a href="/FinTech">
                                       <img className="mb-4" src={t1} alt=""/>
                                       <h3>Financial Software Development</h3>
                                    </a>
                                 </div>
                                 <p className="text-white">Full-Cycle Development</p>
                                 <p className="text-white">IT Relocation</p>
                                 <p className="text-white">DevOps Engineer Services</p>
                              </div>
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                    <a href="/Consultingservice">
                                       <img  className="mb-4" src={t2} alt=""/>
                                       <h3>Consulting Service</h3>
                                    </a>
                                 </div>
                                 <p className="text-white">Tech and Business Consulting</p>
                                 <p className="text-white">Project Validation and Design Sprint</p>
                                 <p className="text-white">Launch Workshop</p>
                              </div>
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                    <a href="/Blockchaindevelopment">
                                       <img className="mb-4"src={t3} alt=""/>
                                       <h3>Blockchain Development</h3>
                                    </a>
                                 </div>
                                 <p className="text-white">Smart Contracts Development</p>
                                 <p className="text-white">Blockchain Integration</p>
                                 <p className="text-white">Asset Tokenization</p>
                                 <p className="text-white">NFT Marketplace Development</p>
                              </div>
                              <div className="col-lg-3 text-white">
                                 <div className="pie">
                                    <a href="/Artificial">
                                       <img  className="mb-4" src={t4} alt=""/>
                                       <h3>Artificial Intelligence & Machine Learning</h3>
                                    </a>
                                 </div>
                                 <p className="text-white">ML Apps for Business Intelligence</p>
                                 <p className="text-white">Data Analytics in FinTech</p>
                                 <p className="text-white">Big Data Applications</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-4 text-white p-y-100">
                           <img  className="ioffice" src={IOffice} alt=""/>
                           <div className="buling">
                              <h2>Ment Fintech</h2>
                              <h2>Dublin Ireland</h2>
                           </div>
                        </div>
                     </div>
                     <div className="finey">
                        <div className="row">
                           <div className="col-lg-8 text-white">
                              <div className="row">
                                 <div className="col-lg-3 text-white mb-4">
                                    <div className="hol p-3">
                                       <p>Financial Applications & Bank systems</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                                 <div className="col-lg-3 text-white orange-bg mb-4">
                                    <div className="hold p-3">
                                       <h4>DeFI</h4>
                                       <p>Decentralized financial Systems</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                                 <div className="col-lg-3 text-white mb-4">
                                    <div className="holds p-3">
                                       <h4>Green Finance</h4>
                                       <p>Eco-investing & eco finances</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                                 <div className="col-lg-3 text-white mb-4">
                                    <div className="holding p-3">
                                       <p>Insurance systems development</p>
                                       <i class=" righting fas fa-arrow-right fa-fw"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </NavDropdown>
           <NavDropdown title="Services" id="basic-nav-dropdown" className="services-nav-mobile">
               <div className="d-md-flex align-items-start justify-content-start">
                   <div className="w-100">
                     <a  className="dropdown-item" href="/finTech">
                        <img className="ph2" src={ph2} alt="..."/>
                        Financial Software Development
                     </a>
                     <a className="dropdown-item" href="/consultingservice">
                        <img className="ph2" src={ph2} alt="..."/>
                        Consulting Service
                     </a>
                   
                     <a className="dropdown-item" href="/blockchaindevelopment">
                        <img className="ph2" src={ph2} alt="..."/>
                        Blockchain Development
                     </a>
                     <a className="dropdown-item" href="/artificial">
                        <img className="ph2" src={ph2} alt="..."/>
                        Artificial Intelligence & Machine Learning
                     </a>
                  </div>
               </div>
            </NavDropdown>
            <Nav.Link href="/quotation">Quotation</Nav.Link>
            <NavDropdown
               title="Company"
               id="basic-nav-dropdown"
               >
               <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100">
                     <a className="dropdown-item" href="/about">
                     <img className="ph2" src={ph2} alt="..."/>
                     About Us
                     </a>
                     <a className="dropdown-item" href="/team">
                     <img className="ph2" src={ph2} alt="..."/>
                     Team
                     </a>
                     <a className="dropdown-item" href="/career">
                     <img className="ph2" src={ph2} alt="..."/>
                     Careers
                     </a>
                     <a className="dropdown-item" href="/Security">
                     <img className="ph2" src={ph2} alt="..."/>
                     Security
                     </a>
                     <a className="dropdown-item" href="/contact-us">
                     <img className="ph2" src={ph2} alt="..."/>
                     Contact Us
                     </a>
                  </div>
               </div>
            </NavDropdown>
            <Nav.Link href="/news-analysis">News & Analysis</Nav.Link>
            {/* 
            <Nav.Link className="" href="/Services">Services</Nav.Link>
            */}
            
            <NavDropdown
               title="Legal"
               id="basic-nav-dropdown"
               >
               <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100">
                     <a className="dropdown-item" href="/privacy-policy">
                     <img className="ph2" src={ph2} alt="..."/>
                     Privacy Policy
                     </a>
                     <a
                        className="dropdown-item"
                        href="/terms-of-use"
                        >
                     <img className="ph2" src={ph2} alt="..."/>
                     Terms Of Use
                     </a>
                     <a className="dropdown-item" href="/cookie-policy">
                     <img className="ph2" src={ph2} alt="..."/>
                     Cookies Policy
                     </a>
                  </div>
               </div>
            </NavDropdown>
            <Button
               className="request-demo-modal"
               href="/requestDemo"
               bsPrefix="btnn"
               >
            Request Demo
            </Button>
            <Button
               className="schedule-call-modal"
               href="/schedulecall"
               bsPrefix="btnn"
               >
            Schedule Call
            </Button>
         </Nav>
      </Navbar.Collapse>
      {/*  
      <Modal show={requestShow} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Request a Demo</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Formik
               validationSchema={scheduleSchema}
               initialValues={userFormInitialValues}
               onSubmit={values =>
               {
               handleUserSubmit(values);
               }}
               >
               {({
               handleSubmit,
               handleChange,
               values,
               errors
               }) => (
               <Form onSubmit={handleSubmit}>
                  <div className="form-row">
                     <div className="form-group col-md-6">
                        <input
                           className="form-control"
                           type="text"
                           name="name"
                           placeholder="Your Name"
                           value={values.name}
                           onChange={handleChange}
                           />
                        <span className="text-danger">{errors.name}</span>
                     </div>
                     <div className="form-group col-md-6">
                        <input
                           className="form-control"
                           type="text"
                           name="email"
                           placeholder="Your email"
                           value={values.email}
                            onChange={handleChange}
                           />
                        <span className="text-danger">{errors.email}</span>
                     </div>
                     <div className="form-group col-md-6">
                        <input
                           className="form-control"
                           type="text"
                           name="phone"
                           placeholder="Your phone"
                           value={values.phone}
                           onChange={handleChange}
                           />
                        <span className="text-danger">{errors.phone}</span>
                     </div>
                     <div className="form-group col-md-6">
                        <input
                           className="form-control"
                           type="text"
                           name="company_name"
                           placeholder="Company Name"
                           value={values.company_name}
                           onChange={handleChange}
                           />
                        <span className="text-danger">{errors.company_name}</span>
                     </div>
                     <div className="form-group col-md-12">
                        <textarea
                           className="form-control"
                           rows={3}
                           name="message"
                           placeholder="message"
                           value={values.message}
                           onChange={handleChange}
                           />
                        <span className="text-danger">{errors.message}</span>
                     </div>
                     <div className="form-group col-md-12">
                        <Button type="submit" className="btn green-btn btn-lg">
                        Save Changes
                        </Button>
                     </div>
                  </div>
               </Form>
               )}
            </Formik>
         </Modal.Body>
      </Modal>
      */}
      {/*   
      <Modal show={sehduleShow} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>
               Please complete the form and submit your request.
               We will be in touch shortly.
               <p>We offer a large range of products and services to enhance your business operations</p>
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Formik
               validationSchema={scheduleSchema}
               initialValues={userFormInitialValues}
               onSubmit={values =>
               {
               handleUserSubmit(values);
               }}
               >
               {({
               handleSubmit,
               handleChange,
               values,
               errors
               }) => (
               <Form onSubmit={handleSubmit}>
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={values.name}
                        onChange={handleChange}
                        />
                     <span className="text-danger">{errors.name}</span>
                  </div>
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder="Your email"
                        value={values.email}
                        onChange={handleChange}
                        />
                     <span className="text-danger">{errors.email}</span>
                  </div>
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="Your phone"
                        value={values.phone}
                        onChange={handleChange}
                        />
                     <span className="text-danger">{errors.phone}</span>
                  </div>
                  <div className="form-group">
                     <input
                        className="form-control"
                        type="text"
                        name="company_name"
                        placeholder="Company Name"
                        value={values.company_name}
                        onChange={handleChange}
                        />
                     <span className="text-danger">{errors.company_name}</span>
                  </div>
                  <div className="form-group">
                     <textarea
                        className="form-control"
                        rows={3}
                        name="message"
                        placeholder="message"
                        value={values.message}
                        onChange={handleChange}
                        />
                     <span className="text-danger">{errors.message}</span>
                  </div>
                  <div className="form-row">
                     <Button type="submit" className="btn green-btn btn-lg">
                     Save Changes
                     </Button>
                  </div>
               </Form>
               )}
            </Formik>
         </Modal.Body>
      </Modal>
      */}
   </div>
</Navbar>
</>
);
};
export default Navigation;

