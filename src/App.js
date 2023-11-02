import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Rout from './route';
import Home from './components/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Rout />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App