import React, { useEffect, useState } from 'react'
import './detailbuttons.css'
import { Link as Anchor, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import comment from '../../images/comment.png'
import actions from '../../store/Detail/actions'
import action from '../../store/Capture/actions'

const { captureChapter } = actions;
const {captureState} = action

export default function DetailButtons({ info }) {
  const page = Number(useParams().page)
  const dispatch = useDispatch()
  const [pagination, setPagination] = useState(page)
  const [capitulo, setCapitulo] = useState(true)

  let chapters = useSelector(store => store.manga.chapter)
  console.log(chapters)

  let check = useSelector(store => store.checked.checked)

  function check1 (){
    setCapitulo(true)
    dispatch(captureState({buttonState: false}))
  }

  function check2 (){
    setCapitulo(false)
    dispatch(captureState({buttonState: true}))
  }

  useEffect(() => {
    setCapitulo(!check)
  }, [])

  useEffect(() => {
    dispatch(captureChapter({ manga_id: info._id, page: pagination }));
  }, [pagination, capitulo]); 
  return (
    <>
      <div className='details-btns'>
        <button className={capitulo === true ? 'manga-btn prueba' : 'manga-btn'} onClick={ check1 }>Manga</button>
        <button className={capitulo === false ? 'manga-btn prueba' : 'manga-btn'} onClick={ check2 }>Chapters</button>
      </div>

      {capitulo === true ?
        <div className='seccionTexto'>
          <p  className='description-manga'>{info.description}</p>
        </div>
        :
        <section className='card-chapter'>
          {chapters?.length > 0 ?
            chapters.map((chapter, i) => (
              <div key={i} className='sectionChapter'>
                <img className='selecChapter' src={chapter.cover_photo} alt={chapter.title} />
                <div className='order-chapter'>
                  <p className='p-chapter'>Chapter #{chapter.order}</p>
                  <div className='coment-chapter'>
                    <img src={comment} alt="comment" />
                    <p>169</p>
                  </div>
                </div>

                <Anchor className='btn-read' to={chapters && chapters.length > 0 ? '/api/chapters/' + chapter._id+'/0' : '#'}>
                <button className='btn-read'>Read</button>
                </Anchor>


              </div>
            ))
            :
            <p>No Chapter found</p>
          }
          <div className='div-chapter'>
            {pagination !== 1 && <Anchor className='btn-chapter' to={'/manga/' + info._id + '/' + (pagination - 1)}><button className='btn-chapter' onClick={() => setPagination(pagination - 1)}>prev</button></Anchor>}
            {chapters?.length === 4 && <Anchor className='btn-chapter' to={'/manga/' + info._id + '/' + (pagination + 1)}><button className='btn-chapter' onClick={() => setPagination(pagination + 1)}>next</button></Anchor>}
          </div>
        </section>
      }
    </>
  );
}