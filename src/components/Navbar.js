import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './Showcase/Showcase.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
	const [openNavbar, setOpenNavbar] = useState(false);

	return (
		<>
			<nav className={openNavbar ? `navbar sticky open` : `navbar sticky`}>
				<div
					onClick={() => setOpenNavbar(!openNavbar)}
					className={openNavbar ? `hamburger-menu open` : `hamburger-menu`}
				>
					<div className='line'></div>
				</div>
				<ul className='navbar-list'>
					<li className='navbar-list__item'>
						<a
							target='_blank'
							rel='noreferrer'
							className='navbar-list__link'
							href='https://github.com/Tibor22'
						>
							<img src={github} alt='gitHub' />
						</a>
					</li>
					<li className='navbar-list__item'>
						<a
							target='_blank'
							rel='noreferrer'
							className='navbar-list__link'
							href='https://www.linkedin.com/in/tibor-toth-53690b227/'
						>
							<img src={linkedin} alt='linkedIn' />
						</a>
					</li>

					<li className='navbar-list__item'>
						<a className='navbar-list__link' href='#'>
							About Me
						</a>
					</li>
					<li className='navbar-list__item'>
						<a className='navbar-list__link' href='#projects'>
							Projects
						</a>
					</li>
					<li className='navbar-list__item'>
						<a href='#contact' className='navbar-list__link'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
