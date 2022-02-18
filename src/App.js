import React from 'react'
import Home from './pages'
import SigninPage from './pages/signin'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={ <Home /> } exact />
        <Route  path="/signin" element={ <SigninPage /> } exact />
      </Routes>
    </Router>
  )
}

export default App