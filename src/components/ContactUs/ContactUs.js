
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import ContactUsHeader from "../Header/HeaderContactUs/HeaderContactUs";
import IndiaOffice from "../../assests/images/contact/india-office.jpg";
import UkOffice from "../../assests/images/contact/uk-office.jpg";
import UsaOffice from "../../assests/images/contact/romania-office.jpg";
import IOffice from "../../assests/images/contact/ireland1.jpg";
import { Modal, Button } from "react-bootstrap";
import 'react-phone-input-2/lib/style.css';
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useToasts } from "react-toast-notifications";
import CopyRight from "../Footer/CopyRight";
import {Helmet} from "react-helmet";
import art from "../../assests/images/art.png";
import Phone from "../PhoneInput";
import ChatBox from "../ChatBox";
const ContactUs = () => {
  const [technicalShow, setTechnicalShow] = useState(false);

  const handleClose = () => {
    setTechnicalShow(false)
  };
  const handleTechnicalShow = () => setTechnicalShow(true);

    const { addToast } =useToasts();

    const contactSchema = yup.object({
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
        other_contact: yup
            .string()
            .min(10, "ID must be minimum of 10 characters"),
        budget: yup
            .string()
            .required("Amount is required")
            .min(2, "Amount must be minimum of 2 digit"),
        toggle: yup
            .string()
            .required("Tick the Checkbox"),
    });

    const userFormInitialValues = {
        name: "",
        email: "",
        phone: "",
        company_name: "",
        message: "",
        other_contact: "",
        toggle: false,
        budget:"",
    };

    const handleUserSubmit = (values) => {
        fetch(`https://ment.tech/api/contactUs`, values)
            .then(response => {
                addToast("Thank you for submitting form", {
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
    <section className="contactus innerfooter">
        <Helmet>
            <title>Contact Us - Ment</title>
            <meta property="og:title" content="Ment Fintech - Cryptocurrency Exchange Development Company" />
            <meta name="description" content="Ment Fintech Offers Cryptocurrency Exchange Turnkey Solution , Crypto Staking Solution , OTC Trading System, WhiteLabel Exchange Solution, Leverage & Margin Trading Module, Crypto Liquidity Solution, Whitepaper Creation, Wallet Solution." />
            <meta property="og:url" content="https://Ment Fintech"/>
        </Helmet>
        <ContactUsHeader/>
        <section className="location-offices p-y-100">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-12 text-center">
                        <h1>Ment Offices</h1>
                        <p>Offices around the world</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 text-center mb-3">
                        <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                            <img className="img-fluid" src={IndiaOffice} alt="" />
                            <h3 className="mb-3 mt-3 pr-2 pl-2">MENT HEADQUARTERS</h3>
                            <p className="pr-3 pl-3">MENT TECH, 47/1 , First floor, Bhawanipur Colony, Indore, 452001</p>
                            <hr className="mb-0"/>
                            <p className="p-3">Email: info@ment.tech</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center mb-3">
                        <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                            <img className="img-fluid" src={UsaOffice} alt="" />
                            <h3 className="mb-3 mt-3 pr-2 pl-2">MENT TECH PVT. LTD.</h3>
                            <p className="pr-3 pl-3">5857 Owens Ave Suite 300 Carlsbad, CA 92008</p>
                            <hr className="mb-0"/>
                            <p className="p-3">Email: info@ment.tech</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center mb-3">
                        <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                            <img className="img-fluid" src={UkOffice} alt="" />
                            <h3 className="mb-3 mt-3 pr-2 pl-2">MENT TECH CONSULTING</h3>
                            <p className="pr-3 pl-3">One Avenue, 23 Finsbury Circus, London, England, EC2M 7EA</p>
                            <hr className="mb-0"/>
                            <p className="p-3">Email: info@ment.tech</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center mb-3">
                        <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow">
                            <img className="img-fluid" width="100%" src={IOffice} alt="" />
                            <h3 className="mb-3 mt-3 pr-2 pl-2">MENT FINTECH</h3>
                            <p className="pr-3 pl-3">101, Monkstown Rd, Monkstown, Blackrock Co.Dublin  Ireland</p>
                            <hr className="mb-0"/>
                            <p className="p-3">Email: info@ment.ie</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        <section className="contact-options  p-y-100">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-12 text-center">
                        <h1>Contact Ment Support</h1>
                        <p>To request a conversation, pick your preferred contact option. An ment sales specialist will be in touch with you shortly.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <div className="contact-chat">
                            <ChatBox open={(handleToggle) => (<button onClick={handleToggle}>Im</button> )}/>
                        </div>
                        <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow p-5">
                            <i className="fas fa-comments fa-3x fa-fw mt-3 mb-4"></i>
                            <h2 className="mb-4">Contact ment sales</h2>
                            <p>Start an online chat session with a Ment team member.</p>
                            <p className="bottom-link">Chat now <i class="fas fa-arrow-right fa-fw mr-4" aria-hidden="true"></i></p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="callus-block bg-white rounded-2 box-shadow-card no-underline hover-grow p-5">
                        <a href="skype:+35319609994?Call">
                            <i className="fas fa-headset fa-3x fa-fw mt-3 mb-4"></i>
                            <h2 className="mb-4">Call us</h2>
                            <p>Call us, and we'll answer your questions over the phone.</p>
                            <p className="bottom-link"><span>Call now</span> <i class="fas fa-arrow-right fa-fw mr-4" aria-hidden="true"></i></p>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="bg-white rounded-2 box-shadow-card no-underline hover-grow p-5" onClick={handleTechnicalShow}>
                            <i className="fas fa-envelope-open fa-3x fa-fw mt-3 mb-4"></i>
                            <h2 className="mb-4">Request we contact you</h2>
                            <p>Send us the contact request, and have a technical sales specialist contact you.</p>
                            <p className="bottom-link"><a href="#">Send a request</a> <i class="fas fa-arrow-right fa-fw mr-4" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
        <Footer/>
        <CopyRight/>
        
        <Modal className="tech-contact" show={technicalShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Ment.Fintech Technical Sales
                <p className="mb-0">Tell us a bit about yourself and your project. An Ment team member will reach out to you shortly.</p>
            </Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
              <h2 className="mb-4">Your contact information</h2>
              <Formik
                  validationSchema={contactSchema}
                  initialValues={userFormInitialValues}
                  onSubmit={values => {
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
                              <div className="form-group col-12">
                                  <label>Name<em className="text-danger">*</em></label>
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
                              <div className="form-group col-12">
                                  <label>Company Name<em className="text-danger">*</em></label>
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
                              <div className="form-group col-12">
                                  <label>Email<em className="text-danger">*</em></label>
                                  <input
                                      className="form-control"
                                      type="email"
                                      name="email"
                                      placeholder="Your Email"
                                      value={values.email}
                                      onChange={handleChange}
                                  />
                                  <span className="text-danger">{errors.email}</span>
                              </div>
                              <div className="form-group col-12">
                                  <label>Phone<em className="text-danger">*</em></label>
                                    <Phone
                                        phone={values.phone}
                                        change={handleChange}
                                    />
                                  <span className="text-danger">{errors.phone}</span>
                              </div>
                              <div className="form-group col-12">
                                  <label>Phone, Telegram, or Skype (optional)</label>
                                  <input
                                      className="form-control"
                                      type="text"
                                      name="other_contact"
                                      placeholder="Phone, Telegram, or Skype ID"
                                      value={values.other_contact}
                                      onChange={handleChange}
                                  />
                                  <span className="text-danger">{errors.other_contact}</span>
                              </div>
                          </div>
                          <div className="form-row">
                              <div className="col-lg-12">
                                  <h2>Tell us about your project</h2>
                              </div>
                              <div className="form-group col-12">
                                  <label>Estimated Project Budget (USD)? We have solutions for any budget.<em className="text-danger">*</em></label>
                                  <input
                                      className="form-control"
                                      type="text"
                                      name="budget"
                                      placeholder="Enter your estimated project budget in USD"
                                      value={values.budget}
                                      onChange={handleChange}
                                  />
                                  <span className="text-danger">{errors.budget}</span>
                              </div>
                              <div className="form-group col-12">
                                  <label>Your Message</label>
                                  <textarea
                                      className="form-control"
                                      name="message"
                                      placeholder="What project do you have in mind? Which MENT solutions and products are you interested in?"
                                      value={values.message}
                                      onChange={handleChange}
                                  />
                                  <span className="text-danger">{errors.message}</span>
                              </div>
                              <div className="form-group col-lg-12">
                <label>Upload File</label>
                                                
                   </div>
               <div className="form-group col-lg-12 resy">
                                          
                   <img className="arts" width="4%" src={art} alt=""/>
                     <input
                         type="file"
                         id="myfile"
                         name="myfile"
                         className="files"
                                            
                         />
                         </div>
                              <div className="form-group col-12">
                                  <input
                                    type="checkbox"
                                    name="toggle"
                                    value={values.toggle}
                                    onChange={handleChange}
                                  />
                                  <label>&nbsp; I give consent to processing my personal data given from the contact form above under the terms and conditions of Ment Fintech Ltd Privacy Policy.</label>
                                  <span className="text-danger">{errors.toggle}</span>
                              </div>
                              <div className="form-group col-12 d-flex">
                                  <input
                                      type="checkbox"
                                      name="toggle"
                                      value={values.toggle}
                                      onChange={handleChange}
                                  />
                                  <label>&nbsp;I want to receive commercial commuications and marketing information from  Ment Fintech Ltd by electronic means of communication (including telephone and e-mail).</label>
                                  <span className="text-danger">{errors.toggle}</span>
                              </div>
                              <Button type="submit" className="btn green-btn btn-lg w-100">
                                  Submit
                              </Button>
                          </div>
                      </Form>
                  )}
              </Formik>

          </Modal.Body>
        </Modal>
    </section>
  );
};

export default ContactUs;
