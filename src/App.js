import React from 'react'
import Nav from './components/Nav';
import Rout from './route';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Rout />
    </BrowserRouter>
    </>
  )
}

export default App