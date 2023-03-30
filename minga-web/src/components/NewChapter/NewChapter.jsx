import React from 'react';
import { useRef } from 'react'
import { useParams } from "react-router-dom"
import "./newchapter.css";
import Swal from 'sweetalert2';
import axios from "axios";


export default function NewChapter() {
    let dataForm = useRef()
    let { manga_id } = useParams()
    
    async function handleSubmit(e) {
      e.preventDefault();

      let formInputs = []

      Object.values(dataForm.current).forEach((e) => {
          if (e.name) {
            formInputs.push(e.value)
          }
      })

      let data = {
          title: formInputs[0],
          order: formInputs[1],
          pages: formInputs[2].split(','),
          manga_id,  
      }

      let url = 'https://minga-back-m-20.onrender.com/api/chapters'
      let token = localStorage.getItem('token')
      let headers = { headers: { "Authorization": `Bearer ${token}`}}
    {
  try {
    await axios.post(
      url,
      data,
      headers
    )
    Swal.fire(
      'Good job! The creation of a new chapter was successfully carried out',
      'You clicked the button!',
      'success'
    )
    dataForm.current.reset()
  } catch(error) {
    if (error.response.data === "Unauthorized"){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to Login',
    })
     } else {
      if (typeof error.response.message === "string") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          })
      }
     } 
  console.log(error)
  }}
 
}  

  return (
    <div id='ContainCharter'>
     
            <form className='form-chapter' ref={dataForm} onSubmit={handleSubmit}>
                
                <input type="text" name='title' id='title' placeholder='Insert title' required/>        
                <input type="text" name='order' id='order' placeholder='Insert order' />
                <input type="text" name='pages' id='pages' placeholder='Insert pages' required/>
              <div>
                 <button className='submitbtn'>Send</button>
              </div>
            </form>
        
    </div>
  )
}
