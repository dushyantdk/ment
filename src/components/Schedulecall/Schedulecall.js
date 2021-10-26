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

const Schedulecall = () => {

    const { addToast } = useToasts();

    const userSchema = yup.object({
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
        job_title: yup
            .string()
            .required(" job title is required")
            .min(3, " job title must be minimum of 3 characters"),
        country: yup
            .string()
            .required(" country is required")
            .min(3, " country must be minimum of 3 characters"),
            
        message: yup
            .string()
            .min(3, "Message must be minimum of 3 characters"),
         
    });

    const userFormInitialValues = {
      first_name: "",
      last_name: "",
        email: "",
        phone: "",
     company_name: "",
     job_title: "",
     country: "",
    
        message: "",
       
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
    <h1 className="mt-4 mb-4">Get in touch</h1>
    
    <p>Ment is solving real-world problems with Ethereum blockchain solutions for organizations of all sizes, from the local community to the global enterprise. We're building Web 3. Come explore with us.</p>

    </div>

    </div>

    </div>
    </section>
    <section className="p-y-100">
        <div className="container">
        <div className="">
          <div className="row m-2">
          <div className="col-lg-6">
          <h1 className="mb-4">Start Your Blockchain Journey Today</h1>
        <p className="pr-5">Ment is the software engineering leader of the enterprise blockchain ecosystem and the largest pure play Ethereum company in the world. Our blockchain products and services have helped leading financial institutions, governments, and conglomerates easily launch blockchain-based solutions that have immediate business impact. Our global Solutions team offers blockchain training, strategic advisory, development and implementation services, and opportunities for joint ventures and co-creation. We’re here to help you and your organization along your blockchain journey. </p>
        <p>The proven benefits of Enterprise Ethereum:</p>
        <ul className="schedul">
<li className="mb-4">
<b>Automatic execution. </b>
<span>Streamline business processes through programmable transactions and real-time clearing and settlement.</span>
</li>
<li className="mb-4">
<b>Advanced security. </b>
<span>Mitigate risk with tamper-proof data coordination and granular security controls.</span>
</li>
<li className="mb-4">
<b>Trusted business networks. </b>
<span>Quickly deploy permissioned networks with shared business logic and customizable governance.</span>
</li>
<li className="mb-4">
<b>Digital asset management. </b>
<span>Rapidly create and manage digital assets and instruments.&nbsp;</span>
</li>
<li className="mb-4">
<b>Production grade.</b>
<span>Manage a compliant blockchain platform at scale with zero downtime.</span>
</li>
</ul>
          </div>
          
          <div className="col-lg-6">
          <div className="thih box-shadow-card bg-body p-5">
                                <Formik
                                    validationSchema={userSchema}
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
                                                        phone={values.phone}
                                                        ochange={handleChange}/>
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
                                              />I give consent to processing my personal data given from the contact form above under the terms and conditions of Ment Fintech Ltd Privacy Policy.</label>
       
                                                </div>
                                                <div className="form-group col-lg-12">
                                                <label className="">
                                                <input
                                                  name="fav_language"
                                                value="front-end-projects"
                                                  type="checkbox"
                                               class="input-checkbox mr-2"
                                              />I want to receive commercial commuications and marketing information from  Ment Fintech Ltd by electronic means of communication (including telephone and e-mail). </label>
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
    <LetsTalk/>
    <Footer/>
   <CopyRight/>
  
   </div>
  );
};

export default Schedulecall;
