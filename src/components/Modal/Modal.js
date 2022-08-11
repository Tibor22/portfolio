import React from 'react';
import { Modal, Button } from 'react-rainbow-components';
import { useState } from 'react';

export default function EmptyModal({ openModal, setOpenModal, error }) {
	const [isOpen, setIsOpen] = useState(openModal);

	const handleOnClose = () => {
		setOpenModal(false);
		return setIsOpen(false);
	};
	return (
		<div>
			<Modal
				size='medium'
				id='modal-1'
				isOpen={isOpen}
				onRequestClose={handleOnClose}
			>
				<p className='modal-title'>
					{error && error.message}
					{!error &&
						'Thank you for contacting me, will come back to your shortly.'}
				</p>
			</Modal>
		</div>
	);
}
