import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Spage from './Components/Spage'
import Create from './Components/Create'
import Setting from './Components/Setting'
import Login from './Components/Login'
import Register from './Components/Register'
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const user = true;
  return (
<Router>
  <Navbar />
  <Routes>
    <Route path='/' element = <Home/> />


    <Route path='/spage' element = <Spage/> />

    <Route path='/create' element =  {user ? <Create/> : <Home/> } />

    <Route path='/setting' element = { user ? <Setting/> : <Home />} />

    <Route path='/login' element =  {user ? <Home/> : <Login/> } />

    <Route path='/register' element = {user ? <Home/> : <Register/> }/>

  </Routes>
</Router>
  )
}

export default App