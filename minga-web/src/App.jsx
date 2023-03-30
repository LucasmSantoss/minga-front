import './App.css';
import {router} from "./Pages/index.js";
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from "./store/store.js"



export default function App() {
    useEffect(() => {
        let url = `https://minga-grupoblanco.onrender.com/api/token`
        let token = localStorage.getItem('token')
        if (token) {
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        axios.post(url,null,headers)
        }
       },[])
	return (
		<Provider store={store}>
            <RouterProvider router={router} />
    	</Provider>								
	)
}
