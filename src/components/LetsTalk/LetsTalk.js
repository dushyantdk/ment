import React, { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import * as yup from "yup";
import { Form, Formik } from "formik";
import art from "../../assests/images/art.png";
import Ment from "../../assests/images/m-logo-blue.svg" ;
import HeaderLogo from "../../assests/images/m-logo-white.svg";
import 'react-phone-input-2/lib/style.css';
import Phone from "../PhoneInput";
import ChatBox from "../ChatBox";

const LetsTalk = () => {
const [technicalShow, setTechnicalShow] = useState(false);
const handleClose = () => {
setTechnicalShow(false)
};


const handleTechnicalShow = () => setTechnicalShow(true);
// const { addToast } =useToasts();
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
return (
<>
<section className="weoffer-section">
   <div className="container wide-block">
      <div className="row">
         <div className="col-lg-12">
               <div className="row mb-5">
                  <div className="col-lg-12">
                     <div className="title-block">
                        <h1 className="mb-4">Interested in working <span className="gradient-text-red">together? Let's talk!</span></h1>
                        <p>An efficient digital banking platform makes use of fast, scalable, stable technology and proper risk management.
 
 </p>
                     </div>
                  </div>
               </div>
               <div className="row lets-talk">
                  <div className="col-lg-4">
                     <div className="lets-chat">
                     <ChatBox open={(handleToggle) => (<button onClick={handleToggle}>Im</button> )}/>
                     </div>
                     <a className="contact-block white-bg d-block position-relative no-underline overflow-hidden">
                        <h3>Chat with sales</h3>
                        <p className="mb-0">Start chat <i class="fas fa-arrow-right fa-fw"></i></p>
                        <i class="far fa-comments"></i>
                     </a>
                  </div>
                  <div className="col-lg-4">
                     <a href="skype:+35319609994?Call" className="contact-block white-bg d-block position-relative no-underline overflow-hidden">
                        <h3>Call sales</h3>
                        <p className="mb-0">Call now <i class="fas fa-arrow-right fa-fw"></i></p>
                        <i class="fas fa-phone-volume"></i>
                     </a>
                  </div>
                  <div className="col-lg-4">
                     <a href="#" onClick={handleTechnicalShow} className="contact-block white-bg d-block position-relative no-underline overflow-hidden">
                        <h3>Let us contact you</h3>
                        <p className="mb-0">Send a contact request <i class="fas fa-arrow-right fa-fw"></i></p>
                        <i class="far fa-envelope"></i>
                     </a>
                  </div>
               </div>
         </div>
      </div>
   </div>
</section>
<Modal className="tech-contact" show={technicalShow} onHide={handleClose}>
   <Modal.Header closeButton>
      <Modal.Title>
         Contact Ment.Fintech Technical Sales
         <p className="mb-0">Tell us a bit about yourself and your project. An ment team member will reach out to you shortly.</p>
      </Modal.Title>
   </Modal.Header>
   <Modal.Body>
      <h2 className="mb-4">Your contact information</h2>
      <Formik
      validationSchema={contactSchema}
      initialValues={userFormInitialValues}
      //   onSubmit={values => {
      //       handleUserSubmit(values);
      //   }}
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
                <Phone phone={values.phone} change={handleChange} />
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
               <label>Estimated project budget (USD)? We have solutions for any budget.<em className="text-danger">*</em></label>
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
                  placeholder="What project do you have in mind? Which ment solutions and products are you interested in?"
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
               <label>&nbsp;  I give consent to processing my personal data given from the contact form above under the terms and conditions of Ment Fintech Ltd Privacy Policy.</label>
               <span className="text-danger">{errors.toggle}</span>
            </div>
            <div className="form-group col-12 ">
               <input
                  type="checkbox"
                  name="toggle"
                  value={values.toggle}
                  onChange={handleChange}
                  />
               <label>&nbsp;  I want to receive commercial commuications and marketing information from  Ment Fintech Ltd by electronic means of communication (including telephone and e-mail).</label>
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

</>
);
};
export default LetsTalk;

