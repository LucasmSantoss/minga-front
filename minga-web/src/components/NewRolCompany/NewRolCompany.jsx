import React from 'react'
import './newRolCompany.css'
import { Link as Anchor } from 'react-router-dom'
import img1 from '../../images/Ellipse 3 (1).png'
import img2 from '../../images/Ellipse 4 (1).png'
import img3 from '../../images/Ellipse 5 (1).png'


export default function NewRoleCompany() {
    return (
        <>
            <Anchor to={'/create-company'}className='text-author'>
                <div className='cont-company'>
                    <div className='profiles'>
                        <img id='img-profile' src={img1} alt='img'/>
                        <img id='img-profile1' src={img2} alt= 'img'/>
                        <img id='img-profile' src={img3} alt= 'img'/>
                    </div>
                    <div className='selec-company'>
                        <h3>Join as an Company!</h3>
                        <p>I'm a company and I want to publish my comics</p>
                    </div>

                </div>
            </Anchor>
        </>
    )
}