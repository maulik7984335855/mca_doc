import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import AddMaterial from './components/AddMaterial'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddMaterial/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App