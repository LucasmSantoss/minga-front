import React from 'react'
import "./mangas.css"
import MangaUp from '../../components/MangaUp/MangaUp'
import MangasCategory from '../../components/MangasCategory/MangasCategory'
import MangasTypes from '../../components/MangasTypes/MangasTypes'
import MangasCards from '../../components/MangasCards/MangasCards'

export default function Mangas() {
  return (
    <div className='divprincipal'>
        <MangaUp/>
        <section className='sectionDown'>    
              <h2 className='h2Explore'><b>Explore</b></h2>
               <MangasCategory/>
               <MangasTypes/>
               <MangasCards/>
        </section>
    </div>
  )
}