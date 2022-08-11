import './App.css';
import './components/Showcase/Showcase.css';
import Showcase from './components/Showcase/Showcase';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<div className='main-container'>
				<Navbar />
				<Showcase />
				<Projects />
			</div>
		</div>
	);
}

export default App;
