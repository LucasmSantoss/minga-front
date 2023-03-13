import React from 'react'
import './titledetail.css'
import ImgNaruto from '../../images/naruto.png'
import H2 from '../../components/H2/H2'
import ButtonCategory from '../ButtonCategory/ButtonCategory'

export default function ChapterTitle() {
    return (

        <>
            <section className='section1'>
                <img src={ImgNaruto} className='img-part-one' alt="img-naruto" />
                <H2 text='Naruto: And Thats Why Youre Disqualified!! #8' />
            </section>
            <section className='section2' >
                <ButtonCategory style='shonen' text='Shōnen'/>
                <h2 className='companyName'>   Company Name</h2>
            </section>
        </>

    )
}