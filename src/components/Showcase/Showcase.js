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
							I am Tibor an aspiring Full Stack developer who is currently
							living in the UK. I started to learn Web Development around 2
							years ago, and it was love at first sight. I am passionate about
							what I am doing and I give my best at every application I build.
							<br />
							<br />
							If you interested to work with me please don't hesitate to contact
							me I am happy to answer any questions you may have
						</div>
					</div>
				</div>
				<div className='showcase_img--container'></div>
			</div>
		</>
	);
}
