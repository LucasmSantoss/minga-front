import React from 'react';

import Author from '../Author/Author';
import './formAuthor.css'

function FormAuthor() {
    return (
        <div>
        
            <div className='conteiner'>
			<div className='conteiner-form'>
            <Author />
			</div>	
			<div className='conteiner-img'>
                <div>
                <p className='description'>
                Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.   
                </p>
                <p className='igna'>
                <img src="./imgs/line.png" alt="line" />
                 Ignacio Borraz
                </p>
        </div>  
            
			</div>
            </div>
        </div>
    );
}

export default FormAuthor;