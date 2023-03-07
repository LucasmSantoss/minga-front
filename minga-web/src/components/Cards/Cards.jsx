import React from 'react'
import ButtonCategory from '../ButtonCategory/ButtonCategory'
import './cards.css'

export default function () {
  return (
    <div className='div-card'>
        <div className='div-text'>
            <h2>Superman Comic</h2>
            <p>Type</p>
            <ButtonCategory style='read' text='Read' />
        </div>
        <div className='div-img'>
            <img src="./imgs/superman.jpg" alt="superman-comic" />
        </div>
    </div>
  )
}
