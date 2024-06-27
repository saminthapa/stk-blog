import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  const user = true;
  return (
    <>
    <div className='navbar'>
        <div className='top-left'>
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

        <div className='top-center'>
          <ul className='top-list'>
            <li className='top-list-item'>
              <Link to="/" className='link'>HOME</Link>
            </li>
            <li className='top-list-item'><Link to="/about" className='link'>ABOUT</Link></li>
            <li className='top-list-item'><Link to="/contact" className='link'>CONTACT</Link></li>
            <li className='top-list-item'><Link to="/create" className='link'>CREATE</Link></li>
            <li className='top-list-item'>
              {user && "LOGOUT"}
            </li>
          </ul>

        </div>

        <div className='top-right'>
          {
            user ? (
              <Link  to='./setting' className='link'>
              <img className='top-img' src="./me_o.png" alt="My Photo" />
              </Link>
            ) : (
              <ul className='top-list'>
              <li className='top-list-item'>
              <Link className='link' to='/login'>  LOGIN</Link>
              </li>
              <li className='top-list-item'>
              <Link className='link' to='/register'>REGISTER</Link>
              </li>
              </ul>
            )
          }
          
          <i className="top-search fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
    </>
  )
}

export default Navbar