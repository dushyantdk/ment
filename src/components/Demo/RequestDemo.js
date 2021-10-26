import React, {useState} from "react";
import Footer from "../Footer/Footer";
import CopyRight from "../Footer/CopyRight";
import Navigation from "../Header/Navigation/Navigation";
import LetsTalk from "../LetsTalk/LetsTalk";
import * as yup from "yup";
import { Form, Formik, FormikValues } from "formik";
import { useToasts } from "react-toast-notifications";
import art from "../../assests/images/art.png";
import 'react-phone-input-2/lib/style.css';
import Phone from "../PhoneInput";
const RequestDemo = () => {

    const { addToast } = useToasts();

    const userSchema = yup.object({
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
        myfile: "",
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
      <>
    <section className="contact-h-f white-header innerfooter" >
    <Navigation/>
    <section className="Requestademo ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12 offset-lg-d1 position-relative top-n6 top-lg-0 actions-pricing-private">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-block">
                                    <h1 className="gradient-text-green">Request a Demo</h1>
                                </div>
                            </div>
                        </div>
                        <div className="requestdemo">
                        <div className="row mt-2">
                            <div className="col-lg-12">

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
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.name}</span>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.email}</span>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <Phone phone={values.phone} change={handleChange} />
                                                   
                                                    <span className="text-danger">{errors.phone}</span>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input
                                                        type="text"
                                                        name="company_name"
                                                        className="form-control"
                                                        placeholder="Company Name"
                                                        value={values.company_name}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.company_name}</span>
                                                </div>
                                                <div className="form-group col-lg-12">
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        placeholder="Message"
                                                        value={values.message}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.message}</span>
                                                </div>
                                                <div className="form-group col-lg-12 res">
                                                      <label>Upload File</label>
                                                
                                                </div>
                                                <div className="form-group col-lg-12 res">
                                          
                                                <img className="arts" width="2%" src={art} alt=""/>
                                         <input
                                            type="file"
                                              id="myfile"
                                                name="myfile"
                                                className="files"
                                            
                                            />
                                               
                                                   </div>
                                              
                                                <div className="form-group col-lg-12 rese">
                                                <label className="">
                                                <input
                                                  name="user-recommend"
                                                value="front-end-projects"
                                                  type="checkbox"
                                               class="input-checkbox mr-2"
                                              />I give consent to processing my personal data given from the contact form above under the terms and conditions of Ment Fintech Ltd Privacy Policy.</label>
       
                                                </div>
                                                <div className="form-group col-lg-12">
                                                <label className="">
                                                <input
                                                  name="user-recommend"
                                                value="front-end-projects"
                                                  type="checkbox"
                                               class="input-checkbox mr-2"
                                              />I want to receive commercial commuications and marketing information from  Ment Fintech Ltd by electronic means of communication (including telephone and e-mail). </label>
       
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <button type="submit"  className="btn btn-primary">Save Changes</button>
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

export default RequestDemo;
