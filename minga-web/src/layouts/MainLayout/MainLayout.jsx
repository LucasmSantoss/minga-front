import React from 'react';
import NavBar from '../../components/Navbar/NavBar'
import Footer from "../../components/Footer/Footer.jsx"
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <div >         
            <NavBar/>
            <Outlet/> 
            <Footer/>
        </div>
    );
}

export default MainLayout;