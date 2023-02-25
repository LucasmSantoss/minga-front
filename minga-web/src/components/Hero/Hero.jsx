import React from 'react';
import Header from '../Header/Header.jsx';
import SectionMain from '../Section-main/SectionMain';
import SectionDown from '../Section-Down/SectionDown';
import './hero.css'


function Hero(props) {
    return (
        <div>
            <div className="fondo">
			<Header/>
			<SectionMain/>
			</div>
            <SectionDown/>
        </div>
    );
}

export default Hero;