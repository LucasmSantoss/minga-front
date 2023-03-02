import './App.css';
import IndexLayout from './layouts/IndexLayout/IndexLayout';
import {router} from "./pages/index.js";
import { RouterProvider } from 'react-router-dom';
// import Footer from './components/Footer/Footer';

function App() {

	return (
		<RouterProvider router={router}/>
	)
}

export default App