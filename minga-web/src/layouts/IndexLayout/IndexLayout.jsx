import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx';

function IndexLayout() {
    return (
        <div>
            <Header/>
            <Outlet />
        </div>
    );
}

export default IndexLayout;