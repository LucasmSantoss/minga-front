import React from 'react';
import './header.css';

function NavBar(props) {
    return (
        <header className='header'>
        <nav className='navbar'>
            <div>
            <img id="menu" src="./imgs/Menu.png" alt="menu" />
                </div>
                <div>
                <img id="logo" src="./imgs/logo.png" alt="logo" />
            </div>
    </nav>
    </header>
       
    );
}

export default NavBar;