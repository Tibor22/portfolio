import React from 'react';
import './projects.css';
import javascript from '../../assets/javascript.png';
import Prisma2 from '../../assets/Prisma2.png';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.png';
import postgres from '../../assets/postgres.png';
import sass from '../../assets/sass.png';
import Contact from '../Contact/Contact';

export default function Projects() {
	return (
		<div className='projects-outer-container'>
			<div id='projects' className='projects-container sm'>
				<div className='project-1--container projects'>
					<div className='project-1-img project-img'></div>
					<div className='project-1-desc project-desc'>
						<h2 className='project-desc--header'>AGENCY APP</h2>
						<p className='project-desc--para'>
							This application was built to address the need of quick workers
							for certain industries, Tailored for occasional jobseekers. This
							application has a ton of feature start from auth-system to
							applying jobs. It features Employer and Employee login and
							registration.
						</p>
						<div className='project-desc--technologys'>
							<p> Technologies I used:</p>
							<img src={javascript} alt='javascript logo' />
							<img src={Prisma2} alt='prisma logo' />
							<img src={react} alt='react logo' />
							<img src={nodejs} alt='nodejs logo' />
							<img src={postgres} alt='postgres logo' />
							<img src={sass} alt='sass logo' />
						</div>
						<a href='#' className='project-desc--link'>
							TAKE ME TO THE APP
						</a>
					</div>
				</div>
			</div>
			<Contact />
		</div>
	);
}
