import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const email = <FontAwesomeIcon icon={faEnvelope} />;

export default function Contact() {
	return (
		<div className='contact-container ' id='contact'>
			<div className='contact-description'>
				<h2 className='contact-description--header'>Got a problem to solve?</h2>
				<p className='contact-description--para'>
					If our company needs help please get in touch
				</p>
				<div className='contact-description--email'>
					{email} tothtibitravel@gmail.com
				</div>
			</div>
			<div className='contact-form-container'>
				<form
					className='contact-form'
					action='https://formsubmit.co/tothtibitravel@gmail.com'
					method='POST'
				>
					<label className='contact-form--group'>
						<span>NAME</span>
						<input type='text' name='name' required />
					</label>
					<label className='contact-form--group'>
						<span>EMAIL</span>
						<input type='email' name='email' required />
					</label>
					<label className='contact-form--group'>
						<span>MESSAGE</span>
						<textarea
							name='message'
							id='message'
							cols='60'
							rows='10'
						></textarea>
					</label>

					<button className='contact-btn' type='submit'>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
