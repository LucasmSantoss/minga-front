import './App.css';
import Header from './Layouts/Header.jsx';
import SectionMain from './components/Section-main/SectionMain';
import SectionDown from './components/Section-Down/SectionDown';
function App() {
	
	
	return (
		<body>
			<div className='fondo'>
			<Header/>
			<SectionMain/>
			</div>
			<SectionDown/>
			
		</body>

		
	)
}

export default App