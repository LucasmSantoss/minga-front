import React from 'react'
import './newRolAuthor.css'
import { Link as Anchor } from 'react-router-dom'
import img1 from '../../images/companyImg.png'
import img2 from '../../images/Ellipse 4.png'
import img3 from '../../images/Ellipse 5.png'

export default function NewRoleAuthor() {
    return (
        <>
            <Anchor to={'/api/authors'} className='text-author'>
                <div className='cont-author'>
                    <div className='profiles'>
                        <img id='img-profile' src={img1} alt='img' />
                        <img id='img-profile1' src={img2} alt='img' />
                        <img id='img-profile' src={img3} alt='img' />
                    </div>

                    <div className='selec-author'>
                        <h3 >Join as an Author!</h3>
                        <p>I'm a reader writting a manga</p>
                    </div>
                </div>
            </Anchor>
        </>
    )
}