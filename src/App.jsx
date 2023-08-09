import { useState } from 'react'
import Home from './Components/Home'
import Posts from './Components/Posts';
import Login from './Components/Login';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    <div id="container">
     <h1> Stranger's Things </h1>
      <div id="navbar">
        <Link classname="nav-item" to="/"> Home </Link>
        <Link classname="nav-item" to="/Posts"> Posts </Link>
        <Link classname="nav-item" to="/Login"> Login </Link>
      </div>

      <div>
        <Routes>
          <Route Path='/' element={<Home/>} />
          <Route path='/Posts' element={<Posts/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </div>
     </div>
    </>
  )
}

export default App
