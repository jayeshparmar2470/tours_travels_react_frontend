import React from 'react'
import {Routes,HashRouter as Router, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home'
import Tour from '../pages/Tour'
import About from '../pages/About'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Bookinglayout from '../layout/Bookinglayout';
import Booking from './Booking';
import ThankYou from './Thankyou';
import Mybookings from './Mybookings'
const Routers = () => {
  return (
    
      <Router>
        <Route path='/' element={<Navigate to ='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/tour' element={<Tour/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Booking/:id' element={<Booking/>} />
        <Route path='/bookinglayout/:id'   element={<Bookinglayout/>} />
        <Route path='/thankyou' element={<ThankYou/>} />
        <Route path='/mybookings' element={<Mybookings/>} />
    </Router>
    
    
  )
}
export default Routers
