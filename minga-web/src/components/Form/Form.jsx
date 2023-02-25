import React, { useRef } from "react";
import "./form.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios from "axios";

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const emailNotificationRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      "confirm-password": confirmPasswordRef.current.value,
      "email-notification": emailNotificationRef.current.checked,
    };

    try {
      const response = await axios.post("http://localhost:8080/users", data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-fondo">
      <div className="register">
        <Wellcome />
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input type="text" name="name" id="name" ref={nameRef} />
            <Image src="./form-img/profile.svg" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input type="email" name="email" id="email" ref={emailRef} />
            <Image src="./form-img/@.svg" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" id="password" ref={passwordRef} />
            <Image src="./form-img/lock1.svg" />
          </fieldset>
          <fieldset>
            <legend>Confirm Password</legend>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              ref={confirmPasswordRef}
            />
            <Image src="./form-img/lock1.svg" />
          </fieldset>
          <fieldset className="notification-check">
            <input
              type="checkbox"
              name="email-notification"
              id="email-notification"
              ref={emailNotificationRef}
            />
            <label htmlFor="email-notification">Send notification to my email</label>
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
