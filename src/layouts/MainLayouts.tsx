import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainLayouts() {
  return (
    <div>
      <Navbar />
      <div className='container pt-10 m-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
