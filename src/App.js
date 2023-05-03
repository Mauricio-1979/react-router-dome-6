import React, { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navigate from './Components/Navigate';
import Vans from './Components/vans/Vans';
import Detail from './Components/vans/Detail';
import Layout from './Components/Layout';
import Dashboard from './Components/host/Dashboard';
import Income from './Components/host/Income';
import Review from './Components/host/Review';
import HostLayout from './Components/HostLayout';
import HostVans from './Components/HostVans';
import HostVansDetail from './Components/host/HostVansDetail';
import HostVanPricing from './Components/host/HostVanPricing';
import HostVanPhotos from './Components/host/HostVanPhotos';
import HostVanInfo from './Components/host/HostVanInfo';



function App() {
  return (
    <Fragment>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/vans' element={<Vans/>} />
          <Route path='/detail/:id' element={<Detail />} />

          <Route path='host' element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='review' element={<Review />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVansDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>  
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
