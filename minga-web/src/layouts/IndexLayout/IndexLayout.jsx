import React from 'react';
import Index  from '../../pages/Index/Index.jsx'
import { Outlet } from 'react-router-dom';

function IndexLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default IndexLayout;