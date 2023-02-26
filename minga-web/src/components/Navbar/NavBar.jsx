import React, {useState} from 'react'
import './navbar.css'


const Navbar = ()=>{

  const [isOpen, setIsOpen] = useState(false)

return (
 
  <nav>
   <div className='navbar'>
    
    <div className={`nav_items ${isOpen && "open"}`}>
      <div className='porfile'>
      
        <img src="./img/porfile.png" alt="" />

        <div className='porfile-text'>
        <p>Lucas Ezequiel Silva</p>
        <p>lucasezequielsilva@gmail.com</p>
        </div>
  
      </div>

      <a href="#"><span>Read</span></a>
      
        <a href="#">Register</a>
        <a href="#">Login</a>
        <a href="#">Logout</a>
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