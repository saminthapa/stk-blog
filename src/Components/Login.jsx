import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='login'>
        <span className="login-title">Login</span>
        <form className="login-form">
            <label type='text'>E-mail</label>
            <input className='login-input' type="text" placeholder='Enter your email'/>
            <label type='text'>Password</label>
            <input className='login-input' type="password" placeholder='Enter your password'/>
            <button className='login-button'>Login</button>
        </form>
        <p>Don't have an account? <button className='register-button'><Link className='link' to='/register'>REGISTER NOW</Link></button></p>
    </div>
    </>
  )
}

export default Login