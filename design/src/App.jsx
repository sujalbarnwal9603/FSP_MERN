import { useState } from 'react'
import Header from '../components/Header.jsx'
import Navigation from '../components/Navigation.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Home from '../pages/Home.jsx'
import Services from '../pages/Services.jsx'
import Accounts from '../pages/Accounts.jsx'
import Profile from '../pages/Profile.jsx'
function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}>
            <Route path='accounts' element={<Accounts/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
          </Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
