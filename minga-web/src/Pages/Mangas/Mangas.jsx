import React from 'react'
import "./mangas.css"

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
    </div>
  )
}