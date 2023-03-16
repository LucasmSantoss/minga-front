import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom'


function MainLayout() {
    return (
        <div>
            <Header className="header"/>
            <Outlet className="outlet"/>
            <Footer className="footer"/>
        </div>
    );
}

export default MainLayout;