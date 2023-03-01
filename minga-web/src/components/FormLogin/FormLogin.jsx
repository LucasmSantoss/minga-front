import React from 'react';
import Header from '../Header/Header';
import FormLg from '../Formlg/FormLg';
import './formLogin.css'

function FormAuthor() {
    return (
        <div>
            <Header />
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