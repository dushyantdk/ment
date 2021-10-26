import React, {useState} from "react";
import * as yup from "yup";
import { Form, Formik, FormikValues } from "formik";
import { useToasts } from "react-toast-notifications";
import 'react-phone-input-2/lib/style.css';
import Phone from "../../PhoneInput";
const SpeaktoExpert = () => {

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
    <section className="speaktoexpert contact-h-f" >
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12 offset-lg-d1 position-relative top-n6 top-lg-0 actions-pricing-private">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-block">
                                    <h1 className="">Speak to our expert</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
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
                                                <div className="form-group col-md-3">
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
                                                <div className="form-group col-md-3">
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
                                                <div className="form-group col-md-3">
                                                    <Phone phone={values.phone} change={handleChange}/>
                                                    <span className="text-danger">{errors.phone}</span>
                                                </div>
                                                <div className="form-group col-md-3">
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
                                                <div className="form-group col-md-12">
                                                    <textarea
                                                        className="form-control"
                                                        name="message"
                                                        placeholder="Message"
                                                        value={values.message}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="text-danger">{errors.message}</span>
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
        </div>
    </section>
    
  );
};

export default SpeaktoExpert;
