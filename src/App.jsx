import React from 'react'
import './Shop.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Shopping from './Shopping'
import Cart from './Cart'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Toaster position="top-right" toastOptions={{style: {marginTop:"4rem"}}}  />
          <Routes>
            <Route path='/' element={<Shopping />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
