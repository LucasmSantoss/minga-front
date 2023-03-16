import React from 'react';

import SectionMain from '../../components/Section-main/SectionMain';
import SectionDown from '../../components/Section-Down/SectionDown';
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