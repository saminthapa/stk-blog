import React from 'react'
import "./Setting.css"
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <>
    <div className='setting'>
        <div className='setting-wrapper'>
          <div className='setting-title'>
            <span className="setting-update-title">Update Account</span>
            <span className="setting-delete-title">Delete Account</span>
        </div>
        <form className="setting-form">
            <label>Profile Picture</label>
            <div className='setting-p'>
                <img src="./logo.png" alt="" />
                <label htmlFor="fileInput">
                <i className="setting-p-icon fa-solid fa-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}} />
            </div>

        <label>Username</label>
        <input type="text" placeholder='samin' />
        <label>E-mail</label>
        <input type="text" placeholder='Samin1@gmail.com' />
        <label>Password</label>
        <input type="password" placeholder='password'/>
        <button className='setting-submit'>Update</button>

        </form>
      </div>
    <Sidebar/>
    </div>
    </>
  )
}

export default Setting