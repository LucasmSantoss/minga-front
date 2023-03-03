import React, { useRef } from "react";
import "./formLg.css";
import Wellcome2 from "../Wellcome2/Wellcome2";
import Image from "../Image/Image";
import axios from "axios";


export default function Form() {
  
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
      
        [emailRef.current.name]: emailRef.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
    }
    
    let url = 'http://localhost:8080/auth/signin'
    
    try {
        await axios.post(
            url,    /* URL del endpoint para crear una categoria */
            data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
        )
        
        alert("Successful registration")
        event.target.reset()
    } catch(error) {
        console.log(error)
        console.log('ocurrio un error')
    }

}

  return (
    <div className="register-fondo">
      <div className="register">
        <Wellcome2 />
        <form className="form"  onSubmit={handleSubmit}>
          <fieldset>
            <legend>Email</legend>
            <input type="email" name="mail" id="mail" ref={emailRef}  required />
            <Image src="./form-img/@.svg" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" id="password" ref={passwordRef}  required />
            <Image src="./form-img/lock1.svg" />
          </fieldset>
          
          <div>
            <button type="submit" className="sign-up">
              Sign up
            </button>
          </div>
          <a href="#" className="sign-in-google">
            <Image src="./form-img/Google.svg" />
            <span>Sign in with Google</span>
          </a>
          <p>
            Already have an account?{" "}
            <a href="#" className="link">
              Log in
            </a>
          </p>
          <p>
            Go back to{" "}
            <a href="#" className="link">
              home page
            </a>
          </p>
        
        </form>
      </div>
    </div>
  );
}
