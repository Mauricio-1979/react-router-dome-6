import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigate from './Navigate';
import Footer from './Footer';

function Layout() {
  return (
    <div className='site-wrapper'>
        <Navigate />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default Layout