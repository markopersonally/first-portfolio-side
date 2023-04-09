import React from 'react';
import './MobileMenu.css';

const MobileMenu = ({ setIsOpenMobileMenu, isOpenMobileMenu }) => {
	return (
		<div className='section-mobile-menu'>
			<div className='mobile-overlay'></div>
			<ul className='mobile-menu-box'>
				<li className='mobile-menu-links'>
					<a
						onClick={() => setIsOpenMobileMenu(() => !isOpenMobileMenu)}
						className='mobile-menu-text'
						href='/'
					>
						home
					</a>
				</li>
				<li className='mobile-menu-links'>
					<a
						onClick={() => setIsOpenMobileMenu(() => !isOpenMobileMenu)}
						className='mobile-menu-text'
						href='#sectionSkills'
					>
						skills
					</a>
				</li>
				<li className='mobile-menu-links'>
					<a
						onClick={() => setIsOpenMobileMenu(() => !isOpenMobileMenu)}
						className='mobile-menu-text'
						href='#sectionSlider'
					>
						projects
					</a>
				</li>
				<li className='mobile-menu-links'>
					<a
						onClick={() => setIsOpenMobileMenu(() => !isOpenMobileMenu)}
						className='mobile-menu-text'
						href='#sectionContact'
					>
						contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenu;
