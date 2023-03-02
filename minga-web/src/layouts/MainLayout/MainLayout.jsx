import React from 'react';
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

function MainLayout(props) {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;