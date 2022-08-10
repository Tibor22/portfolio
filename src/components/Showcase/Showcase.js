import TypeWriter from '../TypeWriter';
import './Showcase.css';

export default function Showcase() {
	return (
		<>
			<div className='showcase-outer-container'>
				<div className='showcase-container'>
					<div className='showcase_introduction'>
						<div className='typeWriter-container'>
							<TypeWriter />
						</div>
						<div className='showcase_introduction--bio'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
							assumenda, dignissimos unde autem eius aperiam recusandae vitae,
							alias voluptates voluptatum vero eos odio! Tenetur inventore
							fugiat doloremque maxime saepe. Cupiditate voluptatum quo id minus
							molestiae
						</div>
					</div>
				</div>
				<div className='showcase_img--container'></div>
			</div>
		</>
	);
}
