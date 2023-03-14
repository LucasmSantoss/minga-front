import React from 'react'
import "./MangasCards.css"
import { useEffect } from 'react'
import mangasActions from "../../store/Mangas/actions"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'

export default function MangasCards() {
  let text = useSelector(store => store.text.text)
  let order = useSelector(store => store.order.order)
  let page = useParams().page
  let mangas = useSelector(store => store.mangas.mangas)
  let categories = useSelector(store => store.categories.categories)
  
  const { readMangas } = mangasActions
  const dispatch = useDispatch()

  let token = localStorage.getItem("token")
  let headers = { headers: { "Authorization": `Bearer ${token}`}}

  useEffect(() =>{
    dispatch(readMangas({page: page, inputText: text, categories, headers}))
  }, [page, text, categories, order])
  return (
    <div className='mangas-cards'>
    {
        mangas.length ? mangas.map((manga, i) => {
            let card = <Anchor className='card-anchor' to={'/mangas/'+manga._id+"/1"} key={i}>
                <section className='card'>
                    <div className='card-text'>
                        <div className='card-color'></div>
                        <div className='text'>
                            <h2>{manga.title}</h2>
                            <span>{manga.category_id.name}</span>
                        </div>
                    </div>
                    <div className='card-img'>
                        <img className='imgcard' src={manga.cover_photo} alt='manga-image' />
                    </div>
                </section>
            </Anchor>
            return card
        }) : <h2>Mangas not found</h2>
    }
</div>
  )
}

