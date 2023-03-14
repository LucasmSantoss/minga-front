import React from 'react'
import "./MangaUp.css"

export default function MangaUp() {
  return (
    <section className='sectionUp'>
            
            <h1 className='h1Mangas'>Mangas</h1>
            <div className='Search'>
              <div className='imgSearch'></div>
              <form>
                <input className='inputSearch' type="search" placeholder='Find your manga here'/>
              </form>
            </div>
    </section>
  )
}

