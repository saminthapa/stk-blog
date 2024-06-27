import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
        <div className='sidebar-item'>
        <span className="sidebar-title">ABOUT ME</span>
        <img className='sidebar-img' src="./about_me.jpeg" alt="My_photo"/>
        <p className='sidebar-para'>Hi, I'm Samin Thapa, a Bachelor of Information Technology student at Tribhuvan University specializing in Web Development. As a tech enthusiast, I'm eager to leverage my skills to contribute to a team that's both technically strong and creates a positive social impact.</p>
        </div>


        <div className='sidebar-item'>
        <span className="sidebar-title">CATEGORIES</span>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>Life</li>
            <li className='sidebar-list-item'>Music</li>
            <li className='sidebar-list-item'>Style</li>
            <li className='sidebar-list-item'>Sport</li>
            <li className='sidebar-list-item'>Tech</li>
            <li className='sidebar-list-item'>Cinema</li>
        </ul>      
        </div>


        <div className='sidebar_item'>
        <span className="sidebar-title">FOLLOW US</span>
        <div className='sidebar-social'>
        <Link to='https://www.facebook.com/samin.thapa.90' className='link'>
        <i className="top-icon fa-brands fa-facebook"></i>
        </Link>
        <Link to='https://www.instagram.com/im_saminthapa/' className='link'>
        <i className="top-icon fa-brands fa-instagram"></i>
        </Link>
        <Link to='https://x.com/SaminThapa10' className='link'>
        <i className="top-icon fa-brands fa-twitter"></i>
        </Link>
        <Link to='https://www.youtube.com/channel/UC2cIebOuovVdBCD4rKOIiWQ' className='link'>
        <i className="top-icon fa-brands fa-youtube"></i>
        </Link>

        </div>
        
        </div>
    </div>

    </>
  )
}

export default Sidebar