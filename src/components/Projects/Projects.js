import React from 'react';
import './projects.css';
import { Parallax } from 'react-scroll-parallax';
import Navbar from '../Navbar';
import { useState, useEffect } from 'react';

export default function Projects() {
	const styles = {
		height: '92vh',
	};

	return (
		<Parallax style={styles} translateY={25}>
			{/* {stickyClass > 0.45 && <Navbar />} */}
			<div id='projects' className='projects-container'>
				<div className='project-1--container projects'>
					<div className='project-1-img'>
						<img
							src='https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
							alt='Agency App'
						/>
					</div>
					<div className='project-1-desc'>
						<h2 className='project-1-desc--header'></h2>
						<p className='project-1-desc--para'></p>
						<a href='#' className='project-1-desc--link'></a>
					</div>
				</div>
			</div>
		</Parallax>
	);
}
