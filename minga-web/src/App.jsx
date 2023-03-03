import './App.css';
// import IndexLayout from './layouts/IndexLayout/IndexLayout';
// import { router } from './pages/index'
import { router } from './pages/main'
import { RouterProvider } from 'react-router-dom';
// import Footer from './components/Footer/Footer';

function App() {

	return (
		<div>
			<RouterProvider router={router} />
			{/* <IndexLayout/> */}
			{/* <Footer/> */}
		</div>

	)
}

export default App