import React from 'react';
import './sectionMain.css';
import { Link as Anchor } from 'react-router-dom'

function SectionMain() {
    return (
        <section className='section-main'>
			<div >
				<h1 className='title'>Your favorite comic book store ✨ </h1>
			</div>
			<div >
				<h3 className='subTitle' >Explore our catalog to live the adventure of your life</h3>
			</div>
			<div >
			    <Anchor className='button' to='/signup'>Let's go!</Anchor>
			</div>
		</section>
		
    );
}

export default SectionMain;