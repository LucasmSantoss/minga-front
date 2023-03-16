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
        <section className='sectionUp'>
            
            <h1 className='h1Mangas'>Mangas</h1>
            <div className='Search'>
              <img className='imgsearch' src="../../public/imgs/Search.svg" alt="" />
              <form>
                <input className='inputSearch' type="search" placeholder='Find your manga here'/>
              </form>
            </div>
        </section>
        <section className='sectionDown'>
          <h2>Explore</h2>
          <div className='cat1'><p>Adventures</p></div>
          <div className='cat2'><p>Nostalgic</p></div>
          <div className='cat3'><p>Popular</p></div>
          </section>
        <MangaUp/>
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