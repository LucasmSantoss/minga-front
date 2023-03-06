

import React from 'react'
import './formAuthor.css'
import { useState } from 'react'
import Register from '../Register/Register'
import FormLogin from '../FormLogin/FormLogin'
import { useEffect } from 'react'

export default function Auth1({state}) {
  const [render, setRender] = useState(false)

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
    <div className='auth'>
      { !render ? <Register renderFormLogin={renderFormLogin} /> : "" }
      { render === 'register' ? <Register renderFormLogin={renderFormLogin}/> : "" }
      { render === 'login' ? <FormLogin renderRegister={renderRegister} /> : "" }
    </div>
  )
}
