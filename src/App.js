import './App.css';
import './components/Showcase/Showcase.css';
import Showcase from './components/Showcase/Showcase';
import Projects from './components/Projects/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
	return (
		<ParallaxProvider>
			<div className='App'>
				<div className='main-container'>
					<Showcase />
					<Projects />
				</div>
			</div>
		</ParallaxProvider>
	);
}

export default App;
