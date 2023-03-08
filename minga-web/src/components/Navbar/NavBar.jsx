import React, {useState} from 'react'
import './navbar.css'
import { Link as Anchor } from 'react-router-dom'

const Navbar = ()=>{

  const [isOpen, setIsOpen] = useState(false)

return (
 
  <nav>
   <div className='navbar'>
    
    <div className={`nav_items ${isOpen && "open"}`}>
      <div className='porfile'>
      
        <img src="./imgs/killua.png" alt="killua" />

        <div className='porfile-text'>
        <p>Lucas Ezequiel Silva</p>
        <p>lucasezequielsilva@gmail.com</p>
        </div>
  
      </div>
      
      <div className='divAncor'><Anchor to="/" id="ancor">Read</Anchor></div>
        <Anchor to="/register"> Register </Anchor>
        <a  href="#">Log in</a>
        <a  href="#">Log out</a>
        <Anchor to="/chapther-form/:manga_id">Create Chapter</Anchor>
    </div>
    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
   
  </div>
  <div className='logo'>
      <img src="./imgs/Logo.png" alt="logo" />
    </div>
  
 </nav>
)

}

export default Navbar