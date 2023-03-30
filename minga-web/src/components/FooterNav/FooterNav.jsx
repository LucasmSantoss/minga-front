import React from 'react'
import axios from 'axios'
import './footerNav.css'
import Image from '../Image/Image'
import logo from '../../images/logoIgna.png'
import facebook from '../../images/facebook-black.svg'
import twitter from '../../images/twitter-black.svg'
import vimeo from '../../images/vimeo-black.svg'
import youtube from '../../images/youtube-black.svg'
import Union from "../../images/Union.png"
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'

export default function FooterNav() {
    let token = localStorage.getItem("token")
    let headers = { headers: { "Authorization" : `Bearer ${token}` }}

    let [renderModal, setRenderModal] = useState(false)

    const donations = [
        {
            id: 0,
            title: "Donate $1000",
            currency_id: "ARS",
            price: 1000,
            quantity: 1
        },
        {
            id: 1,
            title: "Donate $5000",
            currency_id: "ARS",
            price: 5000,
            quantity: 1
        },
        {
            id: 2,
            title: "Donate $10000",
            currency_id: "ARS",
            price: 10000,
            quantity: 1
        },
    ];

    function handleDonate(donate) {
        let donateData = donations.filter( donation => donation.id == donate.target.id)
        axios.post("https://minga-grupoblanco.onrender.com/api/donate", donateData, headers)
            .then( res => window.location.href = res.data.response.body.init_point);           
    }

    function handleOpen(){
        setRenderModal(!renderModal)
    }
    function handleClose(){
        setRenderModal(!renderModal)
    }

    return (
        <>
        <nav>
            <div className='pages'>
                <Anchor to='/index'>Home</Anchor>
                <Anchor>Mangas</Anchor>
            </div>
            <div className='logo-container'>
                <Image src={logo} alt='logo' />
            </div>
            <div className='social-container'>
                <div className='social'>
                    <Anchor to='#'><Image src={facebook} alt='facebook logo' /></Anchor>
                    <Anchor to='#'><Image src={twitter} alt='twitter logo' /></Anchor>
                    <Anchor to='#'><Image src={vimeo} alt='vimeo logo' /></Anchor>
                    <Anchor to='#'><Image src={youtube} alt='youtube logo' /></Anchor>
                </div>
                <Anchor to='#' className='donate' onClick={handleOpen}>Donate <Image src={Union} alt="Heart"/></Anchor>
            </div>
        </nav>
        {renderModal ? <div className='modal'>
            <div className='donateCard'>
                <h2>Collaborate so that Minga can continue to work!</h2>
                <div className='modal-bottom'>
                    {
                        donations.map( (donation,i) =>{
                            let card = <p id={donation.id} className='donateBtn' key={i} onClick={handleDonate}>{donation.title}</p>
                            return card
                        })
                    }
                </div>
                <p className='donate-close' onClick={handleClose}>Cancel</p>
            </div> 
        </div> : "" }
        </>
    )
}
