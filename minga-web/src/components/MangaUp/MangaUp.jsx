import React from 'react'
import "./MangaUp.css"
import { useRef } from 'react'
import textActions from '../../store/Search/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function MangaUp() {
  const search = useRef()
  const dispatch = useDispatch()
  const {captureText} = textActions

  function handleSearch(){
    dispatch(captureText({inputText: search.current[0].value})) 
  }
  let text = useSelector(store => store.text.text)

  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <section className='sectionUp'>
            
            <h1 className='h1Mangas'>Mangas</h1>
            <div className='Search'>
              <div className='imgSearch'></div>
              <form ref={search} onSubmit={handleSubmit}>
                <input className='inputSearch' type="text" placeholder='Find your manga here' onChange={handleSearch} defaultValue={text}/>
              </form>
            </div>
    </section>
  )
}

