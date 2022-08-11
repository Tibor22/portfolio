import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import EmptyModal from '../Modal/Modal';
import { Spinner } from 'react-rainbow-components';
import axios from 'axios';

export default function Contact() {
	const email = <FontAwesomeIcon icon={faEnvelope} />;
	const [contactDetails, setContactDetails] = useState({
		email: '',
		name: '',
		message: '',
	});

	const [openModal, setOpenModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactDetails({
			...contactDetails,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		setError(false);
		e.preventDefault();
		try {
			setIsLoading(true);
			axios.defaults.headers.post['Content-Type'] = 'application/json';
			const res = await axios.post(
				'https://formsubmit.co/ajax/tothtibitravel@gmail.com',
				{
					...contactDetails,
				}
			);

			setOpenModal(true);
			setContactDetails({ email: '', name: '', message: '' });
			setIsLoading(false);
		} catch (e) {
			setError({ message: 'Oops your message did not send ,please try again' });
			setIsLoading(false);
			setOpenModal(true);
		}
	};

	return (
		<div className='contact-container ' id='contact'>
			{openModal && (
				<EmptyModal
					setOpenModal={setOpenModal}
					error={error}
					openModal={openModal}
				/>
			)}
			<div className='contact-description'>
				<h2 className='contact-description--header'>Got a problem to solve?</h2>
				<p className='contact-description--para'>
					If your company needs help please get in touch
				</p>
				<div className='contact-description--email'>
					{email} tothtibitravel@gmail.com
				</div>
			</div>
			<div className='contact-form-container'>
				<form onSubmit={handleSubmit} className='contact-form'>
					<label className='contact-form--group'>
						<span>NAME</span>
						<input
							onChange={handleChange}
							value={contactDetails.name}
							type='text'
							name='name'
							required
						/>
					</label>
					<label className='contact-form--group'>
						<span>EMAIL</span>
						<input
							onChange={handleChange}
							value={contactDetails.email}
							type='email'
							name='email'
							required
						/>
					</label>
					<label className='contact-form--group'>
						<span>MESSAGE</span>
						<textarea
							onChange={handleChange}
							value={contactDetails.message}
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
			{isLoading && (
				<div className='contact-spinner'>
					<Spinner size='large' />
				</div>
			)}
		</div>
	);
}
