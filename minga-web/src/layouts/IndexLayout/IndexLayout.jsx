import React from 'react';
import { Outlet } from 'react-router-dom';

function IndexLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default IndexLayout;