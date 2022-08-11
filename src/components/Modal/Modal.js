import React from 'react';
import { Modal, Button } from 'react-rainbow-components';
import { useState } from 'react';

export default function EmptyModal({ openModal, setOpenModal, error }) {
	const [isOpen, setIsOpen] = useState(openModal);

	const handleOnClose = () => {
		setOpenModal(false);
		return setIsOpen(false);
	};

	const styles = {
		backgroundColor: '#2d2d2d',
		color: '#fff',
	};
	return (
		<div style={styles}>
			<Modal
				style={styles}
				size='medium'
				id='modal-1'
				isOpen={isOpen}
				onRequestClose={handleOnClose}
			>
				<p className='modal-title'>
					{error && error.message}
					{!error &&
						'Thank you for contacting me, I will come back to you shortly.'}
				</p>
			</Modal>
		</div>
	);
}
