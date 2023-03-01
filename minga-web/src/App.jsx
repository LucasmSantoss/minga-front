import './App.css';
// import IndexLayout from './layouts/IndexLayout/IndexLayout';
import Register from  './components/Register/Register'
// import Footer from './components/Footer/Footer';
import FormAuthor from './components/FormAuthor/FormAuthor'
import FormLogin from './components/FormLogin/FormLogin'

import Header from './components/Header/Header';


function App() {

	return (
		<div>
			{/* <IndexLayout/> */}
			<Register/>
			{/* <Footer/> */}s
			<FormLogin/>
			<FormAuthor/>
			
			
		</div>
		
	)
}

export default App