import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
      .email("Enter a Valid Email")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Data:", values);
    toast.success("Form Submitted 😊");
    resetForm();
  };

  return (
    <>
      <Navbar />

      <div className="container py-5" id="contact">
        <h2 className="title fw-bold text-center py-5 text-white">
          Contact
          <span
            className="d-block mx-auto mt-2"
            style={{
              height: "3px",
              width: "58px",
              backgroundColor: "#FDC435",
              borderRadius: "30px",
            }}
          ></span>
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, isValid, dirty }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (!dirty || !isValid) {
                  toast.error("Please Fill the form 😒");
                }
                handleSubmit(e);
              }}
              className="mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <div className="mb-3">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                />
                <ErrorMessage
                  name="name"
                  component="small"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  className="form-control"
                />
                <ErrorMessage
                  name="message"
                  component="small"
                  className="text-danger"
                />
              </div>

              <div className="text-center text-md-end">
                <button
                  type="submit"
                  className="bg-warning text-white border-0 fw-semibold fs-6 px-4 py-2 rounded subtitle"
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Contact;
