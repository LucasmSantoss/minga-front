import React from 'react';
import './sectionMain.css';

function SectionMain(props) {
    return (
        <section className='section-main'>
				<div >
				<h1 className='title'>Your favorite comic book store ✨ </h1>
				</div>
				<div >
				<h3 className='subTitle' >Explore our catalog to live the adventure of your life</h3>
				</div>
				<div >
				<button className='button'><p className='p-button'>Let's go!</p></button>
				</div>
			</section>
    );
}

export default SectionMain;