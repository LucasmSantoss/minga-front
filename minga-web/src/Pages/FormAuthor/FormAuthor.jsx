
import React from 'react'
import './formAuthor.css'
import { useState } from 'react'
import Register from '../Register/Register'
import FormLogin from '../FormLogin/FormLogin'
import { useEffect } from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Auth1({state}) {
  const [render, setRender] = useState(false)
  let token = localStorage.getItem('token')

  useEffect(() => {
    setRender(state)
  },[state])

  function renderRegister(){
    handleRender('register')
  }

  function renderFormLogin(){
    handleRender('login')
  }

  function handleRender(btn){
    setRender(btn)
  }

  return (
    <>
      {
        token ? <div className='noLogged'><Anchor to='/'>Already Logged in</Anchor></div> : <div className='auth'>
          {!render ? <Register renderLogin={renderFormLogin} /> : ""}
          {render === 'register' ? <Register renderLogin={renderFormLogin} /> : ""}
          {render === 'login' ? <FormLogin renderRegister={renderRegister} /> : ""}
        </div>
      }
    </>
  )
}
