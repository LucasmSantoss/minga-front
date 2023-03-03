// import React from 'react';

// import Author from '../../components/Author/Author';
// import './formAuthor.css'

// function FormAuthor() {
//     return (
//         <div>
        
//             <div className='conteiner'>
// 			<div className='conteiner-form'>
//             <Author />
// 			</div>	
// 			<div className='conteiner-img'>
//                 <div>
//                 <p className='description'>
//                 Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.   
//                 </p>
               
//         </div>  
         
//         <p className='igna'>
//         <img  id="line" src="./imgs/line.png" alt="line" />
//                  Ignacio Borraz
//                 </p>    
// 			</div>
            
//             </div>
           
//         </div>
//     );
// }

// export default FormAuthor;

import React from 'react'
import './formAuthor.css'
import { useState } from 'react'
import Register from '../Register/Register'
import FormLogin from '../FormLogin/FormLogin'
import { useEffect } from 'react'

export default function Auth1({state}) {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(state)
  },[state])

  function renderRegister(){
    handleRender('register')
  }

  function renderFormLogin(){
    handleRender('login')
  }

  function handleRender(btn){
    setRender(btn)
  }

  return (
    <div className='auth'>
      { !render ? <Register renderFormLogin={renderFormLogin} /> : "" }
      { render === 'register' ? <Register renderFormLogin={renderFormLogin}/> : "" }
      { render === 'login' ? <FormLogin renderRegister={renderRegister} /> : "" }
    </div>
  )
}
