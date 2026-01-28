import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Data from '../components/Data'

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="app-layout">
        <Sidebar />
        <Data/>
      </div>
    </div>
  )
}

export default Home
