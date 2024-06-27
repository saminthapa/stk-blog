import React from 'react'
import './Home.css'
import Headbar from './Headbar'
import Posts from './Posts'
import Sidebar from './Sidebar'
const Home = () => {
  return (
    <>
    <Headbar />
    <div className='home'>
    <Posts />
    <Sidebar />
    </div>

    </>
  )
}

export default Home