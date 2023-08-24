import { useState } from 'react'
import Home from './Components/Home'
import Posts from './Components/Posts';
import Login from './Components/Login';
import Register from './Components/Register';
import CreatePost from './Components/CreatePost';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    <div id="navbar">
    <h1> Stranger's Things </h1>
      <div id="navbar-link-section">
        <Link className="nav-item" to="/"> Home </Link>
        <Link className="nav-item" to="/Posts"> Posts </Link>
        <Link className="nav-item" to="/Login"> Login </Link>
        <Link className="nav-item" to="/Register"> Register </Link>
        <Link className='nav-items' to= '/CreatePost'>Create Post</Link>
        </div>
      </div>

      <div>
        <Routes>
          <Route Path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/login' element={<Login/>} />
          <Route path ='/register' element={<Register/>} />
          <Route path='/CreatePost' element={<CreatePost/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
