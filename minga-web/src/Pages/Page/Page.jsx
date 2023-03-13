// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import './page.css'


// export default function ChapterDetails() {
//     let url = 'http://localhost:8080/api/chapters/640b47f38761b91204604902'
//     let [Chapter, setChapter] = useState([])

//     useEffect(
//         ()=>{
//             axios.get(url)
//                 .then( res =>{
//                     setChapter(res.data.chapters)
//                     let data = res.data
//                     console.log(data)
//                 })
//                 .catch(error => console.log(error))
//         }
//     )
//     return (
//     <div className='div-chapter'>
//         <div className='chapter'>
//             <p className='parrafo-chapter'> n° de cap - nombre del capítulo </p>
//         </div>
//     </div>
// )}

// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './page.css';

// export default function ChapterDetails() {
//   const { id, page } = useParams();
//   const [chapter, setChapter] = useState([]);
//   const [currentPage, setCurrentPage] = useState(parseInt(page));

//   useEffect(() => {
//     const url = `http://localhost:8080/api/chapters/${id}`;
//     axios.get(url)
//       .then(res => {
//         setChapter(res.data);
//       })
//       .catch(error => console.log(error));
//   }, [id]);

//   function handlePrevPage() {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   }

//   function handleNextPage() {
//     if (currentPage < chapter.pages.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   }

//   function handlePrevChapter() {
//     const prevChapterId = getAdjacentChapterId('prev');
//     if (prevChapterId) {
//       window.location = `/chapters/${prevChapterId}/${1}`;
//     }
//   }

//   function handleNextChapter() {
//     const nextChapterId = getAdjacentChapterId('next');
//     if (nextChapterId) {
//       window.location = `/chapters/${nextChapterId}/${1}`;
//     }
//   }

//   function getAdjacentChapterId(direction) {
//     const currentChapterIndex = chapter.id - 1;
//     const chapters = JSON.parse(localStorage.getItem('chapters'));

//     if (direction === 'prev' && currentChapterIndex > 0) {
//       return chapters[currentChapterIndex - 1].id;
//     }

//     if (direction === 'next' && currentChapterIndex < chapters.length - 1) {
//       return chapters[currentChapterIndex + 1].id;
//     }

//     return null;
//   }

//   useEffect(() => {
//     window.onbeforeunload = () => {
//       localStorage.setItem(`chapter-${chapter.id}`, currentPage);
//     };
//   }, [chapter.id, currentPage]);

//   useEffect(() => {
//     const storedPage = localStorage.getItem(`chapter-${chapter.id}`);
//     if (storedPage) {
//       setCurrentPage(parseInt(storedPage));
//     }
//   }, [chapter.id]);

//   return (
//     <div className='div-chapter'>
//       <div className='chapter'>
//         <p className='parrafo-chapter'>{`n° de cap - ${chapter.title}`}</p>
//       </div>
//       <div className='page'>
//         {chapter.pages && chapter.pages.length >= currentPage ? (
//           <img src={chapter.pages[currentPage - 1]} alt={`Página ${currentPage}`} />
//         ) : (
//           <div>No hay páginas disponibles</div>
//         )}
//         <div className='nav'>
//           {currentPage > 1 && <div className='prev' onClick={handlePrevPage}></div>}
//           {currentPage < (chapter.pages?.length || 0) && <div className='next' onClick={handleNextPage}></div>}
//         </div>
//       </div>
//       <div className='nav-chapter'>
//         {currentPage === 1 && <div className='prev-chapter' onClick={handlePrevChapter}></div>}
//         {currentPage === (chapter.pages?.length || 0) && <div className='next-chapter' onClick={handleNextChapter}></div>}
//       </div>
//     </div>
//   );

  
// }



import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./page.css"


export default function Chapters() {

    let navigate = useNavigate()
    let url = `http://localhost:8080/api/chapters/`
    let { id, page} = useParams()
    let [ chapter, setChapter ] = useState({})
    let [ index, setIndex ] = useState(parseInt(page))

    useEffect(() => {
        axios.get(url+id)
            .then(response => setChapter(response.data.chapter))
            .catch(error => console.log(error))
    }, [])

    let handlePrev = () => {
        setIndex( index - 1)
        navigate(`/api/chapters/${id}/${index - 1}`) 
        if( index <= 0){
            navigate(`/mangas/${id}/${1}`)
        }

    }

    let handleNext = () => {
        setIndex( index + 1)
        navigate(`/api/chapters/${id}/${index + 1}`) 
        if( index > chapter.pages?.length){
            axios.get()
        }
    }


    console.log(chapter)
    return (
        <div className='page'>
          <div className='container-page'>

           <div className='prev' onClick={handlePrev}>
               <img src='../../../imgs/prev.png' alt='prevarrow'/>
           </div>

          <div className='img-text'> 
          <div className='text-capitulo'>
               <h5>Capítulo {chapter.order} - {chapter.title}</h5>
           </div>
           <div className='capitulo-img'><img src={chapter.pages?.[index]} alt='comicimage'/></div>
          </div>

           <div className='next' onClick={handleNext}>
               <img src='../../../imgs/next.png' alt='nextarrow'/>
           </div>


       </div>
       <div className='coment-number'>
       <div className='coment'> <p>...</p> </div>
       <h6>24</h6>
       </div>

       </div>
    )
}