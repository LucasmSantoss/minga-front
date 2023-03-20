import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function NavBody({handleRender}) {
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

    return (
        <div className='navBody'>
            <Anchor to='/'>Home</Anchor>
            { token ? <Anchor to='/signup'>New Author</Anchor> : "" }
            { token ? <Anchor to='/mymangas/1' >My Mangas</Anchor>: "" }
            { token ? <Anchor onClick={handleLogout}>Logout</Anchor>: "" }
            { token ? "" : <Anchor to='/register' onClick={handleRender}>Register</Anchor> }
            { token ? "" : <Anchor to='/signin' onClick={handleRender}>Login</Anchor> }
            <Anchor to='/mangas'>New Mangas</Anchor>
            <Anchor to='/chapther-form/:manga_id'>Chapter</Anchor>
            <Anchor to='/mangas/1'>Mangas</Anchor>

        </div>
    )
}