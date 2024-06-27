import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className='register'>
        <span className="register-title">Register</span>
        <form className="register-form">
        <label type='text'>Full Name</label>
        <input className='register-input' type="text" placeholder='Enter your name'/>
            <label type='text'>E-mail</label>
            <input className='register-input' type="text" placeholder='Enter your email'/>
            <label type='text'>Password</label>
            <input className='register-input' type="password" placeholder='Enter your password'/>
            <button className='register-button'>Register</button>
        </form>
        <p>Already have an account?<button className='login-button'><Link className='link' to='/login'>LOGIN</Link></button></p>
    </div>
    </>
  )
}

export default Register