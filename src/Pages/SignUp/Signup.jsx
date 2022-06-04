import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import UerServices from "../../services/UserServices";
const SignUp = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (value) => {
    UerServices.Register(
      value.name,
      value.email,
      value.password,
      value.confirmPassword
    )
      .then((e) => {
        toast.success("🦄!" + "Account Created", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      })
      .catch((e) => {
        toast.error("🦄!" + e.error, {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div class="webloginsection">
      <div class="weblogintop">
        <h1>BOOKBAZAR</h1>
      </div>
      <div>
        <h3 class="webmaintitle">Sign-Up</h3>
      </div>
      <Formik
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
          name: Yup.string().required("name is required"),
          confirmPassword: Yup.string().test(
            "passwords-match",
            "Passwords must match",
            function (value) {
              return this.parent.password === value;
            }
          ),
        })}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleFormSubmit}
      >
        {({ values, isSubmitting, validateForm, setTouched }) => (
          <Form>
            <div class="centerlayout">
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                class="LoginInput"
              />
              <ErrorMessage
                component="div"
                name="name"
                className="errorField"
              />
              <br />
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                class="LoginInput"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="errorField"
              />
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                class="LoginInput"
              />
              <ErrorMessage
                component="div"
                name="password"
                className="errorField"
              />
              <br />
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-Password"
                class="LoginInput"
              />
              <ErrorMessage
                component="div"
                name="confirmPassword"
                className="errorField"
              />
              <br />
            </div>
            <div class="btnalign">
              <button type="submit" class="WebLoginbtn btn">
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div class="footercard">
        <div class="dividerline"></div>
        <div class="WebSignUp">
          <h3>Already Have An Account?</h3>
          <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            LOGIN HERE!
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
