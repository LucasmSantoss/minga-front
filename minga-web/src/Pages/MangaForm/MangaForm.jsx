import React, { useState } from 'react';

import { useRef } from 'react';
import '../MangaForm/mangaform.css';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function CreateManga() {
    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria ] = useState(null)
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let coverPhoto = useRef();
    let formulario = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const filteredCategory = categorias.find((category) => (category.name == categoria))
        let manga = {
            title: title.current.value,
            description: description.current.value,
            cover_photo: coverPhoto.current.value,
            category_id: filteredCategory._id
        };
        
        const url = 'https://minga-back-m-20.onrender.com/api/manga'
        try {
            await axios.post(url, manga)
            formulario.current.reset()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Manga created successfully",
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message[0],
              })
        }
    }

    async function renderCategory() {
        await axios.get('https://minga-back-m-20.onrender.com/api/manga').then((response) => { setCategorias(response.data.categories) })
    }

    return (
        <div>
            <div className='manga-content'>
                <section >
                    <h2 className='title-newmanga'>New Manga</h2>
                </section>
                <form ref={formulario} className='manga-form' onSubmit={handleSubmit}>
                    <input className='manga-input' type='text' placeholder='Insert title' ref={title} />
                    <select className="manga-input" id="selectMove" ref={category} onClick={renderCategory} onChange={(e) => setCategoria(e.target.value)}>
                    <option value=""> Insert category</option>
                        {categorias.map((categoria) => (
                    <option key={categoria.name} value={categoria.name}>{categoria.name}</option>))}
                    </select>
                    <input className='manga-input' type='text' placeholder='Insert description' ref={description} />
                    <input className='manga-input' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
                    <input className='send' type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}