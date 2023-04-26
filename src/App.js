import React, { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navigate from './Components/Navigate';

function App() {
  return (
    <Fragment>
      <Navigate/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
