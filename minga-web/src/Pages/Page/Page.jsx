import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Page = () => {
  const { id, page } = useParams(); // obtener los parámetros de la ruta
  const [chapter, setChapter] = useState(null); // estado para almacenar el capítulo
  const [currentPage, setCurrentPage] = useState(parseInt(page)); // estado para almacenar la página actual

  useEffect(() => {
    // obtener el capítulo por su ID usando axios
    const fetchChapter = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/chapters/${id}`);
        console.log(response)
        setChapter(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchChapter();
  }, [id]);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goBack = () => {
    // retroceder a la página anterior
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    } else {
      // volver a la página de detalle del capítulo si estamos en la primera página
      window.location.href = `/chapters/${id}`;
    }
  };

  const goNext = () => {
    // avanzar a la página siguiente
    if (currentPage < chapter.pages.length) {
      goToPage(currentPage + 1);
    } else {
      // avanzar a la página del capítulo que sigue si estamos en la última página
      window.location.href = `/chapters/${parseInt(id) + 1}/1`;
    }
  };

  if (!chapter) {
    return <div>Cargando...</div>;
  }

  const pageData = chapter.pages[currentPage - 1];

  return (
    <div>
      <div>
        {currentPage > 1 && (
          <img
            src={pageData.image}
            alt={`Página ${currentPage}`}
            style={{ width: "50%", cursor: "pointer" }}
            onClick={goBack}
          />
        )}
        {currentPage < chapter.pages.length && (
          <img
            src={pageData.image}
            alt={`Página ${currentPage}`}
            style={{ width: "50%", cursor: "pointer" }}
            onClick={goNext}
          />
        )}
      </div>
      <div>
        <p>{pageData.text}</p>
      </div>
    </div>
  );
};

export default Page;


