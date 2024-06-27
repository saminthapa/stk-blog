import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
    <div className='post'>
      <img className='post-img' src="./jalbire.jpeg" alt="Photo_Jalbire_Jharna" />
      <div className="post-info">
        <div className="post-categ">
          <span className='post-cat'>Nature</span>
          <span className='post-cat'>Life</span>
        </div>

        <span className="post-title">
          <p><Link to='/spage' className='link'>Jalbire Jharana</Link></p>
        </span> 
        <span className='post-date'>1 hour ago</span>        
      </div>

      <p className='post-des'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vero delectus necessitatibus architecto tempora labore neque accusantium accusamus officiis perferendis corporis rem, perspiciatis, atque repellat laudantium odio ea vitae ad!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vero delectus necessitatibus architecto tempora labore neque accusantium accusamus officiis perferendis corporis rem, perspiciatis, atque repellat laudantium odio ea vitae ad!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At vero delectus necessitatibus architecto tempora labore neque accusantium accusamus officiis perferendis corporis rem, perspiciatis, atque repellat laudantium odio ea vitae ad!
      </p>

    </div>
    </>
  )
}

export default Blog