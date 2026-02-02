import { useState } from 'react'
import Header from '../components/Header.jsx'
import Navigation from '../components/Navigation.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/"></Route>
          <Route path="/about"></Route>
          <Route path="/contact"></Route>
          <Route path="/services"></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
