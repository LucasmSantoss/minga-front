import React from 'react';
import Index from '../../pages/Index/Index'
import { Outlet } from 'react-router-dom';

function IndexLayout(props) {
    return (
        <div>
            <Index />
            <Outlet />
        </div>
    );
}

export default IndexLayout;