import React from 'react'
import './myReactions.css'
import MangasTypes from '../../components/MangasTypes/MangasTypes'
import FavouritesMangasCards from '../../components/FavouritesMangasCards/FavouritesMangasCards'
import FavouritesMangasBtns from '../../components/FavouritesMangasBtns/FavouritesMangasBtns'
import { Link as Anchor } from 'react-router-dom'

export default function MyReactions() {
  let token = localStorage.getItem('token')

  return (
    <>
      {
        token ? <div className='mangas'>
        <div className='favouritesMangas-title'>
            <h2>Favourites</h2>
        </div>
        <div className='divprincipal'>
        <section className='sectionDown'>
      <section className='mangas-displayed'>
        <MangasTypes />
        <FavouritesMangasCards />
        <FavouritesMangasBtns />
      </section>
      </section>
      </div>
    </div> : <div className='noLogged'><Anchor to='/auth'>Please Register or Login</Anchor></div>
      }
    </>
  )
}
