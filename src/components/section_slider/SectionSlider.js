import React from 'react';
import './SectionSlider.css';
import MySlider from './MySlider';

const SectionSlider = () => {
	return (
		<section id='sectionSlider' className='section-slider'>
			<h3 className='section-slider-title'>projects</h3>
			<MySlider />
		</section>
	);
};

export default SectionSlider;
