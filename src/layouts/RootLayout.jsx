import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarB from '../components/NavbarB'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <div>
        <NavbarB/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout