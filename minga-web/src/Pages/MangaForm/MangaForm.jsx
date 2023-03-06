import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

import { useRef } from 'react';
import './mangaform.css';
import axios from 'axios';

export default function CreateManga() {
    const [categorias, setCategorias ] = useState([])
    const [selectValue, setSelectValue] = useState([]);
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let coverPhoto = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        let manga = {
            title: title.current.value,
            category: category.current.value,
            description: description.current.value,
            coverPhoto: coverPhoto.current.value,
            
        };
        console.log(manga);
        const url = 'http://localhost:8080/mangas'
    try {
        await axios.post(url, manga)
        alert("Manga created successfully")
            // e.target.reset()
            console.log(setSelectValue())
    
    } catch (error) {
        console.log(error)
        console.log("ocurrio un error")
    }
    }
    const handleSelectChange = (event) => {
        setSelectValue(console.log(event.target.value));
        
    };
    
    
    useEffect( ()=>  { 
        axios.get ('http://localhost:8080/categories').then((response) => 
        { setCategorias(response.data) } )
        

        
    }, [] ) 
    // console.log(categorias)

return (
    <div>
         <NavBar />
        <div className='manga-content'>  
            {/* <section className='new-author'>
              
            </section> */}
            <form className='author-form' onSubmit={handleSubmit}>
                    <input className='author-input' type='text' placeholder='Insert title' ref={title} />
                    <select className='author-input' id='selectMove' ref={category} value={selectValue} onChange={handleSelectChange}>
                    <option value=''> Insert category</option>
                        {categorias.map(categoria =>  <option key={categoria.value} value={categoria.value}>{categoria.name}</option>
                        )}
                    </select>
                    <input className='author-input' type='text' placeholder='Insert description' ref={description} />
                    <input className='author-input' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
                    <input className='send' type="submit" value="Send" />
            </form>
        </div>
    </div>
)
}