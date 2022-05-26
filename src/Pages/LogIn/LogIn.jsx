import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from "formik"; 
import * as Yup from "yup";
const Login = () => {
    const navigate=useNavigate();
    const handleFormSubmit=(values)=>{
console.log(values);
    }
    return (  
        <div class="webloginsection">
        <div>
      
        </div>
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
            <Field type="email" id="email" name="email" placeholder="Username or Email" class="LoginInput"/><br/>
            <Field type="password" id="password" name="password" placeholder="Password" class="LoginInput"/><br/>
        </div>
    
        <div class="btnalign">
            <button type="button" class="WebLoginbtn" >Login</button>
        </div>
        </Form>
          )}
        </Formik>
        <div class="footercard">
      
        <div class="dividerline"></div>
        <div class="WebSignUp">
            <h3>Don't Have An Account?</h3>
            <a onClick={()=>navigate("/SignUp")} style={{cursor:"pointer"}}>SIGN UP HERE!</a>
        </div>
    </div>
    </div>
    );
}
 
export default Login;