import './App.css';
import Image from './components/Image/Image';
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
				<h1>Manga</h1>
			<div className='div-input'>
  				<input type="search" placeholder="Find your manga here"/>
				<img className='img' src="./form-img/search.png" alt="" />
            </div>

			</div>
		</div>
	)
}

export default App