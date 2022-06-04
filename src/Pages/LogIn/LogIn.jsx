import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import UerServices from "../../services/UserServices";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    UerServices.login(values.email, values.password)
      .then((e) => {
        toast.success("🦄!" + "Login Successfully", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/home");
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
      <div></div>
      <div class="weblogintop">
        <h1 class="webmaintitle">BOOKBAZAR</h1>
        <h3>Urdu Bazar in Your Hands</h3>
      </div>
      <div class="ttp">
        <h3>Welcome to BookBazar! Please enter details</h3>
      </div>
      <Formik
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleFormSubmit}
      >
        {({ values, isSubmitting, validateForm, setTouched }) => (
          <Form>
            <div class="centerlayout">
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
            </div>

            <div class="btnalign">
              <button type="submit" class="WebLoginbtn">
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div class="footercard">
        <div class="dividerline"></div>
        <div class="WebSignUp">
          <h3>Don't Have An Account?</h3>
          <a onClick={() => navigate("/SignUp")} style={{ cursor: "pointer" }}>
            SIGN UP HERE!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
