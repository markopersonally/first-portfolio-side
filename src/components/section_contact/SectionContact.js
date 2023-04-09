import React from 'react';
import './SectionContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDiceOne,
	faDiceTwo,
	faDiceThree,
} from '@fortawesome/free-solid-svg-icons';

const SectionContact = () => {
	return (
		<section id='sectionContact' className='section-contact'>
			<h3 className='section-contact-title'>contact</h3>
			<div className='contact'>
				<div className='contact-box'>
					<FontAwesomeIcon className='contact-box-icon' icon={faDiceOne} />
					<a className='contact-box-text' href='tel:xxx-xxx-xxx'>
						xxx-xxx-xxx
					</a>
				</div>
				<div className='contact-box'>
					<FontAwesomeIcon className='contact-box-icon' icon={faDiceTwo} />
					<a className='contact-box-text' href='mailto: xxxxx@xxx'>
						xxxxx@xxx
					</a>
				</div>
				<div className='contact-box'>
					<FontAwesomeIcon className='contact-box-icon' icon={faDiceThree} />
					<a className='contact-box-text' href='https://github.com/mkpage1337'>
						Github
					</a>
				</div>
			</div>
		</section>
	);
};

export default SectionContact;
