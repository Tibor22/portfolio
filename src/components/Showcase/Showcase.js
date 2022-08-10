import TypeWriter from '../TypeWriter';
import './Showcase.css';
import Navbar from '../Navbar';
import { Parallax } from 'react-scroll-parallax';

export default function Showcase() {
	const center = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	};
	return (
		<Parallax style={center} translateY={-1000}>
			<div className='showcase-container'>
				<Navbar />
				<div className='showcase_introduction'>
					<div className='typeWriter-container'>
						<TypeWriter />
					</div>
					<div className='showcase_introduction--bio'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
						assumenda, dignissimos unde autem eius aperiam recusandae vitae,
						alias voluptates voluptatum vero eos odio! Tenetur inventore fugiat
						doloremque maxime saepe. Cupiditate voluptatum quo id minus
						molestiae
					</div>
				</div>
				<div className='showcase_img--container'></div>
			</div>
		</Parallax>
	);
}
