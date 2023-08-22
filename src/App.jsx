import { useState } from 'react'
import Home from './Components/Home'
import Posts from './Components/Posts';
import Login from './Components/Login';
import Register from './Components/Register';
import NavBar from './Components/NavBar';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    <NavBar/>
    <div id="container">
    <h1> Stranger's Things </h1>
      <div id="navbar">
        <Link className="nav-item" to="/"> Home </Link>
        <Link className="nav-item" to="/posts"> Posts </Link>
        <Link className="nav-item" to="/login"> Login </Link>
        <Link className='nav-item' to = '/register'> Register </Link>
      </div>

      <div>
        <Routes>
          <Route Path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/login' element={<Login/>} />
          <Route path ='/register' element={<Register/>} />
        </Routes>
      </div>
      </div>
    </>
  )
}

export default App
