import React from 'react';
import NavBar from '../Navbar/NavBar.jsx';
import SectionMain from '../Section-main/SectionMain';
import SectionDown from '../Section-Down/SectionDown';
import './hero.css'


function Hero(props) {
    return (
        <div>
            <div className="fondo">
			<NavBar/>
			<SectionMain/>
			</div>
            <SectionDown/>
        </div>
    );
}

export default Hero;