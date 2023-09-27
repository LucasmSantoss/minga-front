import React, { useRef } from "react";
import "./formLg.css";
import Image from "../Image/Image";
import H2 from '../H2/H2'
import ImgLogoForm from '../ImgLogoForm/ImgLogoForm'
import axios from "axios";
import Swal from 'sweetalert2'

export default function Form() {
  
  const emailRef = useRef();
  const passwordRef = useRef();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
      
        [emailRef.current.name]: emailRef.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
    }
    
    let url = 'https://minga-grupoblanco.onrender.com/api/signin/'
    

    let admin
    try {
      await axios.post(url, data)
        .then(res => {
          res.data.user.is_admin ? (admin=true) : (admin=false)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify({
            id: res.data.user._id,
            name: res.data.user.name,
            mail: res.data.user.mail,
            photo: res.data.user.photo,
            admin
          }))
          setInterval(() => window.location.href = '/', 1000)
        })
        Swal.fire({
          title: 'Loggin success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        event.target.reset()
    } catch(error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Credentials! ',
          
        })
    }

}

  return (
      <div className="register-lg">
      <section className='welcome-section'>
            <ImgLogoForm src="./imgs/logoIgna.png"/>
            <H2 text='Welcome!'/>
            <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
        </section>
        <form className="formlg"  onSubmit={handleSubmit}>
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
          <div className="buttons-container">
          <div>
            <button type="submit" className="sign-up">
              Sign up
            </button>
          </div>
          <div>
          <a href="#" className="sign-in-google">
            <Image src="./form-img/Google.svg" />
            <span>Sign in with Google</span>
          </a>
          </div>
          </div>
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
  );
}
