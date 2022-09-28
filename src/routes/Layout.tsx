import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Navbar/>
      <div className="main">
        <Outlet/>
      </div>
    </>
  )
}
