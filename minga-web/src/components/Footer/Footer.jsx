// import React from 'react';
// import './footer.css'

// function Footer(props) {
//     return (
//         <div>
//             <div>
//                 <img src="./imgs/img-Footer.png" alt="One-Piece-Footer" />
//             </div>
//             <div className='Subscribe'>
//                 <div>
//                     <h2> Subscribe </h2>
//                     </div>
//                     <div>
//                     <fieldset >
//                         <input type="email" placeholder='Enter your email' />
//                         <button id="buttonSubscribe"type="submit"> <p> Subscribe Now </p>  </button>
//                     </fieldset>
//                     </div>
//             </div>
//             <div className='lastPartFooter'>
//                 <div>
//                     <a id="ancorHome-Comics" href="">Home</a>
//                     <a id="ancorHome-Comics" href="">Comics</a>
//                 </div>
//                 <div >
//                     <img id="logo" src="./imgs/logoIgna.png" alt="Logo-Inga" />
//                 </div>
//                 <div>
//                 <div className='divSocials'>
//                    <a href=""> <img id="ancorSocials" src="./form-img/Facebook.png" alt="Facebook" /></a>
//                    <a href=""> <img  id="ancorSocials" src="./form-img/Twitter.png" alt="Twitter" /></a>
//                    <a href="">  <img  id="ancorSocials" src="./form-img/Vimeo.png" alt="Vimeo" /></a>
//                    <a href="">  <img  id="ancorSocials"  src="./form-img/Youtube.png" alt="Youtube" /></a>
//                    </div>
//                     <div>
//                         <button id="buttonDonate" type='submit'> <p>Donate</p>  <img src="./form-img/Union.png" alt="Union" /></button>
//                     </div>
//                     <hr />
//                 </div>
               
//             </div>
//         </div>
//     );
// }

// export default Footer;


import React from 'react';
import ImageFooter from '../ImageFooter/ImageFooter';
import './footer.css'


export default function Footer() {
  return (

   <div>
        <ImageFooter/>
     <div className='footer-container'>

<div className='suscribe'>
  <h3>Subscribe</h3>
  <form> 
  <fieldset>  
    <input type="mail" placeholder='Enter your email' />
    <button type="submit"className='suscribe-Now'> Subscribe Now</button>
  </fieldset>
  </form>
</div>


<div className='footer'>
  <div className='footer-enlaces'>
    <a href="#">Home</a>
    <a href="#">Mangas</a>
  </div>

  <div className='footer-logo'>
  <img src="./imgs/logoIgna.png" alt="Logo" />
  </div>

  <div className='redes-button'>
    <div className='redes-sociales'>
      <a href="#"><img src="./form-img/Facebook.png" alt="Facebook" /></a>
      <a href="#"> <img src="./form-img/Twitter.png" alt="Twitter" /></a>
      <a href="#"> <img src="./form-img/Vimeo.png" alt="Vimeo" /></a>
      <a href="#"> <img src="./form-img/Youtube.png" alt="Youtube" /></a>
    </div>

    <button type="submit"className='suscribe-donate'> Donate <img src="./form-img/Union.png" alt="donate" /></button>
  </div>
</div>
<div className='hr'>
  <hr />
</div>

</div>
   </div>
  )}