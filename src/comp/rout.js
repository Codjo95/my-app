import React from 'react'
import { Routes, Route } from 'react-router';
import Home from './home';
import Shop from './shop';
const Rout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )
}

export default Rout