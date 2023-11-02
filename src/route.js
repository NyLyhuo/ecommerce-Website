import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'

const Rout = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path ='product' element={<Product />}/>
        </Routes>
    </>
  )
}

export default Rout