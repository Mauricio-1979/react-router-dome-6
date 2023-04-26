import React from 'react';
import { Link } from 'react-router-dom';


function Navigate() {
  return (
    <>
    <header>
        <Link className='site-logo' to='/'>
            <h1>#VANLIFE</h1>
        </Link>
        <nav>
            <Link to='/about'>About</Link>
        </nav>
    </header>
    </>
  )
}

export default Navigate