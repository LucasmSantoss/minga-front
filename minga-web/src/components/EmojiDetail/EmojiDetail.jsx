import React from 'react'
import './emojidetail.css'
import Like from '../../images/icon3.png'
import Dislike from '../../images/icon4.png'
import Sorprice from '../../images/icon2.png'
import Loveit from '../../images/icon.png'

export default function ChapterEmoji() {
  return (
    <>
    <section className='contain-emoji'>
        <img className='emojis' src={Like} alt="like" />
        <img className='emojis' src={Dislike} alt="dislike" />
        <img className='emojis' src={Sorprice} alt="sorprice" />
        <img className='emojis' src={Loveit} alt="loveit" />
    </section>
    <section className='details'>
        <div className='rating'>
            <div className='rectangle-text'>
                <p className='text1'>4.5/5</p>
                <p className='text2'>Rating</p>
            </div>
            <p className='text3'> | </p>
            <div className='chapters'>
                <p className='text1'>265</p>
                <p className='text2'>Chapters</p>
            </div>
            <p className='text3'> | </p>
            <div className='lenguaje'>
                <p className='text1'>Eng</p>
                <p className='text2'>Lenguaje</p>
            </div>
        </div>
    </section>
</>
  )
}