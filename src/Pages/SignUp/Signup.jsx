import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik"; 
import * as Yup from "yup";
const SignUp = () => {
    const navigate=useNavigate();
    const handleFormSubmit=(value)=>{
console.log(value);
    }
  return (
    <div class="webloginsection">
      <div>
       
      </div>
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
                    password: Yup.string().required("Password is required"),
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
        <button type="submit" class="WebLoginbtn" >
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
          <a onClick={()=>navigate("/")} style={{cursor:"pointer"}}>LOGIN HERE!</a>
        </div>
      </div>
    

    </div>
  );
};

export default SignUp;
