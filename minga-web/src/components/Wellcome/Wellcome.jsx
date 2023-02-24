import React from 'react'
import './wellcome.css'
import H2 from '../H2/H2'
import ImgLogoForm from '../ImgLogoForm/ImgLogoForm'

export default function Wellcome() {
    return (
        <section className='welcome-section'>
            <ImgLogoForm src="./imgs/logoIgna.png"/>
            <H2 text='Welcome!'/>
            <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
        </section>
    )
}