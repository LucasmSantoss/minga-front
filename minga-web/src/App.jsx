import './App.css';
import { router } from './Pages/index'
import { RouterProvider } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios';

// import IndexLayout from './layouts/IndexLayout/IndexLayout';
// import Footer from './components/Footer/Footer';


export default function App() {
    useEffect(() => {
        let url = `http://localhost:8080/api/token`
        let token = localStorage.getItem('token')
        if (token) {
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        axios.post(url,null,headers)
        }
       },[])
 
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
