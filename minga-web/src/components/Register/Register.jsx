import React from 'react';
import Form from '../Form/Form'
import Header from '../Header/Header';
import './register.css'

function Register() {
    return (
        <div>
			<Header/>
            <div className='conteiner'>
			
			<div className='conteiner-form'>
			
			<Form/>
			</div>	
			<div className='conteiner-img'>
			<img className="img-form" src="./imgs/formImg.png" alt="Img-Pagina-Form" />
			</div>
		</div>
        </div>
    );
}

export default Register;