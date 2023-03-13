import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./page.css";

export default function ChapterDetails() {
  let navigate = useNavigate();
  let { id, page } = useParams();
  let url = `http://localhost:8080/api/chapters/${id}`;
  let [chapter, setChapter] = useState([]);
  let [index, setIndex] = useState(Number(page));

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setChapter(res.data.chapter);
        console.log(res.data.chapter);
        setIndex(Number(page));
      })
      .catch((error) => console.log(error));
  }, [id, page]);

  function handlePrev() {
    setIndex(index - 1);
    navigate(`/api/chapters/${id}/${index - 1}`);
    if( index <= 0){
        navigate(`/mangas/`)
    }
  }

  function handleNext() {
    if (index + 1 > chapter?.pages?.length - 1) {
      return navigate(`/api/chapters/640b47f58761b91204604937/0`);
    }
    setIndex(index + 1);
    if (index + 1 === chapter?.pages?.length) {
      return navigate(`/api/chapters/${id}/0`);
    }
    return navigate(`/api/chapters/${id}/${index + 1}`);
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
              Capítulo {chapter.order} - {chapter.title} - {chapter.page}
            </h5>
          </div>
          <div className="capitulo-img">
            <img src={chapter.pages?.[index]} alt="comicimage" />
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
