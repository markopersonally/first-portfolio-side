import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ link ,tittle, img }) => {
	return (
		<div className='slider-cards'>
			<div className='box-slider-card'>
				<div className='slider-tittle-overlay'></div>
				<a href={link} className='slider-title'>{tittle}</a>
				<img className='slider-picture' src={img} alt={tittle} />
			</div>
		</div>
	);
};

export default ProjectCard;
