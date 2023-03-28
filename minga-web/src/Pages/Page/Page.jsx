
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./page.css";

export default function ChapterDetails() {
  let navigate = useNavigate()
  let { id, page } = useParams()
  let url = `http://localhost:8080/api/chapters/`
  let [chapter, setChapter] = useState({})
  let [index, setIndex] = useState(Number(page))
  let [next, setNext] = useState('')
  let [prev, setPrev] = useState('')
  
  useEffect(() => {
      axios.get(url + id).then(res => {
          setChapter(res.data.chapter);
          console.log(res.data)
          setIndex(Number(page))
          setNext(res.data.next)
          setPrev(res.data.prev);
      }).catch(error => console.log(error));
  }, [  id, page]);


   
  function handlePrev() {
    setIndex(index - 1);
    navigate(`/api/chapters/${id}/${index - 1}`);

    if ((index <= 0) && (chapter.order === 1)) {
        navigate('/mangas/:page');
    }else if (index <= 0){
        navigate(`/api/chapters/${prev}/0`)
        window.location.reload(true)
    }
}


function handleNext() {
    setIndex(index + 1)
    navigate(`/api/chapters/${id}/${index + 1}`)
    if (index >= chapter?.pages?.length - 1) {
        navigate(`/api/chapters/${next}/0`)
        window.location.reload(true)
    }
}
    return (
    <div className="page">
      <div className="container-page">
        <div className="prev" onClick={handlePrev}>
          <img src="../../../imgs/prev.png" alt="prevarrow" />
        </div>
        <div className="img-text">
          <div className="text-capitulo">
            <h5>
              Cap {chapter?.order} - {chapter?.title} - Page {index}
            </h5>
          </div>
          <div className="capitulo-img">
            <img src={chapter?.pages?.[index]} alt="comicimage" />
          </div>
        </div>
        <div className="next" onClick={handleNext}>
          <img src="../../../imgs/next.png" alt="nextarrow" />
        </div>
      </div>
      <div className="coment-number">
        <div className="coment">
          <p>...</p>
        </div>
        <h6>24</h6>
      </div>
    </div>
  );
}