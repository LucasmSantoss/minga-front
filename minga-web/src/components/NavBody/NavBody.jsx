import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import authorAction from "../../store/Author/actions";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


const { read_author } = authorAction;

export default function NavBody({handleRender}) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = 'http://localhost:8080/api/signout'

    async function handleLogout(){
        try{
            await axios.post(url,"",headers)
            Swal.fire({
                title: 'Logout Succefull',
                showClass: {
                  popup: 'animateanimated animatefadeInDown'
                },
                hideClass: {
                  popup: 'animateanimated animatefadeOutUp'
                }
              })
            localStorage.setItem('token', "")
            localStorage.setItem('user', "")
            handleRender()
          }catch(error){
            console.log(error)

        }
    }
    let author = useSelector((store) => store.author.author);
    useEffect(() => {
      if (author) {
        dispatch(read_author());
      }
    }, [isOpen]);

    return (
        <div className='navBody'>
            <Anchor to='/'>Home</Anchor>
            { token ? <Anchor to='/api/authors'>New Author</Anchor> : "" }
            { token ? <Anchor to='/api/new-rol'>New Rol</Anchor> : "" }
            { token ? <Anchor to='/mymangas/1' >My Mangas</Anchor>: "" }
            { token ? "" : <Anchor to='/signup' onClick={handleRender}>Register</Anchor> }
            { token ? "" : <Anchor to='/signin' onClick={handleRender}>Login</Anchor> }
            <Anchor to='/chapther-form/:manga_id'>Chapter</Anchor>
            {token && author? <Anchor to='/profile'>Author-Profile</Anchor> : ''}
            { token ? <Anchor to='/api/admin'>Admin Panel</Anchor> : "" }
            <Anchor to='/mangas/1'>Mangas</Anchor>
            <Anchor to="/mangas">New Manga</Anchor>
            { token ? <Anchor onClick={handleLogout}>Logout</Anchor>: "" }
          
        </div>
    )
}

