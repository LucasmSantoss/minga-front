import React from 'react';
import NavBar from "../../components/Navbar/NavBar.jsx";
import SectionMain from '../../components/Section-main/SectionMain.jsx';
import SectionDown from '../../components/Section-Down/SectionDown.jsx';
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