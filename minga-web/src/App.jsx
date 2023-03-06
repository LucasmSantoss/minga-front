import './App.css';
import { router } from './Pages/index'
import { RouterProvider } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios';

// import IndexLayout from './layouts/IndexLayout/IndexLayout';
// import Footer from './components/Footer/Footer';

function App() {

	return (
		// <div>
		// 	<IndexLayout/>
		// 	{/* <Footer/> */}
		// </div>
		<div className="App">
      <RouterProvider router={router} />
    </div>										
	)
}

export default App