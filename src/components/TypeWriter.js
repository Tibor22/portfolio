import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
	return (
		<Typewriter
			options={{
				strings: [
					'Welcome to my portfolio',
					'My name is Tibor',
					'Your Full Stack Developer',
				],
				autoStart: true,
				loop: true,
			}}
		/>
	);
}
