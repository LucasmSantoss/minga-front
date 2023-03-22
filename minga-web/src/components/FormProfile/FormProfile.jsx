import React from 'react'
import {useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authorAction from '../../store/Author/actions.js'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './formprofile.css'


const { read_author, update_author } = authorAction



export default function EditProfile() {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const editForm = useRef();
     const [reload, setReload] = useState(false);
     const [showAlert, setShowAlert] = useState(false);


    const handleAccept = async (event) => {
     event.preventDefault();
     const cityCountry = editForm.current[2].value;
     const array = cityCountry.split(",");

     const data = {
       name: editForm.current[0].value,
       last_name: editForm.current[1].value,
       city: array[0],
       country: array[1].trim(),
       date: editForm.current[3].value,
       photo: editForm.current[4].value,
     };
     setShowAlert(false);
     if (!showAlert) {
       const result = await Swal.fire({
         title: "¿You re sure?",
         text: "You are about to update your data. Are you sure to continue?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, update",
         cancelButtonText: "Cancel",
       });
       console.log(result);
       if (result.isConfirmed) {
         dispatch(update_author({ data: data }));
         setReload(!reload);
         setShowAlert(true);
       }
     }
    };

    async function handleDelete (event) {
       event.preventDefault();
       const data = {
         active: false,
       };
        const result = await Swal.fire({
          title: "¿You re sure?",
          text: "You are about to delete your account. Are you sure to continue?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "yes, delete",
          cancelButtonText: "Cancel",
        });
    
        if (result.isConfirmed) {
            dispatch(update_author({ data: data }));
            setReload(!reload);
    
            setTimeout(() => {
                navigate('/');
            }, 500);
        }
     };


    let authores = useSelector((store) => store.author.author);
    const authoresDate = authores?.date?.split("T")[0];
    
    useEffect ( () => {
        if (authores) {
            dispatch(read_author())
        }
    }, [reload] ) // aca se renderiza

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      if (authores?.city && authores?.country) {
        setInputValue(`${authores?.city}, ${authores?.country}`);
      }
    }, [authores]);

      let author = useSelector((store) => store.author.author);

      const [inputValue2, setInputValue2] = useState("");

      useEffect(() => {
        if (author?.photo) {
          setInputValue2(author?.photo);
        }
      }, [author]);



    return (
        
            <div className='editProfile'>
                <form className='formEdit'  ref={editForm}>
                    <input name="name" className="inputAuthorForm" type="text" placeholder="Name" defaultValue={authores?.name} required  />
                    <input name="last_name" className="inputAuthorForm" type="text" placeholder="Last Name"defaultValue={authores?.last_name}  required/>
                    <input name="city_country" className="inputAuthorForm" type="text" placeholder="City, Country" defaultValue={inputValue} required />
                    <input name="date" className="inputAuthorForm" type="date" defaultValue={authoresDate} />
                    <input name="photo" className="inputAuthorForm" type="text" placeholder="URL Profile Image" defaultValue={authores?.photo}  required />
                    <input className='btnsave' type="submit" value="Save" onClick={handleAccept}/>
                    <input className='btndelete' type="submit" value="Delete Acount" onClick={handleDelete}/>
                </form>
            </div>
      
    )
}