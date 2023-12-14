import React, { useRef } from "react";
import "./form.css";
import Wellcome from "../Wellcome/Wellcome";
import Image from "../Image/Image";
import axios from "axios";
import Swal from 'sweetalert2'

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const photo = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
        [nameRef.current.name]: nameRef.current.value,
        [emailRef.current.name]: emailRef.current.value,
        [photo.current.name]: photo.current.value,
        [passwordRef.current.name]: passwordRef.current.value,
    }
    
    
    let url = 'https://minga-grupoblanco.onrender.com/api/signup'
    console.log(data)

    if (data.name.length < 3) {
      Swal.fire('Name must be at least 3 characters long');
      return;
    }
  
    if (data.password.length < 8) {
      Swal.fire('Password must be at least 8 characters long');
      return;
    }
    try {
        await axios.post(
            url,    /* URL del endpoint para crear una categoria */
            data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
        )
       
        Swal.fire({
          title: 'User successfully created',
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
          text: 'Something went wrong Check that inputs are corrects! ',
          
        })
        console.log('ocurrio un error')
    }

}

  return (
    <div className='conteiner-form'>
   
      <div className="register">
        <Wellcome />
        <form className="form"  onSubmit={handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <input type="text" name="name" id="name" ref={nameRef} required 
            />
            <Image src="./form-img/profile.svg" />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input type="email" name="mail" id="mail" ref={emailRef}  required />
            <Image src="./form-img/@.svg" />
          </fieldset>
          <fieldset>
            <legend>Photo</legend>
            <input
              type="url"
              name="photo"
              id="photo"
              ref={photo}
              required
              pattern="https?://.+"
            />
            <Image src="./form-img/camera.svg" />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" id="password" ref={passwordRef}  required />
            <Image src="./form-img/lock1.svg" />
          </fieldset>
        
          <fieldset className="notification-check">
            <input
              type="checkbox"
              name="email-notification"
              id="email-notification"
              
            />
            <label htmlFor="email-notification">Send notification to my email</label>
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
     
      <div className='conteiner-img'>
			<img className="img-form" src="./imgs/formImg.png" alt="Img-Pagina-Form" />
			</div>
    </div>
  );
}