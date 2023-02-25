import './App.css';
import Form from "../src/components/Form/Form.jsx";
import Header from './Layouts/Header.jsx';
import SectionMain from './components/Section-main/SectionMain';
import SectionDown from './components/Section-Down/SectionDown';


function App() {
	
	
	return (
		<div>
			<div className='fondo'>
			<Header/>
			<SectionMain/>
			</div>
			<SectionDown/>
			<div className='conteiner'>
			<div className='conteiner-form'>
			<Form/>
			</div>	
			<div className='conteiner-img'>
			<img className="img-form" src="./imgs/formImg.png" alt="Img-Pagina-Form" />
			</div>
		</div>
		</div>
		

		
	)
}

export default App