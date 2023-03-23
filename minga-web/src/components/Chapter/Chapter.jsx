import React from 'react'
import './chapter.css'
import { useSelector } from 'react-redux';


export default function Chapter() {
    let chapter = useSelector(store => store.chapters.chapter)
    let mangas = useSelector(store => store.mangas.manga)
    console.log(chapter)
    console.log(mangas)

    return (
        <div className='chapter'>
            {chapter.title? <h2> Chapter # {`${chapter.order} - ${chapter.title}`}</h2> : ''}
            <img src={mangas.cover_photo}/>
        </div>
    )
}