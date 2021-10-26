import React, { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useToasts, ToastProvider } from "react-toast-notifications";

const WhoCanAsk = () => {
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
    <section className="who-can-section">
        <div className="container wide-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="overflow-hidden">
                        <div className="row row-after">
                            <div className="col-lg-11 offset-md-1">
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <div class="circle-white"></div>
                                    <div class="title-block">
                                        <p>MENT TECH</p>
                                        <h1><span class="gradient-text-red">Who can i talk to if i have questions?</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <a className="white-bg d-block rounded-2 box-shadow-card hover-grow position-relative no-underline overflow-hidden p-4">
                                        <h3>Chat with sales</h3>
                                        <p className="mb-0">Start chat</p>
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="tel:" className="white-bg d-block rounded-2 box-shadow-card hover-grow position-relative no-underline overflow-hidden p-4">
                                        <h3>Call sales</h3>
                                        <p className="mb-0">Call now</p>
                                    </a>
                                </div>
                                <div className="col-lg-3">
                                    <a href="#" onClick={handleTechnicalShow}  className="white-bg d-block rounded-2 box-shadow-card hover-grow position-relative no-underline overflow-hidden p-4">
                                        <h3>Let us contact you</h3>
                                        <p className="mb-0">Send a contact request</p>
                                    </a>
                                </div>
                            </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
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
                                  <input
                                      className="form-control"
                                      type="text"
                                      name="phone"
                                      placeholder="Phone"
                                      value={values.phone}
                                      onChange={handleChange}
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
                              <div className="form-group col-12">
                                  <input
                                    type="checkbox"
                                    name="toggle"
                                    value={values.toggle}
                                    onChange={handleChange}
                                  />
                                  <label>&nbsp; I agree to get useful news, inspiration, and offers via e-communication.</label>
                                  <span className="text-danger">{errors.toggle}</span>
                              </div>
                              <div className="form-group col-12 d-flex">
                                  <input
                                      type="checkbox"
                                      name="toggle"
                                      value={values.toggle}
                                      onChange={handleChange}
                                  />
                                  <label>&nbsp; I agree to the Privacy Policy and consent that MENT can use the above information to contact me.</label>
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

export default WhoCanAsk;
