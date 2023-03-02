import React from 'react';
import NavBar from '../../components/Navbar/NavBar'
import Footer from "../../components/Footer/Footer.jsx"
import NotFound from '../../pages/NotFound/NotFound';

function MainLayout() {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main className='mainlayout'>
                <NotFound/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default MainLayout;