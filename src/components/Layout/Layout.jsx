import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Layout