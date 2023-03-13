import React from 'react';

import FormLg from '../../components/Formlg/FormLg';
import './formLogin.css'

function FormAuthor() {
    return (
        <div>
          
            <div className='conteiner'>
            <div className='conteiner-img'>
			<img className="img-form" src="./imgs/loginImg.png" alt="Img-Pagina-Form" />
			</div>
			<div className='conteiner-form'>
            <FormLg />
			</div>	
			
            </div>
        </div>
    );
}

export default FormAuthor;