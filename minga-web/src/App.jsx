import './App.css';
import ButtonCategory from './components/ButtonCategory/ButtonCategory';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

// import IndexLayout from './layouts/IndexLayout/IndexLayout';
// import Footer from './components/Footer/Footer';

function App() {

	return (
		// <div>
		// 	<IndexLayout/>
		// 	{/* <Footer/> */}
		// </div>
		<div>
			<div className='fondo-manga'>
				<Header />
				<h1>Manga</h1>
				<div className='div-input'>
					<input type="search" placeholder="Find your manga here"/>
					<img className='img' src="./form-img/search.png" alt="" />
				</div>
			</div>
			<div className='container-categories'>
				<div className='div-buttons'>
						<ButtonCategory style='todos' text='Todos'/>
						<ButtonCategory style='shonen' text='Shōnen' />
						<ButtonCategory style='seinen' text='Seinen'/>
						<ButtonCategory style='shojo' text='Shōjo' />
						<ButtonCategory style='kodomo' text='Kodomo' />
					</div>
					<div className='div-cards'>
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</div>
				</div>
			
		</div>
	)
}

export default App