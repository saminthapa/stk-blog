import React from 'react'
import './Headbar.css'

const Headbar = () => {
  return (
    <>
    <div className='headbar'>
        <div className='headbar-title'>
            <span className='headbar-title-sm'>STK</span>
            <span className='headbar-title-lg'>Blog</span>
        </div>
        <img className='headbar-img' src="./home.jpeg" alt="HomePage" />
    </div>
    </>
  )
}

export default Headbar