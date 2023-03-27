import React from 'react'
import "./mangas.css"
import MangaUp from '../../components/MangaUp/MangaUp'
import MangasCategory from '../../components/MangasCategory/MangasCategory'
import MangasTypes from '../../components/MangasTypes/MangasTypes'
import MangasCards from '../../components/MangasCards/MangasCards'
import MangasBottom from "../../components/MangasBottom/MangasBottom"

export default function Mangas() {
  return (
    <div className='divprincipal'>
        <section className='mangaUp'>
          <MangaUp/>
        </section>
        <section className='sectionDown'>
              <h2 className='h2Explore'><b>Explore</b></h2>
               <MangasCategory/>
               <MangasTypes/>
               <MangasCards/>
               <MangasBottom/>
        </section>
    </div>
  )
}