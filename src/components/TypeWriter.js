import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter
					.typeString('Welcome to my portfolio')
					.callFunction(() => {
						console.log('String typed out!');
					})
					.pauseFor(2500)
					.deleteAll()
					.typeString('My name is Tibor')
					.pauseFor(2500)
					.deleteAll()
					.typeString('Your Full Stack Developer!')
					.callFunction(() => {
						console.log('All strings were deleted');
					})
					.start();
			}}
		/>
	);
}
