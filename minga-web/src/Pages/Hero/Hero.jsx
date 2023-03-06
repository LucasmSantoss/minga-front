import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SectionMain from '../../components/Section-main/SectionMain';
import SectionDown from '../../components/Section-Down/SectionDown';
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