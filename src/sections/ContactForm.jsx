import { Formik, Field } from "formik";
import BigRocket from "../assets/BigRocket.png";
import { contactFormInitialValues, mailRegex } from "../utils/constants";
import { contactSchema } from "../utils/yupSchemas";
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import axios from "axios";
import { useState } from "react";
import Spinner from "../components/Spinner";

export default function ContactForm() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [requestResponse, setRequestResponse] = useState({
    status: 0,
    message: "",
  });

  const submitForm = async (values, setErrors, resetForm) => {
    if (!mailRegex.test(values.email)) {
      setErrors({
        email: "Please enter a valid email address",
      });
    } else {
      setShowSpinner(true);
      const { name, email, message } = values;

      const data = {
        name,
        email,
        message,
      };

      try {
        const result = await axios.post(
          `${import.meta.env.VITE_API_DOMAIN}/send`,
          data
        );

        if (result.status === 200) {
          setRequestResponse({
            status: 200,
            message: result.data.message,
          });

          resetForm();
        }
      } catch (error) {
        setRequestResponse({
          status: 500,
          message: "Something went wrong, please try again later",
        });
      }

      setShowSpinner(false);
    }
  };

  return (
    <section className="bg-primary-yellow relative py-16 w-full" id="contact-form">
      <div className="lg:!container px-4 flex flex-col items-start gap-9 mx-auto">
        <h2 className="text-white lg:!text-[3.75rem] lg:!leading-[3.438rem] font-bold">
          Are you ready <br /> to board this rocket ship?
        </h2>
        <p className="description !text-white leading-[1.25rem]">
          Share your excitement with us.
        </p>
        <div className="shadow-works bg-form w-full max-w-[37.5rem] px-[2.563rem] pt-[4.5rem] pb-[2.5rem] rounded-lg">
          <Formik
            initialValues={contactFormInitialValues}
            validationSchema={contactSchema}
            validateOnBlur={false}
            onSubmit={(values, { setErrors, resetForm }) =>
              submitForm(values, setErrors, resetForm)
            }
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  type="text"
                  placeholder="Name*"
                  className={`formInput ${
                    errors.name && touched.name && values.name.length === 0
                      ? "errorInput"
                      : ""
                  }`}
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorMessageComponent name="name" />
                <Field
                  type="email"
                  placeholder="Email*"
                  className={`formInput ${
                    errors.email && touched.email && values.email.length === 0
                      ? "errorInput"
                      : ""
                  }`}
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessageComponent name="email" />
                <textarea
                  rows={3}
                  name="message"
                  id="message"
                  className={`formInput resize-none !h-[16.875rem] ${
                    errors.message &&
                    touched.message &&
                    values.message.length === 0
                      ? "errorInput"
                      : ""
                  }`}
                  placeholder="Message*"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessageComponent name="message" />

                {showSpinner ? (
                  <div className="flex justify-center">
                    <Spinner />
                  </div>
                ) : (
                  <div className="flex flex-col justify-center">
                    {requestResponse.status === 200 ? (
                      <p className="text-center">{requestResponse.message}</p>
                    ) : (
                      <>
                        <button
                          type="submit"
                          className="headerButton2 !text-white mt-[2.125rem] !bg-navbar !border-navbar hover:!bg-[#2a3a44] duration-300 mx-auto"
                        >
                          Shoot us a message
                        </button>
                        <p className="text-center">{requestResponse.message}</p>
                      </>
                    )}
                  </div>
                )}
              </form>
            )}
          </Formik>
        </div>
        <img
          src={BigRocket}
          alt="Big Rocket"
          className="h-[6.25rem] w-full block lg:hidden object-contain"
        />
      </div>
      <img
        src={BigRocket}
        alt="Big Rocket"
        className="absolute bottom-0 right-[6.973rem] hidden lg:block max-w-[50%] h-auto mxa-h-[50%] object-contain"
      />
    </section>
  );
}
