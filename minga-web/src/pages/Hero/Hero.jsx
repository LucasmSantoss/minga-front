import React from 'react';

import SectionMain from '../../components/Section-main/SectionMain.jsx';
import SectionDown from '../../components/Section-Down/SectionDown.jsx';
import './hero.css'


function Hero() {
    return (
        <div>
            <div className="fondo">
			<SectionMain/>
			</div>
            <SectionDown/>
        </div>
    );
}

export default Hero;