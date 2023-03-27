import React from 'react'
import Navbar from '../Navbar/NavBar.jsx'
import './header.css'
import Image from '../Image/Image.jsx'
import logo from '../../images/logo.png'
import { useState } from 'react'
import OpenHamNav from '../OpenHamNav/OpenHamNav.jsx'

export default function Header() {
  const [render, setRender] = useState(false)

  function handleRender(){
    setRender(!render)
  }
  
  return (
    <header>
        <Navbar onClick={handleRender}/>
        { render ? <OpenHamNav handleRender={handleRender} /> : "" }
        <Image className='logo' src={logo} alt='logo'/>
    </header>
  )
}
