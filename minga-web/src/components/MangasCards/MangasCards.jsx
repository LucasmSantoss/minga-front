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
  console.log(mangas)
  const { read_mangas } = mangasActions
  
  const dispatch = useDispatch()

  let token = localStorage.getItem("token")
  let headers = { headers: { "Authorization": `Bearer ${token}` }}

  useEffect(() =>{
    dispatch(read_mangas({page: page, inputText: text, categories: categories,order: order, headers}))
  }, [page , text, categories , order])
  console.log(mangas)
  return (
    <div className='mangas-cards'>
   { mangas ?   
        mangas.length ? mangas.map((manga, i) => {

            let card =
                <section className='card' key={i}>

                    <div className='card-text'>
                        <div className={'cardColor-'+manga.category_id.name}></div>
                        <div className='divTextRead'>
                        <div className='text'>
                            <h2>{manga.title}</h2>
                            <span className={'span-'+manga.category_id.name}>{manga.category_id.name}</span>
                        </div>
                        <Anchor className='card-anchor' to={'/manga/'+manga._id+"/1"}>Read</Anchor>
                        </div>
                    </div>
                    <div className='card-img'>
                        <img className='imgcard' src={manga.cover_photo} alt='manga-image' />
                    </div>
                </section>
            return card
        }) : <h2>Mangas not found</h2>
    : " "}
</div>
  )
}

