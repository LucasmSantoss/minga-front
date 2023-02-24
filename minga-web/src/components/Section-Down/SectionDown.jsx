import React from 'react';
import  './sectionDown.css';

function SectionDown(props) {
    return (
        <section className='section-down'>
				<div className='rectangle'>
					<div>
						<img className="deku" src="./imgs/deku.png" alt="deku" />
					</div>
					<div>
						<img className="poster"src="./imgs/posterBnh.png" alt="posterBnh" />
					</div>
					<div className='description-bnh'>
						<div><h2 id='bnh'>My hero Academia</h2></div>
						<div><p id="manga">manga</p></div>
						<div><h6 id= "description">In a world in which most of the population is born with a Gift,
							a different extraordinary ability in each one, it didn't
							take long for both villains and heroes to appear ready to
							to stop them.
						</h6></div>
					</div>
				</div>
			</section>
    );
}

export default SectionDown;