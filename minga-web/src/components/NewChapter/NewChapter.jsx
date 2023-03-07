import React, { useRef } from 'react';
import "./newchapter.css";
import Swal from 'sweetalert2';
import axios from "axios";

export default function NewChapter() {
 const titleRef = useRef();
 const orderRef = useRef();
 const pagesRef = useRef();

 const handleSubmit = async (event) => {
  event.preventDefault();

  let data = {
    [titleRef.current.name]: titleRef.current.value,
    [orderRef.current.name]: orderRef.current.value,
    [pagesRef.current.name]: pagesRef.current.value
  
}

let url = 'http://localhost:8080/api/chapters'
{
  try {
    await axios.post(
      url,
      data
    )
    Swal.fire(
      'Good job! The creation of a new chapter was successfully carried out',
      'You clicked the button!',
      'success'
    )
    event.target.reset()
  } catch(error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong, try again!',
    })
  }
}
 }


  return (
    <div id='ContainCharter'>
     
            <form className='form-chapter' onSubmit={handleSubmit}>
                
                <input type="text" name='title' id='title' placeholder='Insert title' ref={titleRef} required/>        
                <input type="number" name='order' id='order' placeholder='Insert order' ref={orderRef} />
                <input type="url" name='pages' id='pages' placeholder='Insert pages' ref={pagesRef} required/>
              <div>
                 <button className='submitbtn'>Send</button>
              </div>
            </form>
        
    </div>
  )
}
