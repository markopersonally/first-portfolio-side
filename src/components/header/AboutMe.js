import React from 'react';

import './AboutMe.css';

const AboutMe = () => {
	return (
		<div className='about-me'>
			<h1 className='about-me-title'>Cześć!</h1>
			<h4 className='about-me-text'>
				Jestem Marcin 😀 Mam 22 lata. <br />
				Interesuję się programowaniem od 1.5 roku.
				<br /> Na codzień uczę się sam, <br />
				ale też korzystam z doświadczenia starszych programistów, <br />
				kursów online oraz poradników na youtube. <br />
				Aktualnie pracuje na magazynie.
				<br /> Chcę się przebranżowić na Junior Front-end Developera. 👨‍💻
			</h4>
		</div>
	);
};

export default AboutMe;
