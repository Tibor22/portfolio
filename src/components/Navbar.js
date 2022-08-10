import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './Showcase/Showcase.css';
import { useState, useEffect } from 'react';

export default function Navbar({ style }) {
	const [addSticky, setAddSticky] = useState(false);

	useEffect(() => {
		console.log('inside useEffect');
		if (style) {
			setAddSticky(style);
		}
	}, []);

	return (
		<nav className={`${setAddSticky ? 'navbar sticky' : 'navbar'}`}>
			<ul className='navbar-list'>
				<li className='navbar-list__item'>
					<a
						target='_blank'
						rel='noreferrer'
						className='navbar-list__link'
						href='https://github.com/Tibor22'
					>
						<img src={github} alt='' />
					</a>
				</li>
				<li className='navbar-list__item'>
					<a
						target='_blank'
						rel='noreferrer'
						className='navbar-list__link'
						href='https://www.linkedin.com/in/tibor-toth-53690b227/'
					>
						<img src={linkedin} alt='' />
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
					<a href='#' className='navbar-list__link'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
