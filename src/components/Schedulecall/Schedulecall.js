import React, {useState, useEffect} from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Navigation from "../Header/Navigation/Navigation";
import LetsTalk from "../LetsTalk/LetsTalk";
import * as yup from "yup";
import { Form, Field, Formik, FormikValues } from "formik";
import { useToasts } from "react-toast-notifications";
import art from "../../assests/images/art.png";
import 'react-phone-input-2/lib/style.css';
import Phone from "../PhoneInput"
import 'react-phone-input-2/lib/style.css';

import ChatBox from "../ChatBox";
import { Modal, Button, Col } from "react-bootstrap";
const Schedulecall = () => {

  const [technicalShow, setTechnicalShow] = useState(false);
  const handleClose = () => {
  setTechnicalShow(false)
  };
  
  
  const handleTechnicalShow = () => setTechnicalShow(true);
  // const { addToast } =useToasts();
  const { addToast } = useToasts();
  const contactSchema = yup.object({
    first_name: yup
    .string()
    .required("first name is required")
    .min(3, "first name must be minimum of 3 characters")
    .max(50, "first name can be maximum 8 characters long"),
    last_name: yup
    .string()
    .required("last name is required")
    .min(3, "last name must be minimum of 3 characters")
    .max(50, "last name can be maximum 8 characters long"), 
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
      <div className="innerfooter">
    <section className="contact-h-f blue-bg p-y-100" >
    <Navigation/>
    <div className="container wide-block">
    <div className="row pt-5">
    <div className="col-lg-6 text-white ">
    <h1 className="mt-4 mb-4">Contact Us</h1>
    
    <p>For organizations of all sizes, from local communities to worldwide entities, Ment Fintech provides Ethereum blockchain solutions that solve real-world problems. Web 3 is our focus. Contact us to learn more.</p>

    </div>

    </div>

    </div>
    </section>
    <section className="p-y-100">
        <div className="container">
        <div className="">
          <div className="row m-2">
          <div className="col-lg-6">
          <h1 className="mb-4">Take the first step on your blockchain journey today</h1>
        <p className="pr-5">We are the world's largest pure play Ethereum company and the leading software engineering company in enterprise blockchain. Leading financial institutions, governments, and conglomerates have used our blockchain products and services to launch impactful business solutions right away. As a global solutions provider, we provide blockchain training, strategic advisory services, applications development and implementation, as well as joint ventures and co-creations. Let us help you with your blockchain transition.</p>
        <p>Enterprise Ethereum offers the following benefits:</p>
        <ul className="schedul">
<li className="mb-4">
<b>Automated execution.</b>
<span>Real-time clearing and settlement and programmable transactions simplify business processes.</span>
</li>
<li className="mb-4">
<b>Enhanced security.</b>
<span>Protect data with granular security controls and tamper-proof coordination.</span>
</li>
<li className="mb-4">
<b>Reliable business networks.</b>
<span>Create permissioned networks instantly that incorporate shared business logic with personalized governance.</span>
</li>
<li className="mb-4">
<b>	Management of digital assets.</b>
<span>Easily and quickly develop and control digital assets. &nbsp;</span>
</li>

</ul>
          </div>
          
          <div className="col-lg-6">
          <div className="thih box-shadow-card bg-body p-5">
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
                                        <Form noValidate onSubmit={handleSubmit}>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                <h4>First name*</h4>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        className="form-control"
                                                        placeholder=""
                                                        value={values.first_name}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.first_name}</span>
                                                </div>
                                                <div className="form-group col-md-6">
                                                 <h4>Last Name</h4>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        className="form-control"
                                                        placeholder=""
                                                        value={values.last_name}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.last_name}</span>
                                                </div>
                                                
                                                <div className="form-group col-md-12">
                                                <h4>Email*</h4>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder=""
                                                        value={values.email}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.email}</span>
                                                </div>
                                                <div class="form-group col-lg-12">
                                                    <h4>Phone Number*</h4>
                                                      <Phone 
                                                      
                                                        type="tel"
                                                        name="phone"
                                                        value={values.phone}
                                                        change={handleChange}/>
                                                    <span className="text-danger">{errors.phone}</span> 
                                                </div>
                                                
                                                <div className="form-group col-md-12">
                                                <h4>Company name*</h4>
                                                    <input
                                                        type="text"
                                                        name="company_name"
                                                        className="form-control"
                                                        placeholder=""
                                                        value={values.company_name}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.company_name}</span>
                                                </div>
                                                <div className="form-group col-md-12">
                                                <h4>Job Title*</h4>
                                                    <input
                                                        type="text"
                                                        name="job_title"
                                                        className="form-control"
                                                        placeholder=""
                                                        value={values.job_title}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.job_title}</span>
                                                </div>
                                                <div className="form-group col-md-12">
                                                <h4>Country*</h4>
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        className="form-control"
                                                        placeholder=""
                                                        value={values.country}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.country}</span>
                                                </div>
                                              
                                                <div class="form-group col-lg-12">
         <h4>Which of the following best describes the nature of your enquiry*</h4>
       
           
           <label className="d-flex">
        <input
          name="fav_language"
          value="Professional Services"
          type="radio"
          id="Professional Services"
          class="input-radio"
        />Professional Services</label>
         <label className="d-flex">
        <input
          name="fav_language"
          value="Financial Technology Products"
          type="radio"
          id="Financial Technology Products"
          class="input-radio"
        />Financial Technology Products</label>
     <label className="d-flex">
      <input
          name="fav_language"
          value="Global Trade Products"
          type="radio"
          id ="Global Trade Products"
          class="input-radio"
        />Global Trade Products</label>
         <label className="d-flex">
       <input
          name="fav_language"
          value="Developer Tools"
          type="radio"
          id ="Developer Tools"
          class="input-radio"
        />Developer Tools</label>
          <label className="d-flex">
          <input
          name="fav_language"
          value="Protocol Infrastructure"
          type="radio"
          id ="Protocol Infrastructure"
          class="input-radio"
        />Protocol Infrastructure</label>
         <label className="d-flex">
        <input
          name="fav_language"
          value="Investments"
          type="radio"
          id ="Investments"
          class="input-radio"
        />Investments</label>
         <label className="d-flex">
         <input
          name="fav_language"
          value="Education"
          type="radio"
          id ="Education"
          class="input-radio"
        />Education</label>
          <label className="d-flex">
         <input
          name="fav_language"
          value="Careers"
          type="radio"
          id ="Careers"
          class="input-radio"
        />Careers</label>
         <label className="d-flex">
        <input
          name="fav_language"
          value="Press"
          type="radio"
          id ="Press"
          class="input-radio"
        />Press</label>
         <label className="d-flex">
        <input
          name="fav_language"
          value="Other"
          type="radio"
          id ="Other"
          class="input-radio"
        />Other</label>
        </div>
        <div class="form-group col-lg-12">
         <h4>Your Organization*</h4>
      <label className="d-flex">
        <input
          name="fav_languages"
          value="Corporate Enterprise"
          type="radio"
          id ="Corporate Enterprise"
          class="input-radio"
        />Corporate Enterprise</label>
         <label className="d-flex">
        <input
          name="fav_languages"
          value="Banking Institution"
          type="radio"
          id ="Banking Institution"
          class="input-radio"
        />Banking Institution</label>
     <label className="d-flex">
      <input
          name="fav_languages"
          value="Investment Firm"
          type="radio"
          id ="Investment Firm"
          class="input-radio"
        />Investment Firm</label>
         <label className="d-flex">
       <input
          name="fav_languages"
          value="Start-up Project"
          type="radio"
          id ="Start-up Project"
          class="input-radio"
        />Start-up Project</label>
          <label className="d-flex">
          <input
          name="fav_languages"
          value="Developer"
          type="radio"
          id ="Developer"
          class="input-radio"
        />Developer</label>
         <label className="d-flex">
        <input
          name="fav_languages"
          value="Educational Institution"
          type="radio"
          id ="Educational Institution+++++"
          class="input-radio"
        />Educational Institution</label>
         <label className="d-flex">
         <input
          name="fav_languages"
          value="Regulator"
          type="radio"
          id ="Regulator"
          class="input-radio"
        />Regulator</label>
         <label className="d-flex">
        <input
          name="fav_languages"
          value="Press"
          type="radio"
          id ="Press"
          class="input-radio"
        />Press</label>
         <label className="d-flex">
        <input
          name="fav_languages"
          value="Individual"
          type="radio"
          id ="Individual"
          class="input-radio"
        />Individual</label>
        </div>
       <div className="form-group col-lg-12">
        <h4>Message*</h4>                                       
         <textarea
         className="form-control"
         name="message"
         placeholder=""
         value={values.message}
         onChange={handleChange}
        />
     <span className="text-danger">{errors.message}</span>
     </div>
     <div className="form-group col-lg-12">
            <h4>Upload File*</h4>
            </div>
     <div className="form-group col-lg-12 resy">
     <img  
         className="arts"
         width="4.5%" 
         src={art} alt=""/>
     <input
         type="file"
          id="myfile"
           name="myfile"/>
      
       </div>
     <div class="form-group col-lg-12">
      <h4>
      How did you hear about us?
      </h4>
      <select  name="mostLike" class="form-control" required>
        <option disabled selected value>Please Select</option>
        <option value="Events">Events</option>
        <option value="Networking">Networking</option>
        <option value="Online Ads">Online Ads</option>
        <option value="Press Coverage">Press Coverage</option>
        <option value="Search Engine">Search Engine</option>
        <option value="Social Media">Social Media</option>
        <option value="Word of Mouth">Word of Mouth</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="form-group col-lg-12">
                                                <label className="">
                                                <input
                                                  name="fav_language"
                                                value="front-end-projects"
                                                  type="checkbox"
                                               class="input-checkbox mr-2"
                                              />In accordance with Ment Fintech Ltd's Privacy Policy, I consent to the processing of my personal data provided through the contact form above.</label>
       
                                                </div>
                                                <div className="form-group col-lg-12">
                                                <label className="">
                                                <input
                                                  name="fav_language"
                                                value="front-end-projects"
                                                  type="checkbox"
                                               class="input-checkbox mr-2"
                                              />Ment Fintech Ltd can communicate with me by electronic means (including e-mail and telephone).</label>
        </div>
                                               
                                               
     <div className="form-group col-md-12">
  <button type="submit"  className="btn btn-primary">Submit</button>
        </div>
        </div>
         </Form>
          )}
         </Formik>
         </div>
         </div>
         </div>
        
         </div>               
        </div> 
        </section>
        <section className="weoffer-section">
   <div className="container wide-block">
      <div className="row">
         <div className="col-lg-12">
               <div className="row mb-5">
                  <div className="col-lg-12">
                     <div className="title-block">
                        <h1 className="mb-4">Get in touch &<span className="gradient-text-red">let's work together!</span></h1>
                        <p>With fast, stable, and scalable technology, you can build a strong digital banking platform powered by effective risk management.</p>
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

    <Footer/>
   <CopyRight/>
  
   </div>
  );
};

export default Schedulecall;
