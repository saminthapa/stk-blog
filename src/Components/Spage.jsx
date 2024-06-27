import React from 'react'
import "./Spage.css"
import Sidebar from './Sidebar'
import Spost from './Spost'

const Spage = () => {
  return (
    <>
    <div className='single'>
      <Spost />
      <Sidebar />
 
    </div>
    </>
  )
}

export default Spage