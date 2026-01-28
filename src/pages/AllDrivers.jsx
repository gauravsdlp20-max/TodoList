import React from 'react'
import "./AllDrivers.css"
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AllTodos from '../components/AllTodos'

function AllDrivers() {
  return (
    <div>
      <Navbar />
      <div className='app-layout'>
        <Sidebar/>
        <AllTodos/>
      </div>
    </div>
  )
}

export default AllDrivers
