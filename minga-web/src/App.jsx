import './App.css';
import {router} from "./pages/index.js";
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

		useEffect(() => {
		  let url = `http://localhost:8080/auth/token`
		  let token = localStorage.getItem('token')
		  if (token) {
		  let headers = {headers:{'Authorization':`Bearer ${token}`}}
		  axios.post(url,null,headers)
		  }
		 },[])

	return (
		<RouterProvider router={router}/>
	)
}

export default App