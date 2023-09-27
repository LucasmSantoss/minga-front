import React from 'react';

import FormLg from '../../components/Formlg/FormLg';
import './formLogin.css'

function FormAuthor() {
    return (
        <div className='form-lg'>
            <div>
			<img className="img-form" src="./imgs/formImg.png" alt="Img-Pagina-Form" />
			</div>
			<div className='form-lg'>
            <FormLg />
			</div>	
        </div>
    );
}

export default FormAuthor;